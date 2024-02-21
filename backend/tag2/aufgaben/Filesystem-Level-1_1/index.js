import fs from 'fs';

fs.writeFile('./blog1.txt', 'Ich bin ein Webdeveloper', err => {
    if (err){
        throw err
    }
})

fs.writeFile('./blog2.txt', 'beliebiger Text :)', err =>{
    if (err){
        throw err
    }
})

fs.access('./assets', (err) =>{
    (err ? fs.mkdir('./assets', (err)=>{
        if (err){
            throw err
        }
        console.log('Ordner assets erstellt');
    }): fs.rmdir('./assets', (err) =>{
        if(err){
            throw err
        }
        console.log('Ordner assets gelöscht');
    }))
})

fs.access('./delete.txt', (err) =>{
    (err ? fs.writeFile('./delete.txt', '', (err) =>{
        if (err){
            throw err
        }
        console.log("delete.txt erstellt");
    }): fs.unlink('./delete.txt', (err) =>{
        if (err){
            throw err;
        }
        console.log("delete.txt gelöscht");
    }))
})

fs.writeFile('./hello.txt', 'beliebiger Text :)', (err)=>{
    if (err){
        throw err
    }
    fs.rename('./hello.txt', './helloworld.txt', (err)=>{
        if (err){
            throw err
        }
    })
})