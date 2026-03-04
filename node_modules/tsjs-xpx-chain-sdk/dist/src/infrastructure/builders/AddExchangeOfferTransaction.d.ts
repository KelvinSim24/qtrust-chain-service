import { VerifiableTransaction } from './VerifiableTransaction';
/**
 * @module transactions/AddExchangeOfferTransaction
 */
export default class AddExchangeOfferTransaction extends VerifiableTransaction {
    constructor(bytes: any);
}
export declare class Builder {
    size: any;
    maxFee: any;
    version: any;
    type: any;
    deadline: any;
    offers: any[];
    constructor();
    addSize(size: any): this;
    addMaxFee(maxFee: any): this;
    addVersion(version: any): this;
    addType(type: any): this;
    addDeadline(deadline: any): this;
    addOffers(offers: any): this;
    build(): AddExchangeOfferTransaction;
}
