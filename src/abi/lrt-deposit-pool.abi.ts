export const ABI_JSON = [
    {
        "type": "constructor",
        "stateMutability": "undefined",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_weth"
            },
            {
                "type": "address",
                "name": "_withdrawAsset"
            },
            {
                "type": "address",
                "name": "_wOETH"
            },
            {
                "type": "address",
                "name": "_ynLSDe"
            }
        ]
    },
    {
        "type": "error",
        "name": "AssetNotSupported",
        "inputs": []
    },
    {
        "type": "error",
        "name": "CallerNotLRTConfigAdmin",
        "inputs": []
    },
    {
        "type": "error",
        "name": "CallerNotLRTConfigManager",
        "inputs": []
    },
    {
        "type": "error",
        "name": "CallerNotLRTConfigOperator",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidAmountToDeposit",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidMaximumNodeDelegatorLimit",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MaxBurnAmount",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MaximumDepositLimitReached",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MaximumNodeDelegatorLimitReached",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MinimumAmountToReceiveNotMet",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NodeDelegatorHasAssetBalance",
        "inputs": [
            {
                "type": "address",
                "name": "assetAddress"
            },
            {
                "type": "uint256",
                "name": "assetBalance"
            }
        ]
    },
    {
        "type": "error",
        "name": "NodeDelegatorNotFound",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NotEnoughAssetToTransfer",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NotWithdrawAsset",
        "inputs": []
    },
    {
        "type": "error",
        "name": "TokenTransferFailed",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ZeroAddressNotAllowed",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ZeroAmount",
        "inputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "AssetDeposit",
        "inputs": [
            {
                "type": "address",
                "name": "depositor",
                "indexed": true
            },
            {
                "type": "address",
                "name": "asset",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "depositAmount",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "primeEthMintAmount",
                "indexed": false
            },
            {
                "type": "string",
                "name": "referralId",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "AssetSwapped",
        "inputs": [
            {
                "type": "address",
                "name": "fromAsset",
                "indexed": true
            },
            {
                "type": "address",
                "name": "toAsset",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "fromAssetAmount",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "toAssetAmount",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ETHDeposit",
        "inputs": [
            {
                "type": "address",
                "name": "depositor",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "depositAmount",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "primeEthMintAmount",
                "indexed": false
            },
            {
                "type": "string",
                "name": "referralId",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Initialized",
        "inputs": [
            {
                "type": "uint8",
                "name": "version",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "MaxNodeDelegatorLimitUpdated",
        "inputs": [
            {
                "type": "uint256",
                "name": "maxNodeDelegatorLimit",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "MinAmountToDepositUpdated",
        "inputs": [
            {
                "type": "uint256",
                "name": "minAmountToDeposit",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "NodeDelegatorAddedInQueue",
        "inputs": [
            {
                "type": "address[]",
                "name": "nodeDelegatorContracts"
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "NodeDelegatorRemovedFromQueue",
        "inputs": [
            {
                "type": "address",
                "name": "nodeDelegatorContracts",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Paused",
        "inputs": [
            {
                "type": "address",
                "name": "account",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Unpaused",
        "inputs": [
            {
                "type": "address",
                "name": "account",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "UpdatedLRTConfig",
        "inputs": [
            {
                "type": "address",
                "name": "lrtConfig",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "WithdrawalClaimed",
        "inputs": [
            {
                "type": "address",
                "name": "withdrawer",
                "indexed": true
            },
            {
                "type": "address",
                "name": "asset",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "assets",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "WithdrawalRequested",
        "inputs": [
            {
                "type": "address",
                "name": "withdrawer",
                "indexed": true
            },
            {
                "type": "address",
                "name": "asset",
                "indexed": true
            },
            {
                "type": "address",
                "name": "strategy",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "primeETHAmount",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "assetAmount",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "sharesAmount",
                "indexed": false
            }
        ]
    },
    {
        "type": "function",
        "name": "LST_NDC_INDEX",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "WETH",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "WITHDRAW_ASSET",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "addNodeDelegatorContractToQueue",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address[]",
                "name": "nodeDelegatorContracts"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "claimWithdrawal",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "withdrawal",
                "components": [
                    {
                        "type": "address",
                        "name": "staker"
                    },
                    {
                        "type": "address",
                        "name": "delegatedTo"
                    },
                    {
                        "type": "address",
                        "name": "withdrawer"
                    },
                    {
                        "type": "uint256",
                        "name": "nonce"
                    },
                    {
                        "type": "uint32",
                        "name": "startBlock"
                    },
                    {
                        "type": "address[]",
                        "name": "strategies"
                    },
                    {
                        "type": "uint256[]",
                        "name": "shares"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": "asset"
            },
            {
                "type": "uint256",
                "name": "assets"
            }
        ]
    },
    {
        "type": "function",
        "name": "claimWithdrawalYn",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "withdrawal",
                "components": [
                    {
                        "type": "address",
                        "name": "staker"
                    },
                    {
                        "type": "address",
                        "name": "delegatedTo"
                    },
                    {
                        "type": "address",
                        "name": "withdrawer"
                    },
                    {
                        "type": "uint256",
                        "name": "nonce"
                    },
                    {
                        "type": "uint32",
                        "name": "startBlock"
                    },
                    {
                        "type": "address[]",
                        "name": "strategies"
                    },
                    {
                        "type": "uint256[]",
                        "name": "shares"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "ynLSDeAmount"
            }
        ]
    },
    {
        "type": "function",
        "name": "depositAsset",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "asset"
            },
            {
                "type": "uint256",
                "name": "depositAmount"
            },
            {
                "type": "uint256",
                "name": "minPrimeETH"
            },
            {
                "type": "string",
                "name": "referralId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getAssetCurrentLimit",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "asset"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getAssetDistributionData",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "asset"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "depositPoolAssets"
            },
            {
                "type": "uint256",
                "name": "ndcAssets"
            },
            {
                "type": "uint256",
                "name": "eigenAssets"
            }
        ]
    },
    {
        "type": "function",
        "name": "getMintAmount",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "asset"
            },
            {
                "type": "uint256",
                "name": "amount"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "primeEthAmount"
            }
        ]
    },
    {
        "type": "function",
        "name": "getNodeDelegatorQueue",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address[]",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getSwapAssetReturnAmount",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "fromAsset"
            },
            {
                "type": "address",
                "name": "toAsset"
            },
            {
                "type": "uint256",
                "name": "fromAssetAmount"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "returnAmount"
            }
        ]
    },
    {
        "type": "function",
        "name": "getTotalAssetDeposits",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "asset"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "totalAssetDeposit"
            }
        ]
    },
    {
        "type": "function",
        "name": "initialize",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "lrtConfigAddr"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "isNodeDelegator",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "lrtConfig",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "maxNodeDelegatorLimit",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "minAmountToDeposit",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "nodeDelegatorQueue",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "optIn",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "asset"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "pause",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "paused",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "removeManyNodeDelegatorContractsFromQueue",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address[]",
                "name": "nodeDelegatorContracts"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "removeNodeDelegatorContractFromQueue",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "nodeDelegatorAddress"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "requestWithdrawal",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "asset"
            },
            {
                "type": "uint256",
                "name": "assetAmount"
            },
            {
                "type": "uint256",
                "name": "maxPrimeETH"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "primeETHAmount"
            }
        ]
    },
    {
        "type": "function",
        "name": "setMinAmountToDeposit",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "minAmountToDeposit_"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "swapAssetWithinDepositPool",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "fromAsset"
            },
            {
                "type": "address",
                "name": "toAsset"
            },
            {
                "type": "uint256",
                "name": "fromAssetAmount"
            },
            {
                "type": "uint256",
                "name": "minToAssetAmount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "transferAssetToNodeDelegator",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "ndcIndex"
            },
            {
                "type": "address",
                "name": "asset"
            },
            {
                "type": "uint256",
                "name": "amount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "transferAssetsToNodeDelegator",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "ndcIndex"
            },
            {
                "type": "address[]",
                "name": "assets"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "unpause",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "updateLRTConfig",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "lrtConfigAddr"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "updateMaxNodeDelegatorLimit",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "maxNodeDelegatorLimit_"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "wOETH",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "ynLSDe",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    }
]
