import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './lrt-config.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    AddedNewSupportedAsset: new LogEvent<([asset: string, depositLimit: bigint] & {asset: string, depositLimit: bigint})>(
        abi, '0xbaf29bfdb0c1bd100ee9f6d6c1112bcde0014c0ef8c6199c0a813d936dd6568e'
    ),
    AssetDepositLimitUpdate: new LogEvent<([asset: string, depositLimit: bigint] & {asset: string, depositLimit: bigint})>(
        abi, '0xc04446455e1f3789fca0c8aad0733e9f7d7f0f82d7d0ca5e9b7c56c9ea081ce8'
    ),
    AssetStrategyUpdate: new LogEvent<([asset: string, strategy: string] & {asset: string, strategy: string})>(
        abi, '0x5a4b82aa5dc163fd961be3a86951c62b0002859768bb5eabf32daa25f06ab3d9'
    ),
    Initialized: new LogEvent<([version: number] & {version: number})>(
        abi, '0x7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498'
    ),
    RemovedSupportedAsset: new LogEvent<([asset: string] & {asset: string})>(
        abi, '0x671ffa25d59a14d89704ca2032a144f60b44a5acdc2cb7cad09e6fff01f33dbf'
    ),
    RoleAdminChanged: new LogEvent<([role: string, previousAdminRole: string, newAdminRole: string] & {role: string, previousAdminRole: string, newAdminRole: string})>(
        abi, '0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff'
    ),
    RoleGranted: new LogEvent<([role: string, account: string, sender: string] & {role: string, account: string, sender: string})>(
        abi, '0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d'
    ),
    RoleRevoked: new LogEvent<([role: string, account: string, sender: string] & {role: string, account: string, sender: string})>(
        abi, '0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b'
    ),
    SetContract: new LogEvent<([key: string, contractAddr: string] & {key: string, contractAddr: string})>(
        abi, '0x5de40a806536a2029221dac2c8887ac9f11952fcc1ed3d7cfb4476dd5259b740'
    ),
    SetPrimeETH: new LogEvent<([primeETH: string] & {primeETH: string})>(
        abi, '0x462863b0f24ed5f2dbe824ef78026986a38edccdc5a715906fd1e1c420aae1c7'
    ),
    SetToken: new LogEvent<([key: string, tokenAddr: string] & {key: string, tokenAddr: string})>(
        abi, '0x19aab10c6a9f5d648eaa15e2d515f8dfda570ee221e7c8cb9dc07694e68005bc'
    ),
}

export const functions = {
    DEFAULT_ADMIN_ROLE: new Func<[], {}, string>(
        abi, '0xa217fddf'
    ),
    addNewSupportedAsset: new Func<[asset: string, depositLimit: bigint], {asset: string, depositLimit: bigint}, []>(
        abi, '0xdd608764'
    ),
    assetStrategy: new Func<[token: string], {token: string}, string>(
        abi, '0x97ef9d98'
    ),
    contractMap: new Func<[contractKey: string], {contractKey: string}, string>(
        abi, '0xcac39a05'
    ),
    depositLimitByAsset: new Func<[token: string], {token: string}, bigint>(
        abi, '0x43575648'
    ),
    getContract: new Func<[contractKey: string], {contractKey: string}, string>(
        abi, '0xe16c7d98'
    ),
    getLSTToken: new Func<[tokenKey: string], {tokenKey: string}, string>(
        abi, '0xe715c617'
    ),
    getRoleAdmin: new Func<[role: string], {role: string}, string>(
        abi, '0x248a9ca3'
    ),
    getSupportedAssetList: new Func<[], {}, Array<string>>(
        abi, '0x770672a6'
    ),
    grantRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0x2f2ff15d'
    ),
    hasRole: new Func<[role: string, account: string], {role: string, account: string}, boolean>(
        abi, '0x91d14854'
    ),
    initialize: new Func<[admin: string, stETH: string, ethX: string, primeETH_: string], {admin: string, stETH: string, ethX: string, primeETH_: string}, []>(
        abi, '0xf8c8765e'
    ),
    isSupportedAsset: new Func<[token: string], {token: string}, boolean>(
        abi, '0x9be918e6'
    ),
    primeETH: new Func<[], {}, string>(
        abi, '0x0e39657d'
    ),
    renounceRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0x36568abe'
    ),
    revokeRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0xd547741f'
    ),
    setContract: new Func<[contractKey: string, contractAddress: string], {contractKey: string, contractAddress: string}, []>(
        abi, '0x7ed77c9c'
    ),
    setPrimeETH: new Func<[primeETH_: string], {primeETH_: string}, []>(
        abi, '0xfcf0aace'
    ),
    setToken: new Func<[tokenKey: string, assetAddress: string], {tokenKey: string, assetAddress: string}, []>(
        abi, '0xde55701e'
    ),
    supportedAssetList: new Func<[_: bigint], {}, string>(
        abi, '0x6c8d179a'
    ),
    supportsInterface: new Func<[interfaceId: string], {interfaceId: string}, boolean>(
        abi, '0x01ffc9a7'
    ),
    tokenMap: new Func<[tokenKey: string], {tokenKey: string}, string>(
        abi, '0x2ee4c45c'
    ),
    updateAssetDepositLimit: new Func<[asset: string, depositLimit: bigint], {asset: string, depositLimit: bigint}, []>(
        abi, '0x73034242'
    ),
    updateAssetStrategy: new Func<[asset: string, strategy: string], {asset: string, strategy: string}, []>(
        abi, '0x3fc3c74d'
    ),
}

export class Contract extends ContractBase {

    DEFAULT_ADMIN_ROLE(): Promise<string> {
        return this.eth_call(functions.DEFAULT_ADMIN_ROLE, [])
    }

    assetStrategy(token: string): Promise<string> {
        return this.eth_call(functions.assetStrategy, [token])
    }

    contractMap(contractKey: string): Promise<string> {
        return this.eth_call(functions.contractMap, [contractKey])
    }

    depositLimitByAsset(token: string): Promise<bigint> {
        return this.eth_call(functions.depositLimitByAsset, [token])
    }

    getContract(contractKey: string): Promise<string> {
        return this.eth_call(functions.getContract, [contractKey])
    }

    getLSTToken(tokenKey: string): Promise<string> {
        return this.eth_call(functions.getLSTToken, [tokenKey])
    }

    getRoleAdmin(role: string): Promise<string> {
        return this.eth_call(functions.getRoleAdmin, [role])
    }

    getSupportedAssetList(): Promise<Array<string>> {
        return this.eth_call(functions.getSupportedAssetList, [])
    }

    hasRole(role: string, account: string): Promise<boolean> {
        return this.eth_call(functions.hasRole, [role, account])
    }

    isSupportedAsset(token: string): Promise<boolean> {
        return this.eth_call(functions.isSupportedAsset, [token])
    }

    primeETH(): Promise<string> {
        return this.eth_call(functions.primeETH, [])
    }

    supportedAssetList(arg0: bigint): Promise<string> {
        return this.eth_call(functions.supportedAssetList, [arg0])
    }

    supportsInterface(interfaceId: string): Promise<boolean> {
        return this.eth_call(functions.supportsInterface, [interfaceId])
    }

    tokenMap(tokenKey: string): Promise<string> {
        return this.eth_call(functions.tokenMap, [tokenKey])
    }
}
