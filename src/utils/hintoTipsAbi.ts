export const HintoTipsAbi = [
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    name: "tips",
    outputs: [
      {
        name: "publisher",
        type: "address"
      },
      {
        name: "tipCode",
        type: "bytes32"
      },
      {
        name: "tipMetaSha256Hash",
        type: "bytes32"
      },
      {
        name: "isValid",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "publisher",
        type: "address"
      }
    ],
    name: "ApprovePublisher",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "publisher",
        type: "address"
      },
      {
        indexed: false,
        name: "tipCode",
        type: "bytes32"
      },
      {
        indexed: false,
        name: "tipId",
        type: "uint256"
      },
      {
        indexed: true,
        name: "recipients",
        type: "bytes32[]"
      }
    ],
    name: "TipPublished",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "tipId",
        type: "uint256"
      }
    ],
    name: "TipVoided",
    type: "event"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_publisher",
        type: "address"
      }
    ],
    name: "approvePublisher",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_tipCode",
        type: "bytes32"
      },
      {
        name: "_tipMetaSha256Hash",
        type: "bytes32"
      },
      {
        name: "_recipients",
        type: "bytes32[]"
      }
    ],
    name: "publishTip",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_tipId",
        type: "uint256"
      }
    ],
    name: "invalidateTip",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getTipsCount",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_tipId",
        type: "uint256"
      }
    ],
    name: "getTip",
    outputs: [
      {
        name: "",
        type: "address"
      },
      {
        name: "",
        type: "bytes32"
      },
      {
        name: "",
        type: "bytes32"
      },
      {
        name: "",
        type: "bytes32[]"
      },
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
];
