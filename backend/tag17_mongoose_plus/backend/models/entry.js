import mongoose, { Schema } from "mongoose";

const entrySchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  birds: [
    {
      type: mongoose.Types.ObjectId,
      ref: "bird",
    },
  ],
});

export const Entry = mongoose.model("entry", entrySchema);
