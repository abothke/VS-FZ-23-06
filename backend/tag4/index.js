import fs from 'fs'

// const responsePromise = fetch('https://api.chucknorris.io/jokes/random')
// .then((response) => response.json())
// .then((json) => console.log(json))
// .catch((err) =>{
//     console.error(`Fehler ${err} wurde gefangen`)
// })
// .finally(() =>{
//     console.log("Ich werde in jedem Fall ausgeführt");
// })
// fs.readFile('./package.json',{encoding: 'utf-8'}, (err, data)=>{
//     if(err){
//         console.error(err)
//         return
//     }
//     setTimeout(()=>{
//         fs.writeFile(('./package.json.copy'), data, (err) =>{
//             if(err){
//                 console.error(err)
//                 return
//             }
//             fs.readFile('./packag12312e.json.copy', {encoding: 'utf-8'}, (err, data)=>{
//                 if(err){
//                     throw err
//                 }
//                 console.log(data);
//             })
//         })
//     },2000)

// })
const responsePromise = fetch('https://api.chucknorris.io/jokes/random')
.then((response) => response.json())
.then((json) => console.log(json))
.catch((err) =>{
    console.error(`Fehler ${err} wurde gefangen`)
})
.finally(() =>{
    console.log("Ich werde in jedem Fall ausgeführt");
})
fs.readFile('./package.json',{encoding: 'utf-8'}, (err, data)=>{
    if(err){
        console.error(err)
        return
    }
    setTimeout(()=>{
        fs.writeFile(('./package.json.copy'), data, (err) =>{
            if(err){
                console.error(err)
                return
            }
            fs.readFile('./packag12312e.json.copy', {encoding: 'utf-8'}, (err, data)=>{
                if(err){
                    throw err
                }
                console.log(data);
            })
        })
    },2000)

})