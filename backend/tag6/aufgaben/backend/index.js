import express from 'express';
import fs from 'fs/promises';
import cors from 'cors';

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(cors());
try{
    await fs.access('./tasks.json')
} catch(err){
    fs.writeFile('./tasks.json', JSON.stringify([]))
}
app.get('/tasks', async (req, res) => {
    try {
        const tasks = await fs.readFile('./tasks.json', 'utf8');
        const tasksJson = JSON.parse(tasks);
        res.json(tasksJson);
    }
    catch (err) {
        res.status(500).send('An error occurred');
   }
})

app.post('/tasks', async (req, res) => {
    try {
        const newTask = req.body;
        console.dir(newTask);
        if (!newTask.name || !newTask.status) {
            res.status(400).send('Invalid bird');
            return;
        }
        const tasks = await fs.readFile('./tasks.json', 'utf8');
        const tasksJson = JSON.parse(tasks);
        newTask.id = tasksJson.length + 1;
        const newTasks = [...tasksJson, newTask];
        await fs.writeFile('./tasks.json', JSON.stringify(newTasks));
        res.status(201).json(newTask);
    }
    catch (err) {
        res.status(500).send('An error occurred');
    }
})

app.patch('/tasks/', async (req, res) => {
    try {
        const { id, status } = req.body;
        const tasks = await fs.readFile('./tasks.json', 'utf8');
        const tasksJson = JSON.parse(tasks);
        const taskIndex = tasksJson.findIndex(task => task.id === id);
        tasksJson[taskIndex].status = status;
        await fs.writeFile('./tasks.json', JSON.stringify(tasksJson));
        res.json(tasksJson[taskIndex]);
    }
    catch (err) {
        res.status(500).send('An error occurred');
    }
}
)

app.delete('/tasks/', async (req, res) => {
    try {
        const tasks = await fs.readFile('./tasks.json', 'utf8');
        const tasksJson = JSON.parse(tasks);
        const newTasks = tasksJson.filter(task => task.status !== 'done');
        await fs.writeFile('./tasks.json', JSON.stringify(newTasks));
        res.json(newTasks);
    }
    catch (err) {
        res.status(500).send('An error occurred');
    }
}
)

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })