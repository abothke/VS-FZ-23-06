import data from './data.json' assert { type: 'json' }
import fs from 'fs'
let i = 1


        data.forEach((e) =>{
            // Ternarys dienen zur Eliminierung unnötiger "leerer Zeilen"
            fs.writeFileSync('./data.txt', (i === 1 ? "" : "\n") + e.id + " - " + e.title + "\n" + e.description + (i === data.len ? "" : "\n"), {flag: "a"}, (err) =>{
                if (err){
                    throw err
                }
            })
            console.log(i);
            i++
        })


    console.log(data.length);
