import { VerifiableTransaction } from './VerifiableTransaction';
export default class AccountRestrictionsMosaicTransaction extends VerifiableTransaction {
    constructor(bytes: any);
}
export declare class Builder {
    size: any;
    maxFee: any;
    version: any;
    type: any;
    deadline: any;
    restrictionType: any;
    modifications: any;
    constructor();
    addSize(size: any): this;
    addMaxFee(maxFee: any): this;
    addVersion(version: any): this;
    addType(type: any): this;
    addDeadline(deadline: any): this;
    addRestrictionType(restrictionType: any): this;
    addModifications(modifications: any): this;
    build(): AccountRestrictionsMosaicTransaction;
}
