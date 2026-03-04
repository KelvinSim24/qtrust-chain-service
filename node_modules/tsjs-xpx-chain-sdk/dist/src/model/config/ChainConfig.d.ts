import { ConfigDTO } from "../../infrastructure/model/configDTO";
import { UInt64 } from "../UInt64";
/**
 * The config structure stores a chain configuration as returned from http configRoutesApi.
 */
export declare class ChainConfig {
    readonly height: UInt64;
    readonly networkConfig: string;
    readonly supportedEntityVersions: string;
    constructor(height: UInt64, networkConfig: string, supportedEntityVersions: string);
    static createFromDTO(configDTO: ConfigDTO): ChainConfig;
}
