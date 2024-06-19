export const ABI_JSON = [
    {
        "type": "constructor",
        "stateMutability": "undefined",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_strategyManager"
            },
            {
                "type": "address",
                "name": "_slasher"
            },
            {
                "type": "address",
                "name": "_eigenPodManager"
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
        "name": "MinWithdrawalDelayBlocksSet",
        "inputs": [
            {
                "type": "uint256",
                "name": "previousValue",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "newValue",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "OperatorDetailsModified",
        "inputs": [
            {
                "type": "address",
                "name": "operator",
                "indexed": true
            },
            {
                "type": "tuple",
                "name": "newOperatorDetails",
                "indexed": false,
                "components": [
                    {
                        "type": "address",
                        "name": "earningsReceiver"
                    },
                    {
                        "type": "address",
                        "name": "delegationApprover"
                    },
                    {
                        "type": "uint32",
                        "name": "stakerOptOutWindowBlocks"
                    }
                ]
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "OperatorMetadataURIUpdated",
        "inputs": [
            {
                "type": "address",
                "name": "operator",
                "indexed": true
            },
            {
                "type": "string",
                "name": "metadataURI",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "OperatorRegistered",
        "inputs": [
            {
                "type": "address",
                "name": "operator",
                "indexed": true
            },
            {
                "type": "tuple",
                "name": "operatorDetails",
                "indexed": false,
                "components": [
                    {
                        "type": "address",
                        "name": "earningsReceiver"
                    },
                    {
                        "type": "address",
                        "name": "delegationApprover"
                    },
                    {
                        "type": "uint32",
                        "name": "stakerOptOutWindowBlocks"
                    }
                ]
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "OperatorSharesDecreased",
        "inputs": [
            {
                "type": "address",
                "name": "operator",
                "indexed": true
            },
            {
                "type": "address",
                "name": "staker",
                "indexed": false
            },
            {
                "type": "address",
                "name": "strategy",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "shares",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "OperatorSharesIncreased",
        "inputs": [
            {
                "type": "address",
                "name": "operator",
                "indexed": true
            },
            {
                "type": "address",
                "name": "staker",
                "indexed": false
            },
            {
                "type": "address",
                "name": "strategy",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "shares",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "OwnershipTransferred",
        "inputs": [
            {
                "type": "address",
                "name": "previousOwner",
                "indexed": true
            },
            {
                "type": "address",
                "name": "newOwner",
                "indexed": true
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
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "newPausedStatus",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "PauserRegistrySet",
        "inputs": [
            {
                "type": "address",
                "name": "pauserRegistry",
                "indexed": false
            },
            {
                "type": "address",
                "name": "newPauserRegistry",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "StakerDelegated",
        "inputs": [
            {
                "type": "address",
                "name": "staker",
                "indexed": true
            },
            {
                "type": "address",
                "name": "operator",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "StakerForceUndelegated",
        "inputs": [
            {
                "type": "address",
                "name": "staker",
                "indexed": true
            },
            {
                "type": "address",
                "name": "operator",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "StakerUndelegated",
        "inputs": [
            {
                "type": "address",
                "name": "staker",
                "indexed": true
            },
            {
                "type": "address",
                "name": "operator",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "StrategyWithdrawalDelayBlocksSet",
        "inputs": [
            {
                "type": "address",
                "name": "strategy",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "previousValue",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "newValue",
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
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "newPausedStatus",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "WithdrawalCompleted",
        "inputs": [
            {
                "type": "bytes32",
                "name": "withdrawalRoot",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "WithdrawalMigrated",
        "inputs": [
            {
                "type": "bytes32",
                "name": "oldWithdrawalRoot",
                "indexed": false
            },
            {
                "type": "bytes32",
                "name": "newWithdrawalRoot",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "WithdrawalQueued",
        "inputs": [
            {
                "type": "bytes32",
                "name": "withdrawalRoot",
                "indexed": false
            },
            {
                "type": "tuple",
                "name": "withdrawal",
                "indexed": false,
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
        ]
    },
    {
        "type": "function",
        "name": "DELEGATION_APPROVAL_TYPEHASH",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "DOMAIN_TYPEHASH",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "MAX_STAKER_OPT_OUT_WINDOW_BLOCKS",
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
        "name": "MAX_WITHDRAWAL_DELAY_BLOCKS",
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
        "name": "STAKER_DELEGATION_TYPEHASH",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "beaconChainETHStrategy",
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
        "name": "calculateCurrentStakerDelegationDigestHash",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "staker"
            },
            {
                "type": "address",
                "name": "operator"
            },
            {
                "type": "uint256",
                "name": "expiry"
            }
        ],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "calculateDelegationApprovalDigestHash",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "staker"
            },
            {
                "type": "address",
                "name": "operator"
            },
            {
                "type": "address",
                "name": "_delegationApprover"
            },
            {
                "type": "bytes32",
                "name": "approverSalt"
            },
            {
                "type": "uint256",
                "name": "expiry"
            }
        ],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "calculateStakerDelegationDigestHash",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "staker"
            },
            {
                "type": "uint256",
                "name": "_stakerNonce"
            },
            {
                "type": "address",
                "name": "operator"
            },
            {
                "type": "uint256",
                "name": "expiry"
            }
        ],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "calculateWithdrawalRoot",
        "constant": true,
        "stateMutability": "pure",
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
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "completeQueuedWithdrawal",
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
            },
            {
                "type": "address[]",
                "name": "tokens"
            },
            {
                "type": "uint256",
                "name": "middlewareTimesIndex"
            },
            {
                "type": "bool",
                "name": "receiveAsTokens"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "completeQueuedWithdrawals",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple[]",
                "name": "withdrawals",
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
            },
            {
                "type": "address[][]",
                "name": "tokens"
            },
            {
                "type": "uint256[]",
                "name": "middlewareTimesIndexes"
            },
            {
                "type": "bool[]",
                "name": "receiveAsTokens"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "cumulativeWithdrawalsQueued",
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
        "name": "decreaseDelegatedShares",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "staker"
            },
            {
                "type": "address",
                "name": "strategy"
            },
            {
                "type": "uint256",
                "name": "shares"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "delegateTo",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "operator"
            },
            {
                "type": "tuple",
                "name": "approverSignatureAndExpiry",
                "components": [
                    {
                        "type": "bytes",
                        "name": "signature"
                    },
                    {
                        "type": "uint256",
                        "name": "expiry"
                    }
                ]
            },
            {
                "type": "bytes32",
                "name": "approverSalt"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "delegateToBySignature",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "staker"
            },
            {
                "type": "address",
                "name": "operator"
            },
            {
                "type": "tuple",
                "name": "stakerSignatureAndExpiry",
                "components": [
                    {
                        "type": "bytes",
                        "name": "signature"
                    },
                    {
                        "type": "uint256",
                        "name": "expiry"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "approverSignatureAndExpiry",
                "components": [
                    {
                        "type": "bytes",
                        "name": "signature"
                    },
                    {
                        "type": "uint256",
                        "name": "expiry"
                    }
                ]
            },
            {
                "type": "bytes32",
                "name": "approverSalt"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "delegatedTo",
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
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "delegationApprover",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "operator"
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
        "name": "delegationApproverSaltIsSpent",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": ""
            },
            {
                "type": "bytes32",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "domainSeparator",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "earningsReceiver",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "operator"
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
        "name": "eigenPodManager",
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
        "name": "getDelegatableShares",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "staker"
            }
        ],
        "outputs": [
            {
                "type": "address[]",
                "name": ""
            },
            {
                "type": "uint256[]",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getOperatorShares",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "operator"
            },
            {
                "type": "address[]",
                "name": "strategies"
            }
        ],
        "outputs": [
            {
                "type": "uint256[]",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getWithdrawalDelay",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address[]",
                "name": "strategies"
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
        "name": "increaseDelegatedShares",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "staker"
            },
            {
                "type": "address",
                "name": "strategy"
            },
            {
                "type": "uint256",
                "name": "shares"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "initialize",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "initialOwner"
            },
            {
                "type": "address",
                "name": "_pauserRegistry"
            },
            {
                "type": "uint256",
                "name": "initialPausedStatus"
            },
            {
                "type": "uint256",
                "name": "_minWithdrawalDelayBlocks"
            },
            {
                "type": "address[]",
                "name": "_strategies"
            },
            {
                "type": "uint256[]",
                "name": "_withdrawalDelayBlocks"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "isDelegated",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "staker"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "isOperator",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "operator"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "migrateQueuedWithdrawals",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple[]",
                "name": "withdrawalsToMigrate",
                "components": [
                    {
                        "type": "address[]",
                        "name": "strategies"
                    },
                    {
                        "type": "uint256[]",
                        "name": "shares"
                    },
                    {
                        "type": "address",
                        "name": "staker"
                    },
                    {
                        "type": "tuple",
                        "name": "withdrawerAndNonce",
                        "components": [
                            {
                                "type": "address",
                                "name": "withdrawer"
                            },
                            {
                                "type": "uint96",
                                "name": "nonce"
                            }
                        ]
                    },
                    {
                        "type": "uint32",
                        "name": "withdrawalStartBlock"
                    },
                    {
                        "type": "address",
                        "name": "delegatedAddress"
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "minWithdrawalDelayBlocks",
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
        "name": "modifyOperatorDetails",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "newOperatorDetails",
                "components": [
                    {
                        "type": "address",
                        "name": "earningsReceiver"
                    },
                    {
                        "type": "address",
                        "name": "delegationApprover"
                    },
                    {
                        "type": "uint32",
                        "name": "stakerOptOutWindowBlocks"
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "operatorDetails",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "operator"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "",
                "components": [
                    {
                        "type": "address",
                        "name": "earningsReceiver"
                    },
                    {
                        "type": "address",
                        "name": "delegationApprover"
                    },
                    {
                        "type": "uint32",
                        "name": "stakerOptOutWindowBlocks"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "operatorShares",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": ""
            },
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
        "name": "owner",
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
        "name": "pause",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "newPausedStatus"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "pauseAll",
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
        "inputs": [
            {
                "type": "uint8",
                "name": "index"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
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
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "pauserRegistry",
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
        "name": "pendingWithdrawals",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "queueWithdrawals",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple[]",
                "name": "queuedWithdrawalParams",
                "components": [
                    {
                        "type": "address[]",
                        "name": "strategies"
                    },
                    {
                        "type": "uint256[]",
                        "name": "shares"
                    },
                    {
                        "type": "address",
                        "name": "withdrawer"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "bytes32[]",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "registerAsOperator",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "registeringOperatorDetails",
                "components": [
                    {
                        "type": "address",
                        "name": "earningsReceiver"
                    },
                    {
                        "type": "address",
                        "name": "delegationApprover"
                    },
                    {
                        "type": "uint32",
                        "name": "stakerOptOutWindowBlocks"
                    }
                ]
            },
            {
                "type": "string",
                "name": "metadataURI"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "renounceOwnership",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setMinWithdrawalDelayBlocks",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "newMinWithdrawalDelayBlocks"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setPauserRegistry",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "newPauserRegistry"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setStrategyWithdrawalDelayBlocks",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address[]",
                "name": "strategies"
            },
            {
                "type": "uint256[]",
                "name": "withdrawalDelayBlocks"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "slasher",
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
        "name": "stakerNonce",
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
        "name": "stakerOptOutWindowBlocks",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "operator"
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
        "name": "strategyManager",
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
        "name": "strategyWithdrawalDelayBlocks",
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
        "name": "transferOwnership",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "newOwner"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "undelegate",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "staker"
            }
        ],
        "outputs": [
            {
                "type": "bytes32[]",
                "name": "withdrawalRoots"
            }
        ]
    },
    {
        "type": "function",
        "name": "unpause",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "newPausedStatus"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "updateOperatorMetadataURI",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "metadataURI"
            }
        ],
        "outputs": []
    }
]
