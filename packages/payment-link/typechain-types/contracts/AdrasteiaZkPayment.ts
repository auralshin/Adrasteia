/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface AdrasteiaZkPaymentInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addPayment"
      | "getPayment"
      | "owner"
      | "paused"
      | "payments"
      | "paymentsCount"
      | "renounceOwnership"
      | "sendPayment"
      | "transferContractOwnership"
      | "transferOwnership"
      | "verifier"
      | "verifyProof"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "OwnershipTransferred"
      | "Paused"
      | "PaymentAdded"
      | "PaymentSent"
      | "Unpaused"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "addPayment",
    values: [BigNumberish, AddressLike, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getPayment",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "payments",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "paymentsCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sendPayment",
    values: [BigNumberish, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "transferContractOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "verifier", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "verifyProof",
    values: [
      [BigNumberish, BigNumberish],
      [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      [BigNumberish, BigNumberish],
      [BigNumberish, BigNumberish]
    ]
  ): string;

  decodeFunctionResult(functionFragment: "addPayment", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getPayment", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "payments", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "paymentsCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendPayment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferContractOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "verifier", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "verifyProof",
    data: BytesLike
  ): Result;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PausedEvent {
  export type InputTuple = [account: AddressLike];
  export type OutputTuple = [account: string];
  export interface OutputObject {
    account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PaymentAddedEvent {
  export type InputTuple = [paymentId: BigNumberish, description: string];
  export type OutputTuple = [paymentId: bigint, description: string];
  export interface OutputObject {
    paymentId: bigint;
    description: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PaymentSentEvent {
  export type InputTuple = [paymentId: BigNumberish];
  export type OutputTuple = [paymentId: bigint];
  export interface OutputObject {
    paymentId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UnpausedEvent {
  export type InputTuple = [account: AddressLike];
  export type OutputTuple = [account: string];
  export interface OutputObject {
    account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface AdrasteiaZkPayment extends BaseContract {
  connect(runner?: ContractRunner | null): AdrasteiaZkPayment;
  waitForDeployment(): Promise<this>;

  interface: AdrasteiaZkPaymentInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  addPayment: TypedContractMethod<
    [
      amount: BigNumberish,
      sender: AddressLike,
      passcodeHash: BigNumberish,
      token: AddressLike
    ],
    [void],
    "payable"
  >;

  getPayment: TypedContractMethod<
    [paymentId: BigNumberish],
    [
      [bigint, string, bigint, string] & {
        amount: bigint;
        sender: string;
        passcodeHash: bigint;
        token: string;
      }
    ],
    "view"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  paused: TypedContractMethod<[], [boolean], "view">;

  payments: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, string, bigint, string] & {
        amount: bigint;
        sender: string;
        passcodeHash: bigint;
        token: string;
      }
    ],
    "view"
  >;

  paymentsCount: TypedContractMethod<[], [bigint], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  sendPayment: TypedContractMethod<
    [paymentId: BigNumberish, proof: BigNumberish[]],
    [void],
    "nonpayable"
  >;

  transferContractOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  verifier: TypedContractMethod<[], [string], "view">;

  verifyProof: TypedContractMethod<
    [
      _pA: [BigNumberish, BigNumberish],
      _pB: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      _pC: [BigNumberish, BigNumberish],
      _pubSignals: [BigNumberish, BigNumberish]
    ],
    [boolean],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addPayment"
  ): TypedContractMethod<
    [
      amount: BigNumberish,
      sender: AddressLike,
      passcodeHash: BigNumberish,
      token: AddressLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "getPayment"
  ): TypedContractMethod<
    [paymentId: BigNumberish],
    [
      [bigint, string, bigint, string] & {
        amount: bigint;
        sender: string;
        passcodeHash: bigint;
        token: string;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "paused"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "payments"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, string, bigint, string] & {
        amount: bigint;
        sender: string;
        passcodeHash: bigint;
        token: string;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "paymentsCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "sendPayment"
  ): TypedContractMethod<
    [paymentId: BigNumberish, proof: BigNumberish[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferContractOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "verifier"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "verifyProof"
  ): TypedContractMethod<
    [
      _pA: [BigNumberish, BigNumberish],
      _pB: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      _pC: [BigNumberish, BigNumberish],
      _pubSignals: [BigNumberish, BigNumberish]
    ],
    [boolean],
    "view"
  >;

  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "Paused"
  ): TypedContractEvent<
    PausedEvent.InputTuple,
    PausedEvent.OutputTuple,
    PausedEvent.OutputObject
  >;
  getEvent(
    key: "PaymentAdded"
  ): TypedContractEvent<
    PaymentAddedEvent.InputTuple,
    PaymentAddedEvent.OutputTuple,
    PaymentAddedEvent.OutputObject
  >;
  getEvent(
    key: "PaymentSent"
  ): TypedContractEvent<
    PaymentSentEvent.InputTuple,
    PaymentSentEvent.OutputTuple,
    PaymentSentEvent.OutputObject
  >;
  getEvent(
    key: "Unpaused"
  ): TypedContractEvent<
    UnpausedEvent.InputTuple,
    UnpausedEvent.OutputTuple,
    UnpausedEvent.OutputObject
  >;

  filters: {
    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "Paused(address)": TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;
    Paused: TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;

    "PaymentAdded(uint256,string)": TypedContractEvent<
      PaymentAddedEvent.InputTuple,
      PaymentAddedEvent.OutputTuple,
      PaymentAddedEvent.OutputObject
    >;
    PaymentAdded: TypedContractEvent<
      PaymentAddedEvent.InputTuple,
      PaymentAddedEvent.OutputTuple,
      PaymentAddedEvent.OutputObject
    >;

    "PaymentSent(uint256)": TypedContractEvent<
      PaymentSentEvent.InputTuple,
      PaymentSentEvent.OutputTuple,
      PaymentSentEvent.OutputObject
    >;
    PaymentSent: TypedContractEvent<
      PaymentSentEvent.InputTuple,
      PaymentSentEvent.OutputTuple,
      PaymentSentEvent.OutputObject
    >;

    "Unpaused(address)": TypedContractEvent<
      UnpausedEvent.InputTuple,
      UnpausedEvent.OutputTuple,
      UnpausedEvent.OutputObject
    >;
    Unpaused: TypedContractEvent<
      UnpausedEvent.InputTuple,
      UnpausedEvent.OutputTuple,
      UnpausedEvent.OutputObject
    >;
  };
}
