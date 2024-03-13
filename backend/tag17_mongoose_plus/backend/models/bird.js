import mongoose, { Schema } from "mongoose";

const foodSchema = new Schema({
  name: { type: String, required: true },
  caloricValue: { type: Number },
});

const birdSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  latinName: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  wingspan: {
    type: Number,
  },
  hobbies: [String],
  food: [foodSchema],
});

export const Bird = mongoose.model("bird", birdSchema);
