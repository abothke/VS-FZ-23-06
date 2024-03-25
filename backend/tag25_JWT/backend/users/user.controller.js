import express from "express";
import { User } from "./user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

userRouter.post("/register", async (req, res) => {
  const { name, password } = req.body;
  if (!name || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  // erst erzeugen wir ein Salt für diesen User
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const users = await User.create({ name, password: hash });
  res.json(users);
  res.end();
});

userRouter.post("/login", async (req, res) => {
  const { name, password } = req.body;
  if (!name || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }
  console.log({ name, password });

  const user = await User.findOne({ name }).lean();
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  const passwordMatches = await bcrypt.compare(password, user.password);

  if (!passwordMatches) {
    return res.status(401).json({ message: "Wrong password" });
  }
  const token = jwt.sign(
    { name: "Hans", role: "admin" },
    process.env.JWT_SECRET
  );
  res.json({ token, status: "success" });
});
