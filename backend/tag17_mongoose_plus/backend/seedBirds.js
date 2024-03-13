import mongoose from "mongoose";
import "dotenv/config";
import { Bird } from "./models/bird.js";

await mongoose.connect(process.env.MONGODB_URI);

const birdArray = [
  {
    name: "Rotkehlchen",
    latinName: "Erithacus rubecula",
  },
  {
    name: "Blaumeise",
    latinName: "Cyanistes caeruleus",
  },
  {
    name: "Amsel",
    latinName: "Turdus merula",
  },
  {
    name: "Kuckuck",
    latinName: "Cuculus canorus",
  },
  {
    name: "Stieglitz",
    latinName: "Carduelis carduelis",
  },
  {
    name: "Mauersegler",
    latinName: "Apus apus",
  },
  {
    name: "Zaunkönig",
    latinName: "Troglodytes troglodytes",
  },
  {
    name: "Schwalbe",
    latinName: "Hirundo rustica",
  },
  {
    name: "Habicht",
    latinName: "Accipiter gentilis",
  },
  {
    name: "Turmfalke",
    latinName: "Falco tinnunculus",
  },
  {
    name: "Nachtigall",
    latinName: "Luscinia megarhynchos",
  },
  {
    name: "Goldammer",
    latinName: "Emberiza citrinella",
  },
  {
    name: "Buchfink",
    latinName: "Fringilla coelebs",
  },
  {
    name: "Kohlmeise",
    latinName: "Parus major",
  },
  {
    name: "Sperling",
    latinName: "Passer domesticus",
  },
  {
    name: "Eichelhäher",
    latinName: "Garrulus glandarius",
  },
  {
    name: "Drossel",
    latinName: "Turdus",
  },
  {
    name: "Reiher",
    latinName: "Ardea",
  },
  {
    name: "Steinkauz",
    latinName: "Athene noctua",
  },
  {
    name: "Seeadler",
    latinName: "Haliaeetus albicilla",
  },
];

await Bird.deleteMany({});
await Bird.insertMany(birdArray);
console.log("Birds added");
await mongoose.connection.close();
