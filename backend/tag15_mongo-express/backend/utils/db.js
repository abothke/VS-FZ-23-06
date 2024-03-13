import { MongoClient } from "mongodb";

// neuer client, noch nicht verbunden
const client = new MongoClient(process.env.MONGODB_URI);

// wir warten auf die Verbindung mit der Datenbank
await client.connect();



console.log("Connected to db");

const db = client.db("expenses")

export default db