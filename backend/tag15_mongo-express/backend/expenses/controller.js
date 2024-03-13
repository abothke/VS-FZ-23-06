import express from 'express';
import db from '../utils/db.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.json([])
    const expenses = await db.collection('expenses').find().toArray()
    console.dir(expenses)
    res.json([])
});



export default router