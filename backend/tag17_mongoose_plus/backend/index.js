import mongoose from "mongoose";
import "dotenv/config";
import { Bird } from "./models/bird.js";
import { Entry } from "./models/entry.js";
import express from "express";
import birdRouter from "./controller/birds.js";
import entryRouter from "./controller/entries.js";
import cors from "cors";

await mongoose.connect(process.env.MONGODB_URI);

const PORT = 3000;
const app = express();

app.use(cors());
app.use("/birds", birdRouter);
app.use("/entries", entryRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}.`);
});
