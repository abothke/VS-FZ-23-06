import express from 'express';
import fs from 'fs/promises';
import cors from 'cors';

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(cors());
try{
    await fs.access('./birds.json')
} catch(err){
    fs.writeFile('./birds.json', JSON.stringify([]))
}
app.get('/birds', async (req, res) => {
    try {
        const birds = await fs.readFile('./birds.json', 'utf8');
        const birdsJson = JSON.parse(birds);
        res.json(birdsJson);
    }
    catch (err) {
        res.status(500).send('An error occurred');
   }
})

app.post('/birds', async (req, res) => {
    try {
        const newBird = req.body;
        console.dir(newBird);
        if (!newBird.name || !newBird.description || !newBird.imageUrl) {
            res.status(400).send('Invalid bird');
            return;
        }
        const birds = await fs.readFile('./birds.json', 'utf8');
        const birdsJson = JSON.parse(birds);
        const newBirds = [...birdsJson, newBird];
        await fs.writeFile('./birds.json', JSON.stringify(newBirds));
        res.status(201).json(newBird);
    }
    catch (err) {
        res.status(500).send('An error occurred');
    }
})

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })