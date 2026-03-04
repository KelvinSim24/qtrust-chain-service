import { ExchangeOfferType } from './ExchangeOfferType';
import { MosaicId } from '../mosaic/MosaicId';
export declare class RemoveExchangeOffer {
    /**
     * Id of the mosaic for which the offer should be removed.
     */
    readonly mosaicId: MosaicId;
    /**
     * Exchange offer type (buy/sell).
     */
    readonly offerType: ExchangeOfferType;
    /**
     * Constructor
     * @param mosaicId
     * @param offerType
     */
    constructor(
    /**
     * Id of the mosaic for which the offer should be removed.
     */
    mosaicId: MosaicId, 
    /**
     * Exchange offer type (buy/sell).
     */
    offerType: ExchangeOfferType);
}
