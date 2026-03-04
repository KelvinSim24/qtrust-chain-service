import { UInt64 } from '../UInt64';
import { NetworkMosaic, KnownMosaicProperties } from './NetworkMosaic';
/**
 * NetworkCurrencyMosaic mosaic
 *
 * This represents the per-network currency mosaic. This mosaicId is aliased
 * with namespace name `prx.xpx` from XpxMosaicProperties definition by default.
 *
 * @since 0.10.2
 */
export declare class NetworkCurrencyMosaic extends NetworkMosaic {
    /**
     * constructor
     * @param owner
     * @param amount
     */
    private constructor();
    /**
     * Create NetworkCurrencyMosaic with using NetworkCurrencyMosaic as unit.
     *
     * @param amount
     * @returns {NetworkCurrencyMosaic}
     */
    static createRelative(amount: UInt64 | number, networkMosaicProperties?: KnownMosaicProperties): NetworkCurrencyMosaic;
    /**
     * Create NetworkCurrencyMosaic with using micro NetworkCurrencyMosaic as unit,
     * 1 NetworkCurrencyMosaic = 1000000 micro NetworkCurrencyMosaic.
     *
     * @param amount
     * @returns {NetworkCurrencyMosaic}
     */
    static createAbsolute(amount: UInt64 | number, networkMosaicProperties?: KnownMosaicProperties): NetworkCurrencyMosaic;
}
