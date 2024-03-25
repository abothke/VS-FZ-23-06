import express from "express";
import { User } from "./user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { mail } from "../utils/mail.js";
import crypto from "crypto";

export const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

userRouter.post("/register", async (req, res) => {
  const { name, password, email } = req.body;
  if (!name || !password || !email) {
    res.sendStatus(403);
    return;
  }
  // erst erzeugen wir einen salt für diesen User
  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(password, salt);

  const verificationCode = crypto.randomInt(100000, 999999);
  const user = await User.create({
    name,
    email,
    password: hash,
    verificationCode,
  });

  mail.sendMail({
    from: '"Andre" <andre@bothke.de>',
    to: email,
    subject: "Welcome",
    html: `<b>Welcome to our platform</b> <p>Click <a href='http://localhost:3000/users/verify?code=${verificationCode}'>here</a> to verify your email</p>`,
  });

  res.json(user);
});

userRouter.post("/login", async (req, res) => {
  const { name, password } = req.body;
  if (!name || !password) {
    res.sendStatus(403);
    return;
  }

  // check login data

  // get user from db
  const user = await User.findOne({ name }).lean();
  if (user === null) {
    res.status(401).send("Wrong credentials");
    return;
  }

  // check password against saved hash
  const passwordMatches = await bcrypt.compare(password, user.password);

  // check if basic auth password is identical to password in DB
  if (!passwordMatches) {
    res.status(401).send("Wrong credentials");
    return;
  }

  if (!user.emailVerified) {
    res.status(401).send("Email not verified");
    return;
  }
  const token = jwt.sign({ name }, process.env.JWT_SECRET);
  res.cookie("JWT", token, { maxAge: 90000, httpOnly: true });
  res.json({ status: "ok", token: token });
});

userRouter.post("/verify", async (req, res) => {
  console.log(req.body);
  const { verificationCode, email } = req.body;
  const user = await User.findOne({
    email: email,
    verificationCode: verificationCode,
  });
  console.log(user);
  if (user === null) {
    res.status(404).send("User not found");
    return;
  }
  if (user.emailVerified) {
    res.send("Email already verified");
    return;
  }
  user.emailVerified = true;
  await user.save();
  res.send("Email verified");
});
