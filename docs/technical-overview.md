---
sidebar_position: 3
---

# Technical Overview

## Core Mechanics

At its heart, Zhenglong operates as a **decentralized platform for creating and trading synthetic assets** - tokens that mirror the value of real-world or digital assets without needing direct custody of those assets. The protocol functions as a single, system-wide collateralized debt position (CDP) with **100% collateral efficiency**:

- **Collateral**: Users deposit assets (like stETH) into the market's collateral pool
- **Debt (ZHE Tokens)**: Synthetic pegged tokens that track currencies, cryptocurrencies, stocks, or anything with a reliable price feed
- **Equity (STEAMED Tokens)**: Leverage tokens that absorb volatility between collateral and pegged tokens, offering a long position on collateral vs the pegged token
- **Health**: Stability pools automatically rebalance the protocol, maintaining system solvency without reliance on off-chain liquidators

This novel three-token model allows users to:

1. Mint stable, pegged assets (zheTokens) against the shared collateral pool
2. Gain leveraged exposure through STEAMED tokens with liquidation protection
3. Earn real yield by providing stability through Stability Pools

## Protocol Architecture

Zhenglong implements a sophisticated 3-token system designed for capital efficiency and stability:

### 1. Collateral Token

- Users deposit approved yield bearing collateral (e.g., stETH, or sDAI) into Zhenglong's shared collateral pool
- Collateral is collectively managed by the protocol, not tied to individual users
- The protocol maintains a global minimum collateralization ratio (e.g., 130%) to ensure system solvency
- Yield-bearing collateral (like stETH) generates real returns distributed to Stability Pool participants and STEAM stakers, who also enjoy mint and redeem fees.

### 2. ZHE Tokens (Pegged Assets)

- Synthetic assets pegged 1:1 to a reference price using reliable oracle feeds
- Examples include:
  - zheUSD — pegged to USD
  - zheBTC — pegged to Bitcoin
  - zheTSLA — pegged to Tesla stock price
- Freely usable across DeFi platforms
- Redeemable against collateral
- Designed to maintain a tight peg through arbitrage and protocol rebalancing

### 3. STEAMED Tokens (Leverage Tokens)

- Variable leverage tokens representing the residual claim on the collateral after accounting for issued pegged tokens
- Similar to holding a liquidation-protected leveraged long position on the collateral versus the peg
- As collateral appreciates relative to the pegged token, STEAMED tokens rise faster than the collateral itself
- If collateral depreciates, STEAMED tokens absorb losses first, protecting zheToken holders
- Rebalanced automatically by the protocol during market stress via Stability Pools
- Protection from liquidations - value fluctuates dynamically without sudden margin calls

## Rebalancing Mechanism

The protocol employs automated Stability Pools that trigger rebalances when the system-wide collateral ratio falls below a threshold (e.g., 130%):

### Process

1. When global collateralization ratio falls below the safety threshold, the protocol enters stability mode
2. A rebalance transaction becomes executable by MEV searchers who are economically incentivized to execute it
3. The transaction swaps zheTokens from the Stability Pool for either collateral or steamedTokens (depending on pool type)
4. This improves the collateral ratio and maintains system solvency

### Types of Stability Pools

- **Collateral Stability Pools**: Pegged tokens deposited here are used to redeem real collateral assets at 1:1 value based on the oracle price
- **Steamed Stability Pools**: Pegged tokens deposited here are swapped for steamedTokens during rebalancing, allowing accumulation of leveraged exposure

### Benefits

- Maintains system solvency without auctions or external liquidators
- Generates organic yield for pool participants through collateral yield and STEAM rewards
- Ensures peg stability and protocol health
- Transforms market downturns into opportunities for Stability Pool participants

## Protocol Workflow

1. **Minting Process**

   - User interacts with the global collateral pool
   - Mints zheTokens or steamedTokens with 100% collateral efficiency

2. **Stability Pool Participation**

   - Deposit zheTokens into stability pools
   - Earn yield from collateral and STEAM rewards
   - Provide protocol security
   - Choose between Collateral or Steamed Stability Pools based on risk preference

3. **Leverage Trading**

   - Users acquire STEAMED tokens
   - Gain protected leverage exposure
   - No funding fees, margin calls, or liquidation risk

4. **Automated Rebalancing**
   - System monitors collateral ratios
   - MEV searchers execute rebalancing when triggered
   - Maintains peg stability and system health
