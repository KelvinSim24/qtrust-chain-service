import "dotenv/config";
import express from "express";
import cors from "cors";
import { commitToChain } from "./commit";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => res.json({ ok: true }));

app.post("/commit", async (req, res) => {
  try {
    const { tweetKey, trustIndex, aiIndex, voteRealCount, voteFakeCount, recordHash, performedBy } = req.body || {};

    if (!tweetKey || typeof tweetKey !== "string")
      return res.status(400).json({ error: "tweetKey is required" });
    if (typeof trustIndex !== "number")
      return res.status(400).json({ error: "trustIndex must be a number" });
    if (!recordHash || typeof recordHash !== "string")
      return res.status(400).json({ error: "recordHash is required" });
    if (typeof aiIndex !== "number")
      return res.status(400).json({ error: "aiIndex must be a number" });
    if (typeof voteRealCount !== "number")
      return res.status(400).json({ error: "voteRealCount must be a number" });
    if (typeof voteFakeCount !== "number")
      return res.status(400).json({ error: "voteFakeCount must be a number" });
    if (typeof performedBy !== "string")
      return res.status(400).json({ error: "performedBy is required" })

    const result = await commitToChain({ tweetKey, trustIndex, aiIndex, voteRealCount, voteFakeCount, recordHash, performedBy });
    return res.json(result);
  } catch (e: any) {
    return res.status(500).json({ error: e?.message || String(e) });
  }
});

const port = parseInt(process.env.PORT || "3001", 10);
app.listen(port, () => console.log(`QTrust chain-service running on http://127.0.0.1:${port}`));
