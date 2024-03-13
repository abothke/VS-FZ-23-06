import express from 'express'
import { MongoClient, ServerApiVersion } from "mongodb";
import 'dotenv/config'
import cors from 'cors'

import expensesRouter from './expenses/controller.js'

const PORT = 3000
const app = express()

const client = new MongoClient(process.env.MONGODB_URI);

app.use("/expenses", expensesRouter)

app.listen(PORT, () => {
    console.log(`Server is running on  http://localhost:${PORT}`);
    });

