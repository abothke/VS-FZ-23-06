import express from "express";
import multer from "multer";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import { Shoe } from "./model/shoe.js";

await mongoose.connect(process.env.MONGODB_URI);

const PORT = 3000;
const app = express();
const mult = multer();

app.use(cors({ origin: "http://localhost:5173" }));

app.post("/shoes", mult.none(), async (req, res) => {
  const shoeInputData = req.body;
  const shoe = new Shoe(shoeInputData);
  const saveResult = await shoe.save();
  res.status(201).json(saveResult);
});

app.get("/shoes", async (req, res) => {
  const shoes = await Shoe.find().lean();
  res.json(shoes);
});
app.listen(PORT);
