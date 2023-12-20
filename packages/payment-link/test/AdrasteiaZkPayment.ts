import { ethers, network } from "hardhat";
import { Contract, Signer } from "ethers";
import { expect } from "chai";
import keccak256 from "keccak256"; // MerkleTree.js uses keccak256 for Ethereum use-case
import {
  AdrasteiaZkPayment,
  AdrasteiaZkPayment__factory,
} from "../typechain-types";
import { generateProof, passcodeHash } from "../utils/index";

// create interface fro this json
type Proof = {
  pi_a: [string, string, string];
  pi_b: [[string, string], [string, string], [string, string]];
  pi_c: [string, string, string];
  protocol: string;
  curve: string;
};
describe("AdrasteiaZkPayment", () => {
  let accounts: any[];
  let ownerAddress: string;
  let adrasteiaZkPayment: AdrasteiaZkPayment;

  beforeEach(async () => {
    accounts = await ethers.getSigners();
    ownerAddress = await accounts[0].getAddress();

    // Assuming the deployment script name for your contract is "adrasteiaZkPayment"
    adrasteiaZkPayment = await ethers.deployContract(
      "AdrasteiaZkPayment",
      [ownerAddress],
      accounts[0]
    );
  });

  describe("addPayment", () => {
    it("should add a new paymnet", async () => {
      const passcode = await passcodeHash(
        await accounts[0].getAddress(),
        "123456"
      );
      await expect(
        adrasteiaZkPayment
          .connect(accounts[0])
          .addPayment(
            10000000000000000000n,
            await accounts[0].getAddress(),
            passcode,
            "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
            {
              value: 10000000000000000000n,
            }
          )
      )
        .to.emit(adrasteiaZkPayment, "PaymentAdded")
        .withArgs(1, "Payment added");
    });
    it("non-owner should not be able to add a proposal", async () => {
      const nonOwner = await accounts[1].getAddress();
      const passcode = await passcodeHash(nonOwner, "123456");
      await expect(
        adrasteiaZkPayment
          .connect(accounts[1])
          .addPayment(
            10000000000000000000n,
            await accounts[0].getAddress(),
            passcode,
            "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
          )
      ).to.be.revertedWithCustomError(
        adrasteiaZkPayment,
        "OwnableUnauthorizedAccount"
      );
    });
    it("should add multiple proposals and increment IDs", async () => {
      const passcode = await passcodeHash(
        await accounts[0].getAddress(),
        "123456"
      );
      await adrasteiaZkPayment
        .connect(accounts[0])
        .addPayment(
          10000000000000000000n,
          await accounts[0].getAddress(),
          passcode,
          "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          {
            value: 10000000000000000000n,
          }
        );
      await adrasteiaZkPayment
        .connect(accounts[0])
        .addPayment(
          10000000000000000000n,
          await accounts[0].getAddress(),
          passcode,
          "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          {
            value: 10000000000000000000n,
          }
        );
    });
  });

  describe("claimPayment", () => {
    let zkProof: string[];
    beforeEach(async () => {
      const passcode = await passcodeHash(
        await accounts[0].getAddress(),
        "123456"
      );
      await adrasteiaZkPayment
        .connect(accounts[0])
        .addPayment(
          10000000000000000000n,
          await accounts[0].getAddress(),
          passcode,
          "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          {
            value: 10000000000000000000n,
          }
        );
    });
    it("should send amount for valid zk proof", async () => {
      zkProof = await generateProof(
        await accounts[0].getAddress(),
        "123456",
        await accounts[1].getAddress()
      );

      console.log("zkProof", zkProof.length);

      await expect(
        adrasteiaZkPayment.connect(accounts[1]).claimPayment(1, zkProof)
      )
        .to.emit(adrasteiaZkPayment, "PaymentSent")
        .withArgs(1);
    });
  });

  describe("Ownership", () => {
    it("should allow ownership transfer and validate new owner privileges", async () => {
      const newOwnerAddress = await accounts[1].getAddress();
      await adrasteiaZkPayment.transferContractOwnership(newOwnerAddress);
      const newOwner = await adrasteiaZkPayment.owner();
      expect(newOwner).to.equal(newOwnerAddress);

      const passcode = await passcodeHash(
        await accounts[1].getAddress(),
        "123456"
      );
      await expect(
        adrasteiaZkPayment
          .connect(accounts[1])
          .addPayment(
            100,
            await accounts[1].getAddress(),
            passcode,
            "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
            {
              value: 100,
            }
          )
      ).to.emit(adrasteiaZkPayment, "PaymentAdded");
    });
  });
});
