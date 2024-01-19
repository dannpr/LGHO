// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface ILendingPool {
    function deposit(
        address asset,
        uint256 amount,
        address onBehalfOf,
        uint16 referralCode
    ) external;

    function borrow(
        address asset,
        uint256 amount,
        uint256 interestRateMode,
        uint16 referralCode,
        address onBehalfOf
    ) external;

    function getReserveData(
        address asset
    )
        external
        view
        returns (
            uint256,
            uint256,
            uint256,
            uint256,
            uint256,
            uint256,
            uint256,
            uint256,
            uint256,
            uint256,
            uint256,
            uint40
        );
}

contract GhoModule {
    address immutable SAFE_ADDRESS = "";
    address immutable GHO_ADDRESS = "0xc4bF5CbDaBE595361438F8c6a187bDc330539c60"; // The address of the GHO token on Sepolia Testnet
    address immutable AAVE_LENDING_POOL_ADDRESS = "";

    GnosisSafe safe = GnosisSafe(SAFE_ADDRESS);
    ILendingPool public lendingPool = ILendingPool(AAVE_LENDING_POOL_ADDRESS);

    function supplyBorrowSend(uint256 amount, address recipient) external {
        // Approve the lending pool to spend the tokens
        IERC20(GHO_ADDRESS).approve(address(lendingPool), amount);

        // Deposit tokens into the Aave lending pool
        lendingPool.deposit(GHO_ADDRESS, amount, msg.sender, 0);

        // Borrow GHO against the supplied collateral
        lendingPool.borrow(GHO_ADDRESS, amount, 2, 0, msg.sender); // Assuming 2 is the variable interest rate mode

        // transfer to another address
        IERC20(GHO_ADDRESS).transferFrom(msg.sender, recipient, amount);
    }

    function sendGhoToAddress(
        address recipient,
        uint256 amount
    ) external OnlyOperator(msg.sender) returns (bool success, bytes response) {
        // Get the GHO balance of this contract
        uint256 ghoBalance = IERC20(GHO_ADDRESS).balanceOf(address(this));

        // Verify if the gho balance is enough to send
        require(ghoBalance >= amount, "Not enough GHO balance");

        bytes memory data = abi.encodeWithSelector(
            this.supplyBorrowSend.selector,
            amount,
            recipient
        );

        (success, response) = safe.execTransactionFromModuleReturnData();
    }
}
