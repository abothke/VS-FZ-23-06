import fs from 'fs'

// https://api.chucknorris.io/jokes/random
// Schreibe die Witze in eine Datei als Funktion
const writeJoke = (data, i) =>{
    fs.writeFile('./jokes/jokes.txt', i + " :" + data.value + "\n", {flag: 'a', }, err => {
        if (err) {
            throw err
        }
        console.log("One joke added");
    });
}

// Fetche 100 Witze und schreibe sie in die Datei
for (let i = 0; i < 100; i++){
await fetch('https://api.chucknorris.io/jokes/random').then((response)=>{
return response.json()
})
.then((data)=>{
    writeJoke(data, i)
}).catch((err) =>{console.error(err)
})
}