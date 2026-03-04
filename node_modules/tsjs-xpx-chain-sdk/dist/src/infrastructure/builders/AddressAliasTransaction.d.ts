import { VerifiableTransaction } from './VerifiableTransaction';
/**
 * @module transactions/AddressAliasTransaction
 */
export declare class AddressAliasTransaction extends VerifiableTransaction {
    constructor(bytes: any);
}
export declare class Builder {
    size: any;
    maxFee: any;
    version: any;
    type: any;
    deadline: any;
    address: any;
    namespaceId: any;
    actionType: any;
    constructor();
    addSize(size: any): this;
    addMaxFee(maxFee: any): this;
    addVersion(version: any): this;
    addType(type: any): this;
    addDeadline(deadline: any): this;
    addActionType(actionType: any): this;
    addNamespaceId(namespaceId: any): this;
    addAddress(address: any): this;
    build(): AddressAliasTransaction;
}
