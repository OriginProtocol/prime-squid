## How might we track points if wallets staked their primeETH in Zircuit?

### What is Zircuit?

> "Zircuit is a zero-knowledge rollup powering the limitless potential of web3."

https://www.zircuit.com/

### Contract Details: ZtakingPool

**Address**: 0x221c2b6ee63dcede31ea703898ae15d889d881f0

**Etherscan**: https://etherscan.io/address/0x221c2b6ee63dcede31ea703898ae15d889d881f0#code

- Looks like we can track balances of specific tokens using: `balance(address token, address staker)`
- The contract emits `Deposit` and `Withdraw` events which we could look at.

#### Possible solution:

Ignore transfers in and out of the ZtakingPool address.

 - This would cause our point balances to remain unchanged for wallets interacting with the ZtakingPool.
 - Need to ensure that ONLY the depositor can withdraw the funds they deposited into ZtakingPool.
 - If for some reason balances could be transferred around within that pool, then things would get complicated.
   - Seems we should look at whether `migrate` could do this. (?)
 - If only what goes in is what can come out, then ignoring transfers with that contract should be a very easy solution.


Likely actions to take:
1. Add a mechanism to ignore transfers in/out of certain addresses and add the ZtakingPool address to it.
2. Test this mechanism with addresses that already exist in our dataset.
3. PR -> Merge -> v6 branch -> Deploy -> Validate -> Set Prod -> Migrate v5


If all goes well, this is exceedingly simple.