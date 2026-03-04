import { Account, NetworkType } from "tsjs-xpx-chain-sdk";

const NETWORK_TYPE = NetworkType.TEST_NET;
const VERSION = 1; 

const acc = Account.generateNewAccount(NETWORK_TYPE, VERSION);

console.log("Generated New Testnet Account");
console.log("----------------------------");
console.log("Private Key:", acc.privateKey);
console.log("Public Key: ", acc.publicKey);
console.log("Address:    ", acc.address.plain());
console.log("----------------------------");
