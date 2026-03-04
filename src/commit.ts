import "dotenv/config";
import {
  TransferTransaction,
  Deadline,
  Account,
  NetworkType,
  PlainMessage,
  Address,
} from "tsjs-xpx-chain-sdk";
import { Network } from "./Network";

type CommitInput = {
  tweetKey: string;        // keep (your backend uses it)
  trustIndex: number;
  aiIndex: number;
  voteRealCount: number;
  voteFakeCount: number;
  performedBy: string;
  recordHash: string;      // keep for Firebase proofs/versioning
};

export async function commitToChain(input: CommitInput) {
  const nodeUrl = process.env.XPX_NODE_URL || "https://api-2.testnet2.xpxsirius.io";
  const networkType = NetworkType.TEST_NET;

  const privateKey = process.env.XPX_PRIVATE_KEY || "";
  const recipientRaw = process.env.XPX_RECIPIENT_ADDRESS || "";
  const accountVersion = parseInt(process.env.XPX_ACCOUNT_VERSION || "1", 10);

  if (!privateKey) throw new Error("XPX_PRIVATE_KEY is missing in .env");
  if (!recipientRaw) throw new Error("XPX_RECIPIENT_ADDRESS is missing in .env");

  const sender = Account.createFromPrivateKey(privateKey, networkType, accountVersion);
  const recipient = Address.createFromRawAddress(recipientRaw);

  // Keep message short (fits TransferTransaction message limit)
  const messageText = `Trust_index=${input.trustIndex}, AI_index=${input.aiIndex}, Voted_real=${input.voteRealCount}, Voted_fake=${input.voteFakeCount}, Performed_by=${input.performedBy}`;
  const message = PlainMessage.create(messageText);

  const tx = TransferTransaction.create(
    Deadline.create(),
    recipient,
    [], // no mosaics transferred
    message,
    networkType
  );

  const network = new Network(nodeUrl);
  const props: any = await network.networkProperties; // gets generationHash from block 1
  const signer: any = sender as any;
  const generationHash = props.generationHash;

const signed =
  typeof signer.preV2Sign === "function"
    ? signer.preV2Sign(tx, generationHash)
    : sender.sign(tx, generationHash);


  const confirmed: any = await network.announceAndWaitForConfirmation(signed);

  // height format can vary; safe return as string if present
  const height =
    confirmed?.transactionInfo?.height?.compact?.() ??
    confirmed?.transactionInfo?.height?.toString?.();

  return {
    txHash: signed.hash,
    height: height != null ? String(height) : null,
  };
}
