import fs from 'fs'

fs.readFile('./package.json',{encoding: 'utf-8'}, (err, data)=>{
    if(err){
        console.error(err)
        return
    }
console.log(data);
})