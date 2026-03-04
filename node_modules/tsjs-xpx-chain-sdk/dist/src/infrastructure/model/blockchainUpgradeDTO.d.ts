import { UpgradeDTO } from './upgradeDTO';
export declare class BlockchainUpgradeDTO {
    'blockchainUpgrade': UpgradeDTO;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
