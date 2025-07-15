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
                "name": "_eigenPodManager"
            },
            {
                "type": "address",
                "name": "_allocationManager"
            },
            {
                "type": "address",
                "name": "_pauserRegistry"
            },
            {
                "type": "address",
                "name": "_permissionController"
            },
            {
                "type": "uint32",
                "name": "_MIN_WITHDRAWAL_DELAY"
            },
            {
                "type": "string",
                "name": "_version"
            }
        ]
    },
    {
        "type": "error",
        "name": "ActivelyDelegated",
        "inputs": []
    },
    {
        "type": "error",
        "name": "CallerCannotUndelegate",
        "inputs": []
    },
    {
        "type": "error",
        "name": "CurrentlyPaused",
        "inputs": []
    },
    {
        "type": "error",
        "name": "FullySlashed",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InputAddressZero",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InputArrayLengthMismatch",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InputArrayLengthZero",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidNewPausedStatus",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidPermissions",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidShortString",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidSignature",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidSnapshotOrdering",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NotActivelyDelegated",
        "inputs": []
    },
    {
        "type": "error",
        "name": "OnlyAllocationManager",
        "inputs": []
    },
    {
        "type": "error",
        "name": "OnlyEigenPodManager",
        "inputs": []
    },
    {
        "type": "error",
        "name": "OnlyPauser",
        "inputs": []
    },
    {
        "type": "error",
        "name": "OnlyStrategyManagerOrEigenPodManager",
        "inputs": []
    },
    {
        "type": "error",
        "name": "OnlyUnpauser",
        "inputs": []
    },
    {
        "type": "error",
        "name": "OperatorNotRegistered",
        "inputs": []
    },
    {
        "type": "error",
        "name": "OperatorsCannotUndelegate",
        "inputs": []
    },
    {
        "type": "error",
        "name": "SaltSpent",
        "inputs": []
    },
    {
        "type": "error",
        "name": "SignatureExpired",
        "inputs": []
    },
    {
        "type": "error",
        "name": "StringTooLong",
        "inputs": [
            {
                "type": "string",
                "name": "str"
            }
        ]
    },
    {
        "type": "error",
        "name": "WithdrawalDelayNotElapsed",
        "inputs": []
    },
    {
        "type": "error",
        "name": "WithdrawalNotQueued",
        "inputs": []
    },
    {
        "type": "error",
        "name": "WithdrawerNotCaller",
        "inputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "DelegationApproverUpdated",
        "inputs": [
            {
                "type": "address",
                "name": "operator",
                "indexed": true
            },
            {
                "type": "address",
                "name": "newDelegationApprover",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "DepositScalingFactorUpdated",
        "inputs": [
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
                "name": "newDepositScalingFactor",
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
                "type": "address",
                "name": "delegationApprover",
                "indexed": false
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
        "name": "OperatorSharesSlashed",
        "inputs": [
            {
                "type": "address",
                "name": "operator",
                "indexed": true
            },
            {
                "type": "address",
                "name": "strategy",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "totalSlashedShares",
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
        "name": "SlashingWithdrawalCompleted",
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
        "name": "SlashingWithdrawalQueued",
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
                        "name": "scaledShares"
                    }
                ]
            },
            {
                "type": "uint256[]",
                "name": "sharesToWithdraw"
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
        "name": "allocationManager",
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
                "name": "approver"
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
                        "name": "scaledShares"
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
                        "name": "scaledShares"
                    }
                ]
            },
            {
                "type": "address[]",
                "name": "tokens"
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
                        "name": "scaledShares"
                    }
                ]
            },
            {
                "type": "address[][]",
                "name": "tokens"
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
        "name": "convertToDepositShares",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "staker"
            },
            {
                "type": "address[]",
                "name": "strategies"
            },
            {
                "type": "uint256[]",
                "name": "withdrawableShares"
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
        "name": "cumulativeWithdrawalsQueued",
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
                "type": "uint256",
                "name": "totalQueued"
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
                "type": "uint256",
                "name": "curDepositShares"
            },
            {
                "type": "uint64",
                "name": "beaconChainSlashingFactorDecrease"
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
        "name": "delegatedTo",
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
                "type": "address",
                "name": "operator"
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
                "name": "delegationApprover"
            },
            {
                "type": "bytes32",
                "name": "salt"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": "spent"
            }
        ]
    },
    {
        "type": "function",
        "name": "depositScalingFactor",
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
                "name": "strategy"
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
        "name": "getDepositedShares",
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
        "name": "getOperatorsShares",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address[]",
                "name": "operators"
            },
            {
                "type": "address[]",
                "name": "strategies"
            }
        ],
        "outputs": [
            {
                "type": "uint256[][]",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getQueuedWithdrawal",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "withdrawalRoot"
            }
        ],
        "outputs": [
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
                        "name": "scaledShares"
                    }
                ]
            },
            {
                "type": "uint256[]",
                "name": "shares"
            }
        ]
    },
    {
        "type": "function",
        "name": "getQueuedWithdrawalRoots",
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
                "type": "bytes32[]",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getQueuedWithdrawals",
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
                        "name": "scaledShares"
                    }
                ]
            },
            {
                "type": "uint256[][]",
                "name": "shares"
            }
        ]
    },
    {
        "type": "function",
        "name": "getSlashableSharesInQueue",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "operator"
            },
            {
                "type": "address",
                "name": "strategy"
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
        "name": "getWithdrawableShares",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "staker"
            },
            {
                "type": "address[]",
                "name": "strategies"
            }
        ],
        "outputs": [
            {
                "type": "uint256[]",
                "name": "withdrawableShares"
            },
            {
                "type": "uint256[]",
                "name": "depositShares"
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
                "name": "prevDepositShares"
            },
            {
                "type": "uint256",
                "name": "addedShares"
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
                "type": "uint256",
                "name": "initialPausedStatus"
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
        "name": "minWithdrawalDelayBlocks",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint32",
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
                "type": "address",
                "name": "operator"
            },
            {
                "type": "address",
                "name": "newDelegationApprover"
            }
        ],
        "outputs": []
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
                "name": "operator"
            },
            {
                "type": "address",
                "name": "strategy"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "shares"
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
                "name": "withdrawalRoot"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": "pending"
            }
        ]
    },
    {
        "type": "function",
        "name": "permissionController",
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
        "name": "queueWithdrawals",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple[]",
                "name": "params",
                "components": [
                    {
                        "type": "address[]",
                        "name": "strategies"
                    },
                    {
                        "type": "uint256[]",
                        "name": "depositShares"
                    },
                    {
                        "type": "address",
                        "name": "__deprecated_withdrawer"
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
        "name": "queuedWithdrawals",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "withdrawalRoot"
            }
        ],
        "outputs": [
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
                        "name": "scaledShares"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "redelegate",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "newOperator"
            },
            {
                "type": "tuple",
                "name": "newOperatorApproverSig",
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
        "outputs": [
            {
                "type": "bytes32[]",
                "name": "withdrawalRoots"
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
                "type": "address",
                "name": "initDelegationApprover"
            },
            {
                "type": "uint32",
                "name": "allocationDelay"
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
        "name": "slashOperatorShares",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "operator"
            },
            {
                "type": "address",
                "name": "strategy"
            },
            {
                "type": "uint64",
                "name": "prevMaxMagnitude"
            },
            {
                "type": "uint64",
                "name": "newMaxMagnitude"
            }
        ],
        "outputs": []
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
                "type": "address",
                "name": "operator"
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
        "name": "version",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "string",
                "name": ""
            }
        ]
    }
]
