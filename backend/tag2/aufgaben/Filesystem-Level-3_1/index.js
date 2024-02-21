import fs from 'fs'

function textCheck(content) {
    fs.access('./text/text.txt', (err) =>{
        if (err){
            fs.openSync('./text/text.txt', 'w')
            console.log(".txt existiert nicht. Erstelle Datei.");
        } else{
            fs.writeFile('./text/text.txt', "\n" + content, {flag: "a"}, (err)=>{
                if (err){
                    throw err
                }
                console.log(".txt existiert. Füge Zeile hinzu");
            })
        }
})}

textCheck("hallomallo")
