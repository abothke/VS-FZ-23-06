import express from "express";
import { Entry } from "./entry.model.js";
import checkAuth from "../middleware/checkAuth.js";

export const entryRouter = express.Router();

entryRouter.get("/", checkAuth, async (req, res) => {
  const entries = await Entry.find();
  res.json(entries);
});
