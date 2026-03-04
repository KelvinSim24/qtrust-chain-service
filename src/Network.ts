import { 
    BlockHttp, Listener, NamespaceHttp, NetworkHttp, TransactionHttp, PublicAccount 
} from "tsjs-xpx-chain-sdk";
import { firstValueFrom } from "rxjs";

// Network properties class
export class NetworkProperties {
    public generationHash: string;
    public networkType: any;
    public nemesisBlockInfo: any;

    constructor(nemesisBlockInfo: any) {
        this.generationHash = nemesisBlockInfo.generationHash;
        this.networkType = nemesisBlockInfo.networkType;
        this.nemesisBlockInfo = nemesisBlockInfo;
    }
}

// API wrapper class
class ApiEndpoint {
    private _block: BlockHttp | null = null; // Initialize with null
    private _listener: Listener | null = null; // Initialize with null
    private _namespace: NamespaceHttp | null = null; // Initialize with null
    private _network: NetworkHttp | null = null; // Initialize with null
    private _transaction: TransactionHttp | null = null; // Initialize with null

    constructor(public readonly url: string) {}

    public get block() {
        if (!this._block) {
            this._block = new BlockHttp(this.url, this.network!); // Use non-null assertion to indicate initialization later
        }
        return this._block;
    }
    public get listener() {
        if (!this._listener) {
            this._listener = new Listener(this.url);
        }
        return this._listener;
    }
    public get namespace() {
        if (!this._namespace) {
            this._namespace = new NamespaceHttp(this.url, this.network!);
        }
        return this._namespace;
    }
    public get network() {
        if (!this._network) {
            this._network = new NetworkHttp(this.url);
        }
        return this._network;
    }
    public get transaction() {
        if (!this._transaction) {
            this._transaction = new TransactionHttp(this.url);
        }
        return this._transaction;
    }
}

// Main Network class that integrates everything
export class Network {
    private _networkProperties: Promise<NetworkProperties> | null = null; // Initialize with null
    private _api: ApiEndpoint;

    constructor(apiUrl: string) {
        this._api = new ApiEndpoint(apiUrl);
    }

    public get api() {
        return this._api;
    }

    public get networkProperties() {
        if (!this._networkProperties) {
            this._networkProperties = firstValueFrom(this.api.block.getBlockByHeight(1))
                .then(nemesisBlockInfo => {
                    return new NetworkProperties(nemesisBlockInfo);
                });
        }
        return this._networkProperties;
    }

    // Function to announce and wait for transaction confirmation
    public announceAndWaitForConfirmation(signedTx: any, isAggregateBonded = false) {
    return new Promise((resolve, reject) => {
        console.log('Opening listener...');
        this.api.listener.open().then(() => {
            console.log('Listener opened. Subscribing to transaction status...');
            const status = this.api.listener.status(PublicAccount.createFromPublicKey(signedTx.signer, signedTx.networkType).address).subscribe(txStatusError => {
                console.error('Received transaction status error:', txStatusError);
                if (txStatusError.hash === signedTx.hash) {
                    sub.unsubscribe();
                    status.unsubscribe();
                    reject(txStatusError.status);
                }
            });

            const sub = this.api.listener.confirmed(PublicAccount.createFromPublicKey(signedTx.signer, signedTx.networkType).address).subscribe({
                next: confirmedTx => {
                    console.log('Received confirmation:', confirmedTx);
                    if (confirmedTx && confirmedTx.transactionInfo && confirmedTx.transactionInfo.hash === signedTx.hash) {
                        console.log('Transaction confirmed!');
                        console.log('Confirmed Transaction:', confirmedTx);
                        sub.unsubscribe();
                        status.unsubscribe();
                        resolve(confirmedTx);
                    }
                }, 
                error: error => {
                    console.error('Error in confirmation subscription:', error);
                    if (sub) { sub.unsubscribe(); }
                    if (status) { status.unsubscribe(); }
                    reject(error);
                }, 
                complete: () => {
                    console.log('Confirmation subscription complete');
                    if (sub) { sub.unsubscribe(); }
                    if (status) { status.unsubscribe(); }
                }
            });

            console.log('Announcing the transaction...');
            if (isAggregateBonded) {
                this.api.transaction.announceAggregateBonded(signedTx).subscribe({
                    next(txAnnounceResponse) { 
                        console.log('Aggregate Bonded transaction announced:', txAnnounceResponse);
                    }, 
                    error(error) { 
                        console.error('Error during announceAggregateBonded:', error);
                        sub.unsubscribe();
                        status.unsubscribe();
                        reject(error);
                    }, 
                    complete() { 
                        console.log('Aggregate Bonded announce finished');
                    }
                });
            } else {
                this.api.transaction.announce(signedTx).subscribe({
                    next(txAnnounceResponse) { 
                        console.log('Transaction announced successfully:', txAnnounceResponse);
                    }, 
                    error(error) { 
                        console.error('Error during transaction announce:', error);
                        sub.unsubscribe();
                        status.unsubscribe();
                        reject(error);
                    }, 
                    complete() { 
                        console.log('Transaction announce finished');
                    }
                });
            }
        }).catch(reason => {
            console.error('Listener open failed:', reason);
            reject(reason);
            });
        });
    }
}
