import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String }, // user, admin, superadmin
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema, "users");
