import { UInt64 } from '../UInt64';
import { ExchangeOfferType } from './ExchangeOfferType';
import { MosaicId } from '../mosaic/MosaicId';
export declare class AddExchangeOffer {
    /**
     * Id of the mosaic for which the offer should be added
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
     * Number of blocks - how long is this offer valid.
     */
    readonly duration: UInt64;
    /**
     * Constructor
     * @param type
     */
    constructor(
    /**
     * Id of the mosaic for which the offer should be added
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
     * Number of blocks - how long is this offer valid.
     */
    duration: UInt64);
}
