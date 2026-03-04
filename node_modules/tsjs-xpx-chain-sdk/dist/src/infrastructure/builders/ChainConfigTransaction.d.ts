import { VerifiableTransaction } from './VerifiableTransaction';
export default class ChainConfigTransaction extends VerifiableTransaction {
    constructor(bytes: any);
}
export declare class Builder {
    size: any;
    maxFee: any;
    version: any;
    type: any;
    deadline: any;
    applyHeightDelta: any;
    networkConfig: any;
    supportedEntityVersions: any;
    constructor();
    addSize(size: any): this;
    addMaxFee(maxFee: any): this;
    addApplyHeightDelta(applyHeightDelta: any): this;
    addNetworkConfig(networkConfig: any): this;
    addSupportedEntityVersions(supportedEntityVersions: any): this;
    addVersion(version: any): this;
    addType(type: any): this;
    addDeadline(deadline: any): this;
    build(): ChainConfigTransaction;
}
