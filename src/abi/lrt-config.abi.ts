export const ABI_JSON = [
    {
        "type": "constructor",
        "stateMutability": "undefined",
        "payable": false,
        "inputs": []
    },
    {
        "type": "error",
        "name": "AssetAlreadySupported",
        "inputs": []
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
        "name": "CallerNotLRTConfigAllowedRole",
        "inputs": [
            {
                "type": "string",
                "name": "role"
            }
        ]
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
        "name": "CannotUpdateStrategyAsItHasFundsNDCFunds",
        "inputs": [
            {
                "type": "address",
                "name": "ndc"
            },
            {
                "type": "uint256",
                "name": "amount"
            }
        ]
    },
    {
        "type": "error",
        "name": "ValueAlreadyInUse",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ZeroAddressNotAllowed",
        "inputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "AddedNewSupportedAsset",
        "inputs": [
            {
                "type": "address",
                "name": "asset",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "depositLimit",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "AssetDepositLimitUpdate",
        "inputs": [
            {
                "type": "address",
                "name": "asset",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "depositLimit",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "AssetStrategyUpdate",
        "inputs": [
            {
                "type": "address",
                "name": "asset",
                "indexed": true
            },
            {
                "type": "address",
                "name": "strategy",
                "indexed": true
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
        "name": "RemovedSupportedAsset",
        "inputs": [
            {
                "type": "address",
                "name": "asset",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RoleAdminChanged",
        "inputs": [
            {
                "type": "bytes32",
                "name": "role",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "previousAdminRole",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "newAdminRole",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RoleGranted",
        "inputs": [
            {
                "type": "bytes32",
                "name": "role",
                "indexed": true
            },
            {
                "type": "address",
                "name": "account",
                "indexed": true
            },
            {
                "type": "address",
                "name": "sender",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RoleRevoked",
        "inputs": [
            {
                "type": "bytes32",
                "name": "role",
                "indexed": true
            },
            {
                "type": "address",
                "name": "account",
                "indexed": true
            },
            {
                "type": "address",
                "name": "sender",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "SetContract",
        "inputs": [
            {
                "type": "bytes32",
                "name": "key",
                "indexed": false
            },
            {
                "type": "address",
                "name": "contractAddr",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "SetPrimeETH",
        "inputs": [
            {
                "type": "address",
                "name": "primeETH",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "SetToken",
        "inputs": [
            {
                "type": "bytes32",
                "name": "key",
                "indexed": false
            },
            {
                "type": "address",
                "name": "tokenAddr",
                "indexed": true
            }
        ]
    },
    {
        "type": "function",
        "name": "DEFAULT_ADMIN_ROLE",
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
        "name": "addNewSupportedAsset",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "asset"
            },
            {
                "type": "uint256",
                "name": "depositLimit"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "assetStrategy",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "token"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": "strategy"
            }
        ]
    },
    {
        "type": "function",
        "name": "contractMap",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "contractKey"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": "contractAddress"
            }
        ]
    },
    {
        "type": "function",
        "name": "depositLimitByAsset",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "token"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "amount"
            }
        ]
    },
    {
        "type": "function",
        "name": "getContract",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "contractKey"
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
        "name": "getLSTToken",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "tokenKey"
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
        "name": "getRoleAdmin",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
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
        "name": "getSupportedAssetList",
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
        "name": "grantRole",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            },
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "hasRole",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            },
            {
                "type": "address",
                "name": "account"
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
        "name": "initialize",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "admin"
            },
            {
                "type": "address",
                "name": "stETH"
            },
            {
                "type": "address",
                "name": "ethX"
            },
            {
                "type": "address",
                "name": "primeETH_"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "isSupportedAsset",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "token"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": "isSupported"
            }
        ]
    },
    {
        "type": "function",
        "name": "primeETH",
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
        "name": "renounceRole",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            },
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "revokeRole",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            },
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setContract",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "contractKey"
            },
            {
                "type": "address",
                "name": "contractAddress"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setPrimeETH",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "primeETH_"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setToken",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "tokenKey"
            },
            {
                "type": "address",
                "name": "assetAddress"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "supportedAssetList",
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
        "name": "supportsInterface",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes4",
                "name": "interfaceId"
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
        "name": "tokenMap",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "tokenKey"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": "tokenAddress"
            }
        ]
    },
    {
        "type": "function",
        "name": "updateAssetDepositLimit",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "asset"
            },
            {
                "type": "uint256",
                "name": "depositLimit"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "updateAssetStrategy",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "asset"
            },
            {
                "type": "address",
                "name": "strategy"
            }
        ],
        "outputs": []
    }
]
