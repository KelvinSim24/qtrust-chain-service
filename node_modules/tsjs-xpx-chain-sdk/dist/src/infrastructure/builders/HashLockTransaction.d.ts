import { VerifiableTransaction } from './VerifiableTransaction';
export default class HashLockTransaction extends VerifiableTransaction {
    constructor(bytes: any);
}
export declare class Builder {
    size: any;
    maxFee: any;
    version: any;
    type: any;
    deadline: any;
    mosaicId: any;
    mosaicAmount: any;
    duration: any;
    hash: any;
    constructor();
    addSize(size: any): this;
    addMaxFee(maxFee: any): this;
    addVersion(version: any): this;
    addType(type: any): this;
    addDeadline(deadline: any): this;
    addMosaicId(mosaicId: any): this;
    addMosaicAmount(mosaicAmount: any): this;
    addDuration(duration: any): this;
    addHash(hash: any): this;
    build(): HashLockTransaction;
}
