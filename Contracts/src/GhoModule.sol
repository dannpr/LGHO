// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "protocol-v3/contracts/interfaces/IPool.sol";
import "safe-contracts/interfaces/IModuleManager.sol";
import "safe-contracts/interfaces/ISafe.sol";


contract GhoModule is Module {
    address immutable GHO_ADDRESS =
        "0xc4bF5CbDaBE595361438F8c6a187bDc330539c60"; // Set the GHO token address
    address immutable USDC_ADDRESS =
        "0x13fA158A117b93C27c55b8216806294a0aE88b6D"; // Set the USDC token address
    address immutable AAVE_POOL_ADDRESS =
        "0x6Ae43d3271ff6888e7Fc43Fd7321a503ff738951"; // Set the Aave V3 lending pool address

    IGnosisSafe safe;
    IPool public lPool = IPool(GHO_AAVE_POOL_ADDRESS);

    function supplyBorrowSend(
        address senderSafe,
        uint256 depositAmount,
        address recipient
    ) external OnlyOperator(msg.sender) {
        IERC20 USDCToken = IERC20(USDC_ADDRESS);
        uint256 borrowAmount = depositAmount / 2;

        // Approve the lending pool to spend the USDC tokens
        USDCToken.approve(address(lPool), depositAmount);

        // Deposit USDC into the Aave lending pool
        lPool.supply(USDC_ADDRESS, depositAmount, address(this), 0);

        // Borrow GHO against the supplied USDC collateral
        lPool.borrow(GHO_ADDRESS, borrowAmount, 2, 0, address(this)); // Assuming 2 is the variable interest rate mode

        // Transfer the borrowed GHO to the recipient
        IERC20(GHO_ADDRESS).transfer(recipient, borrowAmount);
    }

    function sendGhoToAddress(
        address recipient,
        uint256 amount
    ) external returns (bool success, bytes memory response) {
        bytes memory data = abi.encodeWithSelector(
            this.supplyBorrowSend.selector,
            amount,
            recipient
        );

        (success, response) = ISafe(msg.sender)
            .execTransactionFromModuleReturnData(
                recipient,
                0,
                data,
                IGnosisSafe.Operation.Call
            );
    }
}
