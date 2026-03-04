import { VerifiableTransaction } from './VerifiableTransaction';
export default class ChainUpgradeTransaction extends VerifiableTransaction {
    constructor(bytes: any);
}
export declare class Builder {
    size: any;
    maxFee: any;
    version: any;
    type: any;
    deadline: any;
    upgradePeriod: any;
    newBlockchainVersion: any;
    constructor();
    addSize(size: any): this;
    addMaxFee(maxFee: any): this;
    addVersion(version: any): this;
    addType(type: any): this;
    addDeadline(deadline: any): this;
    addUpgradePeriod(upgradePeriod: any): this;
    addNewBlockchainVersion(newBlockchainVersion: any): this;
    build(): ChainUpgradeTransaction;
}
