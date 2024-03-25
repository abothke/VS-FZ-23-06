import express from "express";
import { Entry } from "../models/entry.js";
import multer from "multer";

// dieser Router wird nur aufgerufen, wenn der Request auf /birds beginnt
const router = express.Router();
const mult = multer();

router.get("/", async (req, res) => {
  const entries = await Entry.find().lean().populate("bird");
  res.json(entries);
});

router.post("/", mult.none(), async (req, res) => {
  console.dir(req.body);
  const newBird = new Entry({
    content: req.body.content,
    bird: req.body.bird,
  });
  await newBird.save();
  res.json(newBird);
});

export default router;
