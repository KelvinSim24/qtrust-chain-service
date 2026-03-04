import { FieldDTO } from './fieldDTO';
export declare class MosaicMetadataDTO {
    'metadataType': number;
    'fields': Array<FieldDTO>;
    'metadataId': Array<number>;
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
