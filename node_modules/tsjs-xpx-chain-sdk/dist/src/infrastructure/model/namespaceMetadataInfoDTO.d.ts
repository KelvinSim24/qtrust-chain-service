import { NamespaceMetadataDTO } from './namespaceMetadataDTO';
export declare class NamespaceMetadataInfoDTO {
    'metadata': NamespaceMetadataDTO;
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
