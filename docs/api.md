---
sidebar_position: 5
---

# API Reference

This document provides detailed information about the Zhenglong Protocol's smart contract interfaces and functions.

## Contract Addresses

:::note Coming Soon
Contract addresses will be published here upon mainnet deployment. The protocol is currently in development and testing phase.
:::

## Core Interfaces

### Minter Contract

```solidity
interface IMinter {
  // View Functions
  function collateralTokenBalance() external view returns (uint256);
  function totalCollateralValue() external view returns (uint256);
  function totalPeggedValue() external view returns (uint256);
  function totalLeveragedValue() external view returns (uint256);
  function collateralRatio() external view returns (uint256);

  // Events
  event LeveragedTokenMinted(
    address indexed user,
    uint256 collateralAmount,
    uint256 tokenAmount,
    uint256 timestamp
  );
  event LeveragedTokenRedeemed(
    address indexed user,
    uint256 tokenAmount,
    uint256 collateralAmount,
    uint256 timestamp
  );
}
```

### Stability Pool Contract

```solidity
interface IStabilityPool {
  // View Functions
  function getDepositAmount(address user) external view returns (uint256);
  function getRewards(address user) external view returns (uint256);
  function getAPR() external view returns (uint256);

  // State-Changing Functions
  function deposit(uint256 amount) external;
  function withdraw(uint256 amount) external;
  function claimRewards() external;
}
```

### Price Oracle Contract

```solidity
interface IPriceOracle {
  // View Functions
  function getPrice(address token) external view returns (uint256);
  function getRoundData(uint80 roundId) external view returns (
    uint80 roundId,
    int256 answer,
    uint256 startedAt,
    uint256 updatedAt,
    uint80 answeredInRound
  );
}
```

## Integration Examples

:::note Examples Only
The following examples use placeholder addresses and are provided for illustration purposes only. Replace with actual contract addresses once the protocol is deployed to mainnet.
:::

### Reading Market Data

```typescript
import { ethers } from "ethers";
import { markets } from "@zhenglong/config";

const provider = new ethers.providers.Web3Provider(window.ethereum);
const market = markets["steth-usd"];

// Get collateral ratio
const minter = new ethers.Contract(
  "0x1234567890123456789012345678901234567890", // Replace with actual minter address after deployment
  minterABI,
  provider
);
const collateralRatio = await minter.collateralRatio();

// Get current price
const priceOracle = new ethers.Contract(
  "0x1234567890123456789012345678901234567890", // Replace with actual oracle address after deployment
  priceOracleABI,
  provider
);
const price = await priceOracle.getPrice(
  "0x1234567890123456789012345678901234567890"
); // Replace with token address
```

### Interacting with Stability Pools

```typescript
// Deposit into stability pool
const stabilityPool = new ethers.Contract(
  "0x1234567890123456789012345678901234567890", // Replace with actual stability pool address after deployment
  stabilityPoolABI,
  signer
);
await stabilityPool.deposit(ethers.utils.parseEther("1.0"));

// Claim rewards
await stabilityPool.claimRewards();
```

## Error Codes

```solidity
enum RebalancePoolError {
  ErrorWrapperSrcMismatch,
  ErrorWrapperDstMismatch,
  DepositZeroAmount,
  DepositAmountLessThanMinimum,
  WithdrawZeroAmount,
  WithdrawAmountExceedsBalance,
  collateralRatioTooHigh,
  NotEnoughTokensToLiquidate,
  InvalidLiquidationToken,
  ErrorSelfSharingIsNotAllowed,
  ErrorCascadedSharingIsNotAllowed,
  ErrorVoteShareNotAllowed,
  ErrorNoAcceptedSharedVote,
  ErrorVoteOwnerCannotStake,
  ErrorRepeatAcceptSharedVote,
  RewardClaimFailed
}
```

## Event Indexing

### Stability Pool Events

```solidity
event Deposit(
  address indexed user,
  uint256 amount,
  uint256 timestamp
);

event Withdraw(
  address indexed user,
  uint256 amount,
  uint256 timestamp
);

event RewardsClaimed(
  address indexed user,
  uint256 amount,
  uint256 timestamp
);
```

### Market Events

```solidity
event PriceUpdated(
  address indexed token,
  uint256 price,
  uint256 timestamp
);

event CollateralRatioUpdated(
  uint256 oldRatio,
  uint256 newRatio,
  uint256 timestamp
);
```

## Best Practices

1. **Error Handling**

   - Always check return values
   - Handle revert cases
   - Implement proper error messages
   - Use try-catch blocks

2. **Gas Optimization**

   - Batch transactions when possible
   - Use view functions for reading data
   - Optimize storage access
   - Consider gas costs

3. **Security**

   - Validate all inputs
   - Check access controls
   - Implement proper checks
   - Use safe math operations

4. **Testing**
   - Write unit tests
   - Test edge cases
   - Implement integration tests
   - Use test networks

## Support

Need help with the API?

- Join our [Discord](https://discord.gg/zhenglong)
