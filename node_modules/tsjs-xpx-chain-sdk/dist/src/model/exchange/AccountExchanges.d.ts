import { PublicAccount } from "../account/PublicAccount";
import { OfferInfo } from "./OfferInfo";
import { AccountExchangeDTO } from "../../infrastructure/api";
import { NetworkType } from "../blockchain/NetworkType";
export declare class AccountExchanges {
    readonly owner: PublicAccount;
    readonly buyOffers: OfferInfo[];
    readonly sellOffers: OfferInfo[];
    constructor(owner: PublicAccount, buyOffers: OfferInfo[], sellOffers: OfferInfo[]);
    static createFromDTO(exchangeDTO: AccountExchangeDTO | undefined, networkType: NetworkType): AccountExchanges | undefined;
}
