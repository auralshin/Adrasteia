// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";
import "./Verifier.sol";
import "./console.sol";

contract AdrasteiaZkPayment is Ownable, Groth16Verifier, Pausable {
    using SafeERC20 for IERC20;
    Groth16Verifier public verifier;

    struct Payment {
        uint256 amount;
        address sender;
        uint256 passcodeHash;
        address token;
    }

    mapping(uint256 => Payment) public payments;
    uint256 public paymentsCount;
    address constant ETH = 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE;
    // Events
    event PaymentAdded(uint256 paymentId, string description);
    event PaymentSent(uint256 paymentId);

    // Custom errors
    error InvalidZkSnarkProof();
    error InvalidPayment();
    error PaymentAlreadySent();

    constructor(address initialOwner) Ownable(initialOwner) {}

    function addPayment(
        uint256 amount,
        address sender,
        uint256 passcodeHash,
        address token
    ) public payable onlyOwner {
        require(token != address(0), "Invalid token address");
        if (token == ETH) {
            require(msg.value == amount, "Invalid value");
        } else {
            (IERC20(token)).safeTransferFrom(msg.sender, address(this), amount);
        }
        paymentsCount += 1;
        payments[paymentsCount] = Payment(amount, sender, passcodeHash, token);
        emit PaymentAdded(paymentsCount, "Payment added");
    }

    function getPayment(
        uint256 paymentId
    )
        external
        view
        returns (
            uint256 amount,
            address sender,
            uint256 passcodeHash,
            address token
        )
    {
        Payment storage payment = payments[paymentId];
        return (
            payment.amount,
            payment.sender,
            payment.passcodeHash,
            payment.token
        );
    }

    function sendPayment(
        uint256 paymentId,
        uint256[] memory proof
    ) external whenNotPaused {
        Payment storage payment = payments[paymentId];
        require(payment.amount > 0, "Invalid payment");
        require(payment.token != address(0), "Invalid token");

        require(proof.length == 8, "Invalid proof");
        console.logString("proof starts here");
        uint256[2] memory a = [proof[0], proof[1]];
        uint256[2][2] memory b = [[proof[2], proof[3]], [proof[4], proof[5]]];
        uint256[2] memory c = [proof[6], proof[7]];
        uint256[2] memory input = [
            payment.passcodeHash,
            uint256(uint160(msg.sender))
        ];
        console.logUint(a[0]);
        console.logUint(a[1]);
        console.logUint(b[0][0]);
        console.logUint(b[0][1]);
        console.logUint(b[1][0]);
        console.logUint(b[1][1]);
        console.logUint(c[0]);
        console.logUint(c[1]);
        console.logUint(input[0]);
        console.logUint(input[1]);
        bool r = this.verifyProof(a, b, c, input);
        console.logBool(r);
        require(this.verifyProof(a, b, c, input), "Failed verify proof");

        if (payment.token == ETH) {
            (bool sent, bytes memory _data) = payable(msg.sender).call{
                value: payment.amount
            }("");
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
