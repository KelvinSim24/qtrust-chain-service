import { AddressMetadataDTO } from './addressMetadataDTO';
export declare class AddressMetadataInfoDTO {
    'metadata': AddressMetadataDTO;
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
