import express from 'express'
import fs from 'fs/promises'

const app = express();
let count = 0

app.get('/counter', (req, res) =>{
    res.send({count});
})

app.post('/api/increment', (req, res) =>{
    count++
    res.send(`Count is now ${count}`)
})

// app.use((req, res, next) =>{
//     console.dir({req, res})
//     next()
// })

app.use(express.static('public'));
app.use(express.json())


// ab hier Food API

app.get('/api/dishes', (req, res)=>{
    fs.readFile('./dishes.json', {encoding : 'utf-8'
    }).then((data)=>{ 
        res.json(JSON.parse(data))
    })
})

app.post('/api/dishes', (req, res)=>{
    const newDish = req.body
    fs.readFile('./dishes.json', {encoding : 'utf-8'}).then((data)=>{
        let dishes = JSON.parse(data)
        dishes.push(newDish)
        fs.writeFile('./dishes.json', JSON.stringify(dishes)).then(() =>{
            res.send()
        })
    })
})

app.listen(3000, ()=>{
    console.log("Server läuft");
})