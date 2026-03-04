import { Address } from '../account/Address';
import { UInt64 } from '../UInt64';
/**
 * The richlist entry describes the account details and its specific mosaic ownership.
 */
export declare class RichlistEntry {
    /**
     * The account address.
     */
    readonly address: Address;
    /**
     * The account public key.
     */
    readonly publicKey: string;
    /**
     * The mosaic amount
     */
    readonly amount: UInt64;
    /**
     * Create a Richlist Entry
     * @param address - Address of the account
     * @param publicKey - Public Key of the account
     * @param amount - The mosaic amount
     * @return {RichlistEntry}
     */
    static create(address: Address, publicKey: string, amount: UInt64): RichlistEntry;
}
