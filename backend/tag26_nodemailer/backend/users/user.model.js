import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    emailVerified: { type: Boolean, default: false, required: true },
    verificationCode: { type: String },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema, "users");
