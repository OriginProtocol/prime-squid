import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './el-delegation-manager-2.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    DelegationApproverUpdated: new LogEvent<([operator: string, newDelegationApprover: string] & {operator: string, newDelegationApprover: string})>(
        abi, '0x773b54c04d756fcc5e678111f7d730de3be98192000799eee3d63716055a87c6'
    ),
    DepositScalingFactorUpdated: new LogEvent<([staker: string, strategy: string, newDepositScalingFactor: bigint] & {staker: string, strategy: string, newDepositScalingFactor: bigint})>(
        abi, '0x8be932bac54561f27260f95463d9b8ab37e06b2842e5ee2404157cc13df6eb8f'
    ),
    Initialized: new LogEvent<([version: number] & {version: number})>(
        abi, '0x7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498'
    ),
    OperatorMetadataURIUpdated: new LogEvent<([operator: string, metadataURI: string] & {operator: string, metadataURI: string})>(
        abi, '0x02a919ed0e2acad1dd90f17ef2fa4ae5462ee1339170034a8531cca4b6708090'
    ),
    OperatorRegistered: new LogEvent<([operator: string, delegationApprover: string] & {operator: string, delegationApprover: string})>(
        abi, '0xa453db612af59e5521d6ab9284dc3e2d06af286eb1b1b7b771fce4716c19f2c1'
    ),
    OperatorSharesDecreased: new LogEvent<([operator: string, staker: string, strategy: string, shares: bigint] & {operator: string, staker: string, strategy: string, shares: bigint})>(
        abi, '0x6909600037b75d7b4733aedd815442b5ec018a827751c832aaff64eba5d6d2dd'
    ),
    OperatorSharesIncreased: new LogEvent<([operator: string, staker: string, strategy: string, shares: bigint] & {operator: string, staker: string, strategy: string, shares: bigint})>(
        abi, '0x1ec042c965e2edd7107b51188ee0f383e22e76179041ab3a9d18ff151405166c'
    ),
    OperatorSharesSlashed: new LogEvent<([operator: string, strategy: string, totalSlashedShares: bigint] & {operator: string, strategy: string, totalSlashedShares: bigint})>(
        abi, '0xdd611f4ef63f4385f1756c86ce1f1f389a9013ba6fa07daba8528291bc2d3c30'
    ),
    OwnershipTransferred: new LogEvent<([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
    Paused: new LogEvent<([account: string, newPausedStatus: bigint] & {account: string, newPausedStatus: bigint})>(
        abi, '0xab40a374bc51de372200a8bc981af8c9ecdc08dfdaef0bb6e09f88f3c616ef3d'
    ),
    SlashingWithdrawalCompleted: new LogEvent<([withdrawalRoot: string] & {withdrawalRoot: string})>(
        abi, '0x1f40400889274ed07b24845e5054a87a0cab969eb1277aafe61ae352e7c32a00'
    ),
    SlashingWithdrawalQueued: new LogEvent<([withdrawalRoot: string, withdrawal: ([staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, scaledShares: Array<bigint>] & {staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, scaledShares: Array<bigint>}), sharesToWithdraw: Array<bigint>] & {withdrawalRoot: string, withdrawal: ([staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, scaledShares: Array<bigint>] & {staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, scaledShares: Array<bigint>}), sharesToWithdraw: Array<bigint>})>(
        abi, '0x26b2aae26516e8719ef50ea2f6831a2efbd4e37dccdf0f6936b27bc08e793e30'
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
    Unpaused: new LogEvent<([account: string, newPausedStatus: bigint] & {account: string, newPausedStatus: bigint})>(
        abi, '0x3582d1828e26bf56bd801502bc021ac0bc8afb57c826e4986b45593c8fad389c'
    ),
}

export const functions = {
    DELEGATION_APPROVAL_TYPEHASH: new Func<[], {}, string>(
        abi, '0x04a4f979'
    ),
    allocationManager: new Func<[], {}, string>(
        abi, '0xca8aa7c7'
    ),
    beaconChainETHStrategy: new Func<[], {}, string>(
        abi, '0x9104c319'
    ),
    calculateDelegationApprovalDigestHash: new Func<[staker: string, operator: string, approver: string, approverSalt: string, expiry: bigint], {staker: string, operator: string, approver: string, approverSalt: string, expiry: bigint}, string>(
        abi, '0x0b9f487a'
    ),
    calculateWithdrawalRoot: new Func<[withdrawal: ([staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, scaledShares: Array<bigint>] & {staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, scaledShares: Array<bigint>})], {withdrawal: ([staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, scaledShares: Array<bigint>] & {staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, scaledShares: Array<bigint>})}, string>(
        abi, '0x597b36da'
    ),
    completeQueuedWithdrawal: new Func<[withdrawal: ([staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, scaledShares: Array<bigint>] & {staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, scaledShares: Array<bigint>}), tokens: Array<string>, receiveAsTokens: boolean], {withdrawal: ([staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, scaledShares: Array<bigint>] & {staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, scaledShares: Array<bigint>}), tokens: Array<string>, receiveAsTokens: boolean}, []>(
        abi, '0xe4cc3f90'
    ),
    completeQueuedWithdrawals: new Func<[withdrawals: Array<([staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, scaledShares: Array<bigint>] & {staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, scaledShares: Array<bigint>})>, tokens: Array<Array<string>>, receiveAsTokens: Array<boolean>], {withdrawals: Array<([staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, scaledShares: Array<bigint>] & {staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, scaledShares: Array<bigint>})>, tokens: Array<Array<string>>, receiveAsTokens: Array<boolean>}, []>(
        abi, '0x9435bb43'
    ),
    convertToDepositShares: new Func<[staker: string, strategies: Array<string>, withdrawableShares: Array<bigint>], {staker: string, strategies: Array<string>, withdrawableShares: Array<bigint>}, Array<bigint>>(
        abi, '0x25df922e'
    ),
    cumulativeWithdrawalsQueued: new Func<[staker: string], {staker: string}, bigint>(
        abi, '0xa1788484'
    ),
    decreaseDelegatedShares: new Func<[staker: string, curDepositShares: bigint, beaconChainSlashingFactorDecrease: bigint], {staker: string, curDepositShares: bigint, beaconChainSlashingFactorDecrease: bigint}, []>(
        abi, '0x60a0d1ce'
    ),
    delegateTo: new Func<[operator: string, approverSignatureAndExpiry: ([signature: string, expiry: bigint] & {signature: string, expiry: bigint}), approverSalt: string], {operator: string, approverSignatureAndExpiry: ([signature: string, expiry: bigint] & {signature: string, expiry: bigint}), approverSalt: string}, []>(
        abi, '0xeea9064b'
    ),
    delegatedTo: new Func<[staker: string], {staker: string}, string>(
        abi, '0x65da1264'
    ),
    delegationApprover: new Func<[operator: string], {operator: string}, string>(
        abi, '0x3cdeb5e0'
    ),
    delegationApproverSaltIsSpent: new Func<[delegationApprover: string, salt: string], {delegationApprover: string, salt: string}, boolean>(
        abi, '0xbb45fef2'
    ),
    depositScalingFactor: new Func<[staker: string, strategy: string], {staker: string, strategy: string}, bigint>(
        abi, '0xbfae3fd2'
    ),
    domainSeparator: new Func<[], {}, string>(
        abi, '0xf698da25'
    ),
    eigenPodManager: new Func<[], {}, string>(
        abi, '0x4665bcda'
    ),
    getDepositedShares: new Func<[staker: string], {staker: string}, [_: Array<string>, _: Array<bigint>]>(
        abi, '0x66d5ba93'
    ),
    getOperatorShares: new Func<[operator: string, strategies: Array<string>], {operator: string, strategies: Array<string>}, Array<bigint>>(
        abi, '0x90041347'
    ),
    getOperatorsShares: new Func<[operators: Array<string>, strategies: Array<string>], {operators: Array<string>, strategies: Array<string>}, Array<Array<bigint>>>(
        abi, '0xf0e0e676'
    ),
    getQueuedWithdrawal: new Func<[withdrawalRoot: string], {withdrawalRoot: string}, ([withdrawal: ([staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, scaledShares: Array<bigint>] & {staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, scaledShares: Array<bigint>}), shares: Array<bigint>] & {withdrawal: ([staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, scaledShares: Array<bigint>] & {staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, scaledShares: Array<bigint>}), shares: Array<bigint>})>(
        abi, '0x5d975e88'
    ),
    getQueuedWithdrawalRoots: new Func<[staker: string], {staker: string}, Array<string>>(
        abi, '0xfd8aa88d'
    ),
    getQueuedWithdrawals: new Func<[staker: string], {staker: string}, ([withdrawals: Array<([staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, scaledShares: Array<bigint>] & {staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, scaledShares: Array<bigint>})>, shares: Array<Array<bigint>>] & {withdrawals: Array<([staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, scaledShares: Array<bigint>] & {staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, scaledShares: Array<bigint>})>, shares: Array<Array<bigint>>})>(
        abi, '0x5dd68579'
    ),
    getSlashableSharesInQueue: new Func<[operator: string, strategy: string], {operator: string, strategy: string}, bigint>(
        abi, '0x6e174448'
    ),
    getWithdrawableShares: new Func<[staker: string, strategies: Array<string>], {staker: string, strategies: Array<string>}, ([withdrawableShares: Array<bigint>, depositShares: Array<bigint>] & {withdrawableShares: Array<bigint>, depositShares: Array<bigint>})>(
        abi, '0xc978f7ac'
    ),
    increaseDelegatedShares: new Func<[staker: string, strategy: string, prevDepositShares: bigint, addedShares: bigint], {staker: string, strategy: string, prevDepositShares: bigint, addedShares: bigint}, []>(
        abi, '0x3c651cf2'
    ),
    initialize: new Func<[initialOwner: string, initialPausedStatus: bigint], {initialOwner: string, initialPausedStatus: bigint}, []>(
        abi, '0xcd6dc687'
    ),
    isDelegated: new Func<[staker: string], {staker: string}, boolean>(
        abi, '0x3e28391d'
    ),
    isOperator: new Func<[operator: string], {operator: string}, boolean>(
        abi, '0x6d70f7ae'
    ),
    minWithdrawalDelayBlocks: new Func<[], {}, number>(
        abi, '0xc448feb8'
    ),
    modifyOperatorDetails: new Func<[operator: string, newDelegationApprover: string], {operator: string, newDelegationApprover: string}, []>(
        abi, '0x54b7c96c'
    ),
    operatorShares: new Func<[operator: string, strategy: string], {operator: string, strategy: string}, bigint>(
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
    pendingWithdrawals: new Func<[withdrawalRoot: string], {withdrawalRoot: string}, boolean>(
        abi, '0xb7f06ebe'
    ),
    permissionController: new Func<[], {}, string>(
        abi, '0x4657e26a'
    ),
    queueWithdrawals: new Func<[params: Array<([strategies: Array<string>, depositShares: Array<bigint>, __deprecated_withdrawer: string] & {strategies: Array<string>, depositShares: Array<bigint>, __deprecated_withdrawer: string})>], {params: Array<([strategies: Array<string>, depositShares: Array<bigint>, __deprecated_withdrawer: string] & {strategies: Array<string>, depositShares: Array<bigint>, __deprecated_withdrawer: string})>}, Array<string>>(
        abi, '0x0dd8dd02'
    ),
    queuedWithdrawals: new Func<[withdrawalRoot: string], {withdrawalRoot: string}, ([staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, scaledShares: Array<bigint>] & {staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, scaledShares: Array<bigint>})>(
        abi, '0x99f5371b'
    ),
    redelegate: new Func<[newOperator: string, newOperatorApproverSig: ([signature: string, expiry: bigint] & {signature: string, expiry: bigint}), approverSalt: string], {newOperator: string, newOperatorApproverSig: ([signature: string, expiry: bigint] & {signature: string, expiry: bigint}), approverSalt: string}, Array<string>>(
        abi, '0xa33a3433'
    ),
    registerAsOperator: new Func<[initDelegationApprover: string, allocationDelay: number, metadataURI: string], {initDelegationApprover: string, allocationDelay: number, metadataURI: string}, []>(
        abi, '0x2aa6d888'
    ),
    renounceOwnership: new Func<[], {}, []>(
        abi, '0x715018a6'
    ),
    slashOperatorShares: new Func<[operator: string, strategy: string, prevMaxMagnitude: bigint, newMaxMagnitude: bigint], {operator: string, strategy: string, prevMaxMagnitude: bigint, newMaxMagnitude: bigint}, []>(
        abi, '0x601bb36f'
    ),
    strategyManager: new Func<[], {}, string>(
        abi, '0x39b70e38'
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
    updateOperatorMetadataURI: new Func<[operator: string, metadataURI: string], {operator: string, metadataURI: string}, []>(
        abi, '0x78296ec5'
    ),
    version: new Func<[], {}, string>(
        abi, '0x54fd4d50'
    ),
}

export class Contract extends ContractBase {

    DELEGATION_APPROVAL_TYPEHASH(): Promise<string> {
        return this.eth_call(functions.DELEGATION_APPROVAL_TYPEHASH, [])
    }

    allocationManager(): Promise<string> {
        return this.eth_call(functions.allocationManager, [])
    }

    beaconChainETHStrategy(): Promise<string> {
        return this.eth_call(functions.beaconChainETHStrategy, [])
    }

    calculateDelegationApprovalDigestHash(staker: string, operator: string, approver: string, approverSalt: string, expiry: bigint): Promise<string> {
        return this.eth_call(functions.calculateDelegationApprovalDigestHash, [staker, operator, approver, approverSalt, expiry])
    }

    calculateWithdrawalRoot(withdrawal: ([staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, scaledShares: Array<bigint>] & {staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, scaledShares: Array<bigint>})): Promise<string> {
        return this.eth_call(functions.calculateWithdrawalRoot, [withdrawal])
    }

    convertToDepositShares(staker: string, strategies: Array<string>, withdrawableShares: Array<bigint>): Promise<Array<bigint>> {
        return this.eth_call(functions.convertToDepositShares, [staker, strategies, withdrawableShares])
    }

    cumulativeWithdrawalsQueued(staker: string): Promise<bigint> {
        return this.eth_call(functions.cumulativeWithdrawalsQueued, [staker])
    }

    delegatedTo(staker: string): Promise<string> {
        return this.eth_call(functions.delegatedTo, [staker])
    }

    delegationApprover(operator: string): Promise<string> {
        return this.eth_call(functions.delegationApprover, [operator])
    }

    delegationApproverSaltIsSpent(delegationApprover: string, salt: string): Promise<boolean> {
        return this.eth_call(functions.delegationApproverSaltIsSpent, [delegationApprover, salt])
    }

    depositScalingFactor(staker: string, strategy: string): Promise<bigint> {
        return this.eth_call(functions.depositScalingFactor, [staker, strategy])
    }

    domainSeparator(): Promise<string> {
        return this.eth_call(functions.domainSeparator, [])
    }

    eigenPodManager(): Promise<string> {
        return this.eth_call(functions.eigenPodManager, [])
    }

    getDepositedShares(staker: string): Promise<[_: Array<string>, _: Array<bigint>]> {
        return this.eth_call(functions.getDepositedShares, [staker])
    }

    getOperatorShares(operator: string, strategies: Array<string>): Promise<Array<bigint>> {
        return this.eth_call(functions.getOperatorShares, [operator, strategies])
    }

    getOperatorsShares(operators: Array<string>, strategies: Array<string>): Promise<Array<Array<bigint>>> {
        return this.eth_call(functions.getOperatorsShares, [operators, strategies])
    }

    getQueuedWithdrawal(withdrawalRoot: string): Promise<([withdrawal: ([staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, scaledShares: Array<bigint>] & {staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, scaledShares: Array<bigint>}), shares: Array<bigint>] & {withdrawal: ([staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, scaledShares: Array<bigint>] & {staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, scaledShares: Array<bigint>}), shares: Array<bigint>})> {
        return this.eth_call(functions.getQueuedWithdrawal, [withdrawalRoot])
    }

    getQueuedWithdrawalRoots(staker: string): Promise<Array<string>> {
        return this.eth_call(functions.getQueuedWithdrawalRoots, [staker])
    }

    getQueuedWithdrawals(staker: string): Promise<([withdrawals: Array<([staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, scaledShares: Array<bigint>] & {staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, scaledShares: Array<bigint>})>, shares: Array<Array<bigint>>] & {withdrawals: Array<([staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, scaledShares: Array<bigint>] & {staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, scaledShares: Array<bigint>})>, shares: Array<Array<bigint>>})> {
        return this.eth_call(functions.getQueuedWithdrawals, [staker])
    }

    getSlashableSharesInQueue(operator: string, strategy: string): Promise<bigint> {
        return this.eth_call(functions.getSlashableSharesInQueue, [operator, strategy])
    }

    getWithdrawableShares(staker: string, strategies: Array<string>): Promise<([withdrawableShares: Array<bigint>, depositShares: Array<bigint>] & {withdrawableShares: Array<bigint>, depositShares: Array<bigint>})> {
        return this.eth_call(functions.getWithdrawableShares, [staker, strategies])
    }

    isDelegated(staker: string): Promise<boolean> {
        return this.eth_call(functions.isDelegated, [staker])
    }

    isOperator(operator: string): Promise<boolean> {
        return this.eth_call(functions.isOperator, [operator])
    }

    minWithdrawalDelayBlocks(): Promise<number> {
        return this.eth_call(functions.minWithdrawalDelayBlocks, [])
    }

    operatorShares(operator: string, strategy: string): Promise<bigint> {
        return this.eth_call(functions.operatorShares, [operator, strategy])
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

    pendingWithdrawals(withdrawalRoot: string): Promise<boolean> {
        return this.eth_call(functions.pendingWithdrawals, [withdrawalRoot])
    }

    permissionController(): Promise<string> {
        return this.eth_call(functions.permissionController, [])
    }

    queuedWithdrawals(withdrawalRoot: string): Promise<([staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, scaledShares: Array<bigint>] & {staker: string, delegatedTo: string, withdrawer: string, nonce: bigint, startBlock: number, strategies: Array<string>, scaledShares: Array<bigint>})> {
        return this.eth_call(functions.queuedWithdrawals, [withdrawalRoot])
    }

    strategyManager(): Promise<string> {
        return this.eth_call(functions.strategyManager, [])
    }

    version(): Promise<string> {
        return this.eth_call(functions.version, [])
    }
}
