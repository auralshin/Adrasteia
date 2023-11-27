// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "./Verifier.sol";

/**
 * @title Adrasteia Zero-Knowledge Payment Contract
 * @dev This contract enables payments with optional privacy through zk-SNARK proofs,
 *      supporting both ETH and ERC20 tokens.
 */
contract AdrasteiaZkPayment is
    Ownable,
    Groth16Verifier,
    Pausable,
    ReentrancyGuard
{
    using SafeERC20 for IERC20;
    Groth16Verifier public verifier;

    struct Payment {
        uint256 amount;
        address sender;
        uint256 passcodeHash;
        address token;
    }

    mapping(uint256 => Payment) private payments;
    uint256 private paymentsCount;
    address constant ETH = 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE;
    // Events
    event PaymentAdded(uint256 indexed paymentId, string description);
    event PaymentSent(uint256 indexed paymentId);

    // Custom errors
    error InvalidZkSnarkProof();
    error InvalidPayment();
    error PaymentAlreadySent();

    constructor(address initialOwner) Ownable(initialOwner) {}

    /**
     * @dev Add a new payment to the contract.
     * @param amount Amount of tokens or ETH to be paid.
     * @param sender Address of the sender.
     * @param passcodeHash Hash of the payment passcode.
     * @param token Token address (use ETH constant for Ether).
     */
    function addPayment(
        uint256 amount,
        address sender,
        uint256 passcodeHash,
        address token
    ) public payable onlyOwner whenNotPaused {
        if (token == ETH) {
            require(msg.value == amount, "Invalid value");
        } else {
            require(msg.value == 0, "ETH not accepted for token payments");
            IERC20(token).safeTransferFrom(sender, address(this), amount);
        }
        paymentsCount++;
        payments[paymentsCount] = Payment(amount, sender, passcodeHash, token);
        emit PaymentAdded(paymentsCount, "Payment added");
    }

    /**
     * @dev Retrieve details of a specific payment.
     * @param paymentId The ID of the payment to retrieve.
     * @return Payment details including amount, sender, passcodeHash, and token.
     */
    function getPayment(
        uint256 paymentId
    ) external view returns (uint256, address, address) {
        Payment storage payment = payments[paymentId];
        return (payment.amount, payment.sender, payment.token);
    }

    /**
     * @dev Send a payment after verifying the zk-SNARK proof.
     * @param paymentId The ID of the payment to send.
     * @param proof zk-SNARK proof to be verified.
     */
    function sendPayment(
        uint256 paymentId,
        uint256[] memory proof
    ) external nonReentrant whenNotPaused {
        Payment storage payment = payments[paymentId];
        require(payment.amount > 0, "Invalid payment");
        require(payment.token != address(0), "Invalid token");

        require(proof.length == 8, "Invalid proof");
        uint256[2] memory a = [proof[0], proof[1]];
        uint256[2][2] memory b = [[proof[2], proof[3]], [proof[4], proof[5]]];
        uint256[2] memory c = [proof[6], proof[7]];
        uint256[2] memory input = [
            payment.passcodeHash,
            uint256(uint160(msg.sender))
        ];
        require(this.verifyProof(a, b, c, input), "Failed verify proof");

        if (payment.token == ETH) {
            (bool sent, ) = payable(msg.sender).call{value: payment.amount}("");
            require(sent, "Failed to send Ether");
        } else {
            (IERC20(payment.token)).safeTransfer(msg.sender, payment.amount);
        }

        emit PaymentSent(paymentId);
    }

    function transferContractOwnership(address newOwner) external onlyOwner {
        transferOwnership(newOwner);
    }
}
