import { UInt64 } from '../UInt64';
import { NetworkMosaic, KnownMosaicProperties } from './NetworkMosaic';
/**
 * NetworkHarvestMosaic mosaic
 *
 * This represents the per-network harvest mosaic. This mosaicId is aliased
 * with namespace name `prx.xpx` from XpxMosaicProperties definition by default.
 *
 * @since 0.10.2
 */
export declare class NetworkHarvestMosaic extends NetworkMosaic {
    /**
     * constructor
     * @param owner
     * @param amount
     */
    private constructor();
    /**
     * Create NetworkHarvestMosaic with using NetworkHarvestMosaic as unit.
     *
     * @param amount
     * @returns {NetworkHarvestMosaic}
     */
    static createRelative(amount: UInt64 | number, networkMosaicProperties?: KnownMosaicProperties): NetworkHarvestMosaic;
    /**
     * Create NetworkHarvestMosaic with using micro NetworkHarvestMosaic as unit,
     * 1 NetworkHarvestMosaic = 1000000 micro NetworkHarvestMosaic.
     *
     * @param amount
     * @returns {NetworkHarvestMosaic}
     */
    static createAbsolute(amount: UInt64 | number, networkMosaicProperties?: KnownMosaicProperties): NetworkHarvestMosaic;
}
