import express from "express";
import { Entry } from "./entry.model.js";
import { checkAuth } from "../middleware/checkAuth.js";

export const entryRouter = express.Router();

entryRouter.use(express.json());

entryRouter.get("/:user", checkAuth, async (req, res) => {
  console.dir(req.body);
  const user = req.params.user;
  const entries = await Entry.find({ author: user });
  res.json(entries);
});

entryRouter.post("/", async (req, res) => {
  console.dir(req.body);
  try {
    const entry = await Entry.create({
      content: req.body.content,
      author: req.body.author,
    });
    res.json(entry);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
    return;
  }
});
