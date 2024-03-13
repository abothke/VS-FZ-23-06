import mongoose from "mongoose";
import "dotenv/config";
import { Bird } from "./models/bird.js";
import { Entry } from "./models/entry.js";

await mongoose.connect(process.env.MONGODB_URI);
mongoose.set("debug", true);

// const newBird = new Bird({
//   name: "Sekretär",
//   latinName: "Saggitarius Serpentarius",
//   imageUrl:
//     "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/220892221/1800",
//   hobbies: ["Knitting", "Hanging out with friends", "Kicking snakes"],
//   food: [
//     {
//       name: "Snakes",
//       caloricValue: 400,
//     },
//     {
//       name: "Wheat",
//       caloricValue: 200,
//     },
//   ],
// });

// const saveResult = await newBird.save();
// console.log(saveResult);

// const allBirds = await Bird.find().lean();
// console.dir({ allBirds });

// Datensatz updaten:
// Wir suchen nach dem Dokument z.B. mit findOne()
// Und durch Zuweisung der Eigenschaft, können wir direkt verändern
// Und wir speichern mit .save()

// const firstBird = await Bird.findOne();
// firstBird.germanName = "Karl Heinz";
// await firstBird.save();

// Datensatz löschen
// await Bird.deleteOne({ _id: "65f16b4ff4a4f2c7f0337bec" });

// const newEntry = new Entry({
//   content: "I saw a bird today. To be specific, I saw a Sekretär.",
//   birds: ["65f17a99778b8d0dd775804c"],
// });

// const saveEntry = await newEntry.save();
// console.log(saveEntry);

const entry = await Entry.findOne().populate("birds");
console.log(entry);

await mongoose.connection.close();
