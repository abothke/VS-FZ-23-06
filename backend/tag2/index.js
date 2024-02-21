import fs from 'fs';

// Parameter: Pfad, Inhalt, Optionen, Callback
// Optionen: flag: 'w' (write), 'a' (append)
// https://nodejs.org/api/fs.html#fs_file_system-flags
// a zum Anhängen, w zum Überschreiben

// Schreiben in eine Datei
fs.writeFile('./datei.txt', "Hallo Welt", {flag: 'w'}, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("File written successfully.");
});

// Lesen aus einer Datei
fs.readFile('./datei.txt', {encoding: 'utf8'},(err, data)=>{
if (err){
    console.error(err);
    return;
}
console.log(data)
})

// Auslesen von Dateiinformationen

fs.stat('./datei.txt', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});