import { UInt64 } from '../UInt64';
import { ExchangeOfferType } from './ExchangeOfferType';
import { PublicAccount } from '../account/PublicAccount';
import { MosaicId } from '../mosaic/MosaicId';
export declare class ExchangeOffer {
    /**
     * Id of the mosaic for which the offer should be accepted
     */
    readonly mosaicId: MosaicId;
    /**
     * Amount
     */
    readonly mosaicAmount: UInt64;
    /**
     * Cost per mosaicAmount.
     */
    readonly cost: UInt64;
    /**
     * Exchange offer type (buy/sell).
     */
    readonly type: ExchangeOfferType;
    /**
     * Owner of the offer we want to accept.
     */
    readonly owner: PublicAccount;
    /**
     * Constructor
     * @param type
     */
    constructor(
    /**
     * Id of the mosaic for which the offer should be accepted
     */
    mosaicId: MosaicId, 
    /**
     * Amount
     */
    mosaicAmount: UInt64, 
    /**
     * Cost per mosaicAmount.
     */
    cost: UInt64, 
    /**
     * Exchange offer type (buy/sell).
     */
    type: ExchangeOfferType, 
    /**
     * Owner of the offer we want to accept.
     */
    owner: PublicAccount);
}
