import http from 'http'
import fs from 'fs'

const sendFile = (res, path) =>{
    fs.readFile(path, (err, data) =>{
        if (err){
        res.writeHead(500)
        res.end("Server Error")
        }
        if(path.includes('.svg')) {
            res.writeHead(200, { 'Content-Type': 'application/json'})
        }
        res.end(data)
    })
}

const server = http.createServer((req, res) =>{
    console.log(req.method + " " + req.url);
    if (req.url === '/'){
        sendFile(res, "./public/index.html")
    } else {
        sendFile(res, `./public/${req.url}`)
    }

})

server.listen(3000, ()=>{
    console.log("listening on http://localhost:3000");
})