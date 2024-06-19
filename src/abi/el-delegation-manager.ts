import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './el-delegation-manager.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    Initialized: new LogEvent<([version: number] & {version: number})>(
        abi, '0x7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498'
    ),
    MinWithdrawalDelayBlocksSet: new LogEvent<([previousValue: bigint, newValue: bigint] & {previousValue: bigint, newValue: bigint})>(
        abi, '0xafa003cd76f87ff9d62b35beea889920f33c0c42b8d45b74954d61d50f4b6b69'
    ),
    OperatorDetailsModified: new LogEvent<([operator: string, newOperatorDetails: ([earningsReceiver: string, delegationApprover: string, stakerOptOutWindowBlocks: number] & {earningsReceiver: string, delegationApprover: string, stakerOptOutWindowBlocks: number})] & {operator: string, newOperatorDetails: ([earningsReceiver: string, delegationApprover: string, stakerOptOutWindowBlocks: number] & {earningsReceiver: string, delegationApprover: string, stakerOptOutWindowBlocks: number})})>(
        abi, '0xfebe5cd24b2cbc7b065b9d0fdeb904461e4afcff57dd57acda1e7832031ba7ac'
    ),
    OperatorMetadataURIUpdated: new LogEvent<([operator: string, metadataURI: string] & {operator: string, metadataURI: string})>(
        abi, '0x02a919ed0e2acad1dd90f17ef2fa4ae5462ee1339170034a8531cca4b6708090'
    ),
    OperatorRegistered: new LogEvent<([operator: string, operatorDetails: ([earningsReceiver: string, delegationApprover: string, stakerOptOutWindowBlocks: number] & {earningsReceiver: string, delegationApprover: string, stakerOptOutWindowBlocks: number})] & {operator: string, operatorDetails: ([earningsReceiver: string, delegationApprover: string, stakerOptOutWindowBlocks: number] & {earningsReceiver: string, delegationApprover: string, stakerOptOutWindowBlocks: number})})>(
        abi, '0x8e8485583a2310d41f7c82b9427d0bd49bad74bb9cff9d3402a29d8f9b28a0e2'
    ),
    OperatorSharesDecreased: new LogEvent<([operator: string, staker: string, strategy: string, shares: bigint] & {operator: string, staker: string, strategy: string, shares: bigint})>(
        abi, '0x6909600037b75d7b4733aedd815442b5ec018a827751c832aaff64eba5d6d2dd'
    ),
    OperatorSharesIncreased: new LogEvent<([operator: string, staker: string, strategy: string, shares: bigint] & {operator: string, staker: string, strategy: string, shares: bigint})>(
        abi, '0x1ec042c965e2edd7107b51188ee0f383e22e76179041ab3a9d18ff151405166c'
    ),
    OwnershipTransferred: new LogEvent<([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
    Paused: new LogEvent<([account: string, newPausedStatus: bigint] & {account: string, newPausedStatus: bigint})>(
        abi, '0xab40a374bc51de372200a8bc981af8c9ecdc08dfdaef0bb6e09f88f3c616ef3d'
    ),
    PauserRegistrySet: new LogEvent<([pauserRegistry: string, newPauserRegistry: string] & {pauserRegistry: string, newPauserRegistry: string})>(
        abi, '0x6e9fcd539896fca60e8b0f01dd580233e48a6b0f7df013b89ba7f565869acdb6'
    ),
    StakerDelegated: new LogEvent<([staker: string, operator: string] & {staker: string, operator: string})>(
        abi, '0xc3ee9f2e5fda98e8066a1f745b2df9285f416fe98cf2559cd21484b3d8743304'
    ),
    StakerForceUndelegated: new LogEvent<([staker: string, operator: string] & {staker: string, operator: string})>(
        abi, '0xf0eddf07e6ea14f388b47e1e94a0f464ecbd9eed4171130e0fc0e99fb4030a8a'
    ),
    StakerUndelegated: new LogEvent<([staker: string, operator: string] & {staker: string, operator: string})>(
        abi, '0xfee30966a256b71e14bc0ebfc94315e28ef4a97a7131a9e2b7a310a73af44676'
    ),
    StrategyWithdrawalDelayBlocksSet: new LogEvent<([strategy: string, previousValue: bigint, newValue: bigint] & {strategy: string, previousValue: bigint, newValue: bigint})>(
        abi, '0x0e7efa738e8b0ce6376a0c1af471655540d2e9a81647d7b09ed823018426576d'
    ),
    Unpaused: new LogEvent<([account: string, newPausedStatus: bigint] & {account: string, newPausedStatus: bigint})>(
        abi, '0x3582d1828e26bf56bd801502bc021ac0bc8afb57c826e4986b45593c8fad389c'
    ),
    WithdrawalCompleted: new LogEvent<([withdrawalRoot: string] & {withdrawalRoot: string})>(
        abi, '0xc97098c2f658800b4df29001527f7324bcdffcf6e8751a699ab920a1eced5b1d'
    ),
    WithdrawalMigrated: new LogEvent<([oldWithdrawalRoot: string, newWithdrawalRoot: string] & {oldWithdrawalRoot: string, newWithdrawalRoot: string})>(
        abi, '0xdc00758b65eef71dc3780c04ebe36cab6bdb266c3a698187e29e0f0dca012630'
    ),
    WithdrawalQueued: new LogEvent<([withdrawalRoot: string, withdrawal: ([staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, shares: Array<bigint>] & {staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, shares: Array<bigint>})] & {withdrawalRoot: string, withdrawal: ([staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, shares: Array<bigint>] & {staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, shares: Array<bigint>})})>(
        abi, '0x9009ab153e8014fbfb02f2217f5cde7aa7f9ad734ae85ca3ee3f4ca2fdd499f9'
    ),
}

export const functions = {
    DELEGATION_APPROVAL_TYPEHASH: new Func<[], {}, string>(
        abi, '0x04a4f979'
    ),
    DOMAIN_TYPEHASH: new Func<[], {}, string>(
        abi, '0x20606b70'
    ),
    MAX_STAKER_OPT_OUT_WINDOW_BLOCKS: new Func<[], {}, bigint>(
        abi, '0x4fc40b61'
    ),
    MAX_WITHDRAWAL_DELAY_BLOCKS: new Func<[], {}, bigint>(
        abi, '0xca661c04'
    ),
    STAKER_DELEGATION_TYPEHASH: new Func<[], {}, string>(
        abi, '0x43377382'
    ),
    beaconChainETHStrategy: new Func<[], {}, string>(
        abi, '0x9104c319'
    ),
    calculateCurrentStakerDelegationDigestHash: new Func<[staker: string, operator: string, expiry: bigint], {staker: string, operator: string, expiry: bigint}, string>(
        abi, '0x1bbce091'
    ),
    calculateDelegationApprovalDigestHash: new Func<[staker: string, operator: string, _delegationApprover: string, approverSalt: string, expiry: bigint], {staker: string, operator: string, _delegationApprover: string, approverSalt: string, expiry: bigint}, string>(
        abi, '0x0b9f487a'
    ),
    calculateStakerDelegationDigestHash: new Func<[staker: string, _stakerNonce: bigint, operator: string, expiry: bigint], {staker: string, _stakerNonce: bigint, operator: string, expiry: bigint}, string>(
        abi, '0xc94b5111'
    ),
    calculateWithdrawalRoot: new Func<[withdrawal: ([staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, shares: Array<bigint>] & {staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, shares: Array<bigint>})], {withdrawal: ([staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, shares: Array<bigint>] & {staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, shares: Array<bigint>})}, string>(
        abi, '0x597b36da'
    ),
    completeQueuedWithdrawal: new Func<[withdrawal: ([staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, shares: Array<bigint>] & {staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, shares: Array<bigint>}), tokens: Array<string>, middlewareTimesIndex: bigint, receiveAsTokens: boolean], {withdrawal: ([staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, shares: Array<bigint>] & {staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, shares: Array<bigint>}), tokens: Array<string>, middlewareTimesIndex: bigint, receiveAsTokens: boolean}, []>(
        abi, '0x60d7faed'
    ),
    completeQueuedWithdrawals: new Func<[withdrawals: Array<([staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, shares: Array<bigint>] & {staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, shares: Array<bigint>})>, tokens: Array<Array<string>>, middlewareTimesIndexes: Array<bigint>, receiveAsTokens: Array<boolean>], {withdrawals: Array<([staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, shares: Array<bigint>] & {staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, shares: Array<bigint>})>, tokens: Array<Array<string>>, middlewareTimesIndexes: Array<bigint>, receiveAsTokens: Array<boolean>}, []>(
        abi, '0x33404396'
    ),
    cumulativeWithdrawalsQueued: new Func<[_: string], {}, bigint>(
        abi, '0xa1788484'
    ),
    decreaseDelegatedShares: new Func<[staker: string, strategy: string, shares: bigint], {staker: string, strategy: string, shares: bigint}, []>(
        abi, '0x132d4967'
    ),
    delegateTo: new Func<[operator: string, approverSignatureAndExpiry: ([signature: string, expiry: bigint] & {signature: string, expiry: bigint}), approverSalt: string], {operator: string, approverSignatureAndExpiry: ([signature: string, expiry: bigint] & {signature: string, expiry: bigint}), approverSalt: string}, []>(
        abi, '0xeea9064b'
    ),
    delegateToBySignature: new Func<[staker: string, operator: string, stakerSignatureAndExpiry: ([signature: string, expiry: bigint] & {signature: string, expiry: bigint}), approverSignatureAndExpiry: ([signature: string, expiry: bigint] & {signature: string, expiry: bigint}), approverSalt: string], {staker: string, operator: string, stakerSignatureAndExpiry: ([signature: string, expiry: bigint] & {signature: string, expiry: bigint}), approverSignatureAndExpiry: ([signature: string, expiry: bigint] & {signature: string, expiry: bigint}), approverSalt: string}, []>(
        abi, '0x7f548071'
    ),
    delegatedTo: new Func<[_: string], {}, string>(
        abi, '0x65da1264'
    ),
    delegationApprover: new Func<[operator: string], {operator: string}, string>(
        abi, '0x3cdeb5e0'
    ),
    delegationApproverSaltIsSpent: new Func<[_: string, _: string], {}, boolean>(
        abi, '0xbb45fef2'
    ),
    domainSeparator: new Func<[], {}, string>(
        abi, '0xf698da25'
    ),
    earningsReceiver: new Func<[operator: string], {operator: string}, string>(
        abi, '0x5f966f14'
    ),
    eigenPodManager: new Func<[], {}, string>(
        abi, '0x4665bcda'
    ),
    getDelegatableShares: new Func<[staker: string], {staker: string}, [_: Array<string>, _: Array<bigint>]>(
        abi, '0xcf80873e'
    ),
    getOperatorShares: new Func<[operator: string, strategies: Array<string>], {operator: string, strategies: Array<string>}, Array<bigint>>(
        abi, '0x90041347'
    ),
    getWithdrawalDelay: new Func<[strategies: Array<string>], {strategies: Array<string>}, bigint>(
        abi, '0x0449ca39'
    ),
    increaseDelegatedShares: new Func<[staker: string, strategy: string, shares: bigint], {staker: string, strategy: string, shares: bigint}, []>(
        abi, '0x28a573ae'
    ),
    initialize: new Func<[initialOwner: string, _pauserRegistry: string, initialPausedStatus: bigint, _minWithdrawalDelayBlocks: bigint, _strategies: Array<string>, _withdrawalDelayBlocks: Array<bigint>], {initialOwner: string, _pauserRegistry: string, initialPausedStatus: bigint, _minWithdrawalDelayBlocks: bigint, _strategies: Array<string>, _withdrawalDelayBlocks: Array<bigint>}, []>(
        abi, '0x22bf40e4'
    ),
    isDelegated: new Func<[staker: string], {staker: string}, boolean>(
        abi, '0x3e28391d'
    ),
    isOperator: new Func<[operator: string], {operator: string}, boolean>(
        abi, '0x6d70f7ae'
    ),
    migrateQueuedWithdrawals: new Func<[withdrawalsToMigrate: Array<([strategies: Array<string>, shares: Array<bigint>, staker: string, withdrawerAndNonce: ([withdrawer: string, nonce: bigint] & {withdrawer: string, nonce: bigint}), withdrawalStartBlock: number, delegatedAddress: string] & {strategies: Array<string>, shares: Array<bigint>, staker: string, withdrawerAndNonce: ([withdrawer: string, nonce: bigint] & {withdrawer: string, nonce: bigint}), withdrawalStartBlock: number, delegatedAddress: string})>], {withdrawalsToMigrate: Array<([strategies: Array<string>, shares: Array<bigint>, staker: string, withdrawerAndNonce: ([withdrawer: string, nonce: bigint] & {withdrawer: string, nonce: bigint}), withdrawalStartBlock: number, delegatedAddress: string] & {strategies: Array<string>, shares: Array<bigint>, staker: string, withdrawerAndNonce: ([withdrawer: string, nonce: bigint] & {withdrawer: string, nonce: bigint}), withdrawalStartBlock: number, delegatedAddress: string})>}, []>(
        abi, '0x5cfe8d2c'
    ),
    minWithdrawalDelayBlocks: new Func<[], {}, bigint>(
        abi, '0xc448feb8'
    ),
    modifyOperatorDetails: new Func<[newOperatorDetails: ([earningsReceiver: string, delegationApprover: string, stakerOptOutWindowBlocks: number] & {earningsReceiver: string, delegationApprover: string, stakerOptOutWindowBlocks: number})], {newOperatorDetails: ([earningsReceiver: string, delegationApprover: string, stakerOptOutWindowBlocks: number] & {earningsReceiver: string, delegationApprover: string, stakerOptOutWindowBlocks: number})}, []>(
        abi, '0xf16172b0'
    ),
    operatorDetails: new Func<[operator: string], {operator: string}, ([earningsReceiver: string, delegationApprover: string, stakerOptOutWindowBlocks: number] & {earningsReceiver: string, delegationApprover: string, stakerOptOutWindowBlocks: number})>(
        abi, '0xc5e480db'
    ),
    operatorShares: new Func<[_: string, _: string], {}, bigint>(
        abi, '0x778e55f3'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    pause: new Func<[newPausedStatus: bigint], {newPausedStatus: bigint}, []>(
        abi, '0x136439dd'
    ),
    pauseAll: new Func<[], {}, []>(
        abi, '0x595c6a67'
    ),
    'paused(uint8)': new Func<[index: number], {index: number}, boolean>(
        abi, '0x5ac86ab7'
    ),
    'paused()': new Func<[], {}, bigint>(
        abi, '0x5c975abb'
    ),
    pauserRegistry: new Func<[], {}, string>(
        abi, '0x886f1195'
    ),
    pendingWithdrawals: new Func<[_: string], {}, boolean>(
        abi, '0xb7f06ebe'
    ),
    queueWithdrawals: new Func<[queuedWithdrawalParams: Array<([strategies: Array<string>, shares: Array<bigint>, withdrawer: string] & {strategies: Array<string>, shares: Array<bigint>, withdrawer: string})>], {queuedWithdrawalParams: Array<([strategies: Array<string>, shares: Array<bigint>, withdrawer: string] & {strategies: Array<string>, shares: Array<bigint>, withdrawer: string})>}, Array<string>>(
        abi, '0x0dd8dd02'
    ),
    registerAsOperator: new Func<[registeringOperatorDetails: ([earningsReceiver: string, delegationApprover: string, stakerOptOutWindowBlocks: number] & {earningsReceiver: string, delegationApprover: string, stakerOptOutWindowBlocks: number}), metadataURI: string], {registeringOperatorDetails: ([earningsReceiver: string, delegationApprover: string, stakerOptOutWindowBlocks: number] & {earningsReceiver: string, delegationApprover: string, stakerOptOutWindowBlocks: number}), metadataURI: string}, []>(
        abi, '0x0f589e59'
    ),
    renounceOwnership: new Func<[], {}, []>(
        abi, '0x715018a6'
    ),
    setMinWithdrawalDelayBlocks: new Func<[newMinWithdrawalDelayBlocks: bigint], {newMinWithdrawalDelayBlocks: bigint}, []>(
        abi, '0x635bbd10'
    ),
    setPauserRegistry: new Func<[newPauserRegistry: string], {newPauserRegistry: string}, []>(
        abi, '0x10d67a2f'
    ),
    setStrategyWithdrawalDelayBlocks: new Func<[strategies: Array<string>, withdrawalDelayBlocks: Array<bigint>], {strategies: Array<string>, withdrawalDelayBlocks: Array<bigint>}, []>(
        abi, '0x1522bf02'
    ),
    slasher: new Func<[], {}, string>(
        abi, '0xb1344271'
    ),
    stakerNonce: new Func<[_: string], {}, bigint>(
        abi, '0x29c77d4f'
    ),
    stakerOptOutWindowBlocks: new Func<[operator: string], {operator: string}, bigint>(
        abi, '0x16928365'
    ),
    strategyManager: new Func<[], {}, string>(
        abi, '0x39b70e38'
    ),
    strategyWithdrawalDelayBlocks: new Func<[_: string], {}, bigint>(
        abi, '0xc488375a'
    ),
    transferOwnership: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0xf2fde38b'
    ),
    undelegate: new Func<[staker: string], {staker: string}, Array<string>>(
        abi, '0xda8be864'
    ),
    unpause: new Func<[newPausedStatus: bigint], {newPausedStatus: bigint}, []>(
        abi, '0xfabc1cbc'
    ),
    updateOperatorMetadataURI: new Func<[metadataURI: string], {metadataURI: string}, []>(
        abi, '0x99be81c8'
    ),
}

export class Contract extends ContractBase {

    DELEGATION_APPROVAL_TYPEHASH(): Promise<string> {
        return this.eth_call(functions.DELEGATION_APPROVAL_TYPEHASH, [])
    }

    DOMAIN_TYPEHASH(): Promise<string> {
        return this.eth_call(functions.DOMAIN_TYPEHASH, [])
    }

    MAX_STAKER_OPT_OUT_WINDOW_BLOCKS(): Promise<bigint> {
        return this.eth_call(functions.MAX_STAKER_OPT_OUT_WINDOW_BLOCKS, [])
    }

    MAX_WITHDRAWAL_DELAY_BLOCKS(): Promise<bigint> {
        return this.eth_call(functions.MAX_WITHDRAWAL_DELAY_BLOCKS, [])
    }

    STAKER_DELEGATION_TYPEHASH(): Promise<string> {
        return this.eth_call(functions.STAKER_DELEGATION_TYPEHASH, [])
    }

    beaconChainETHStrategy(): Promise<string> {
        return this.eth_call(functions.beaconChainETHStrategy, [])
    }

    calculateCurrentStakerDelegationDigestHash(staker: string, operator: string, expiry: bigint): Promise<string> {
        return this.eth_call(functions.calculateCurrentStakerDelegationDigestHash, [staker, operator, expiry])
    }

    calculateDelegationApprovalDigestHash(staker: string, operator: string, _delegationApprover: string, approverSalt: string, expiry: bigint): Promise<string> {
        return this.eth_call(functions.calculateDelegationApprovalDigestHash, [staker, operator, _delegationApprover, approverSalt, expiry])
    }

    calculateStakerDelegationDigestHash(staker: string, _stakerNonce: bigint, operator: string, expiry: bigint): Promise<string> {
        return this.eth_call(functions.calculateStakerDelegationDigestHash, [staker, _stakerNonce, operator, expiry])
    }

    calculateWithdrawalRoot(withdrawal: ([staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, shares: Array<bigint>] & {staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, shares: Array<bigint>})): Promise<string> {
        return this.eth_call(functions.calculateWithdrawalRoot, [withdrawal])
    }

    cumulativeWithdrawalsQueued(arg0: string): Promise<bigint> {
        return this.eth_call(functions.cumulativeWithdrawalsQueued, [arg0])
    }

    delegatedTo(arg0: string): Promise<string> {
        return this.eth_call(functions.delegatedTo, [arg0])
    }

    delegationApprover(operator: string): Promise<string> {
        return this.eth_call(functions.delegationApprover, [operator])
    }

    delegationApproverSaltIsSpent(arg0: string, arg1: string): Promise<boolean> {
        return this.eth_call(functions.delegationApproverSaltIsSpent, [arg0, arg1])
    }

    domainSeparator(): Promise<string> {
        return this.eth_call(functions.domainSeparator, [])
    }

    earningsReceiver(operator: string): Promise<string> {
        return this.eth_call(functions.earningsReceiver, [operator])
    }

    eigenPodManager(): Promise<string> {
        return this.eth_call(functions.eigenPodManager, [])
    }

    getDelegatableShares(staker: string): Promise<[_: Array<string>, _: Array<bigint>]> {
        return this.eth_call(functions.getDelegatableShares, [staker])
    }

    getOperatorShares(operator: string, strategies: Array<string>): Promise<Array<bigint>> {
        return this.eth_call(functions.getOperatorShares, [operator, strategies])
    }

    getWithdrawalDelay(strategies: Array<string>): Promise<bigint> {
        return this.eth_call(functions.getWithdrawalDelay, [strategies])
    }

    isDelegated(staker: string): Promise<boolean> {
        return this.eth_call(functions.isDelegated, [staker])
    }

    isOperator(operator: string): Promise<boolean> {
        return this.eth_call(functions.isOperator, [operator])
    }

    minWithdrawalDelayBlocks(): Promise<bigint> {
        return this.eth_call(functions.minWithdrawalDelayBlocks, [])
    }

    operatorDetails(operator: string): Promise<([earningsReceiver: string, delegationApprover: string, stakerOptOutWindowBlocks: number] & {earningsReceiver: string, delegationApprover: string, stakerOptOutWindowBlocks: number})> {
        return this.eth_call(functions.operatorDetails, [operator])
    }

    operatorShares(arg0: string, arg1: string): Promise<bigint> {
        return this.eth_call(functions.operatorShares, [arg0, arg1])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    'paused(uint8)'(index: number): Promise<boolean> {
        return this.eth_call(functions['paused(uint8)'], [index])
    }

    'paused()'(): Promise<bigint> {
        return this.eth_call(functions['paused()'], [])
    }

    pauserRegistry(): Promise<string> {
        return this.eth_call(functions.pauserRegistry, [])
    }

    pendingWithdrawals(arg0: string): Promise<boolean> {
        return this.eth_call(functions.pendingWithdrawals, [arg0])
    }

    slasher(): Promise<string> {
        return this.eth_call(functions.slasher, [])
    }

    stakerNonce(arg0: string): Promise<bigint> {
        return this.eth_call(functions.stakerNonce, [arg0])
    }

    stakerOptOutWindowBlocks(operator: string): Promise<bigint> {
        return this.eth_call(functions.stakerOptOutWindowBlocks, [operator])
    }

    strategyManager(): Promise<string> {
        return this.eth_call(functions.strategyManager, [])
    }

    strategyWithdrawalDelayBlocks(arg0: string): Promise<bigint> {
        return this.eth_call(functions.strategyWithdrawalDelayBlocks, [arg0])
    }
}
