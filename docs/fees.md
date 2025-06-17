---
sidebar_position: 6
---

# Protocol Fees

## Dynamic Fees: Built-In Market Regulation

Zhenglong uses a real-time, responsive fee system for all mints and redemptions. It works like a pressure valve:

- **Under normal conditions**, fees are low - maybe 0.25% for minting zheTOKENS and 1% for minting steamedTOKENS.
- **If the system is at risk** (e.g., someone tries to mint a large amount of zheTOKENS), fees scale up in proportion to how much stress the action would cause.
- **If the system needs help** - for example, to improve its collateral ratio - it can offer zero or even negative fees, essentially paying users to take helpful actions like minting steamedTOKENS.

## Tiered Fee Structure

Fees are tiered: if a large transaction pushes the system past certain thresholds, higher fees apply to the portion that causes the most stress. This makes things fair - users only pay for the impact they actually cause.

## Why It Works: A Feedback Loop That Balances Demand

This fee system creates a self-correcting market:

- **If everyone wants zheTOKENS**, it becomes increasingly expensive to mint zheTOKENS and cheaper to mint steamedTOKENS, encouraging balance.
- **If everyone wants leverage**, the opposite happens - zheTOKENS minting becomes cheaper, drawing users to the stable side.
- **Arbitrageurs and advanced users** will step in to exploit these dynamics, ensuring no imbalance goes unchecked.

## System Integration

Together with [Stability Pools](./stability-pools) (which manage ongoing systemic risk), the dynamic fee system helps Zhenglong maintain both flexibility and robustness. User behavior is steered gently - but powerfully - through financial incentives at the entry and exit points.

## Key Benefits

### Automatic Market Regulation

- Fees adjust in real-time based on system needs
- No manual intervention required
- Prevents extreme imbalances before they occur

### Fair Pricing

- Users pay fees proportional to the stress they cause
- Large transactions that push thresholds pay higher rates only on the excess
- Small transactions remain affordable

### Incentive Alignment

- The system can pay users to take beneficial actions
- Negative fees reward behavior that improves system health
- Market forces naturally maintain balance

## How It Affects You

- **Small transactions**: Minimal impact, low fees under normal conditions
- **Large transactions**: Higher fees on portions that stress the system
- **Beneficial actions**: Potential rewards when the system needs rebalancing
- **Market timing**: Better rates available when acting counter to crowd behavior
