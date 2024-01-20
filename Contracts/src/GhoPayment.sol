// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "protocol-v3/contracts/interfaces/IPool.sol";

contract GhoPayment {
    address immutable AAVE_POOL_ADDRESS =
        address(0x6Ae43d3271ff6888e7Fc43Fd7321a503ff738951); // Set the Aave V3 lending pool address on sepolia
    address immutable GHO_ADDRESS =
        address(0xc4bF5CbDaBE595361438F8c6a187bDc330539c60); // Set the GHO token address on sepolia

    IPool public lPool = IPool(AAVE_POOL_ADDRESS);

    function sendPayment(
        address _ERC20Token,
        address recipient,
        uint256 amount
    ) external {
        IERC20 ERC20Token = IERC20(_ERC20Token);
        uint256 borrowAmount = amount / 2;

        // Approve the lending pool to spend the USDC tokens
        ERC20Token.approve(address(lPool), amount);

        // Deposit USDC into the Aave lending pool
        lPool.supply(_ERC20Token, amount, address(this), 0);

        // Borrow GHO against the supplied USDC collateral
        lPool.borrow(GHO_ADDRESS, borrowAmount, 2, 0, address(this)); // Assuming 2 is the variable interest rate mode

        // Transfer the borrowed GHO to the recipient
        IERC20(GHO_ADDRESS).transfer(recipient, borrowAmount);
    }
}
