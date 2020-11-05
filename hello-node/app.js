const http = require('http')
const fs = require('fs')
const PORT = 3000

// localhost : 30000 route we are hitting

//lecture 7
// localhost:3000/ ----index.html
// localhost:3000/hello ----hello.html
// localhost:3000/* -----file not found

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/' :
            //If you are able to read the file: Callback Function
            fs.readFile('./index.html', (error, data) => {
                res.statusCode = 200
                res.setHeader = ('Content-Type', 'text/html')
                res.end (data)
            })
            break
        case '/hello' :
            //If you are able to read the file: Callback Function
            fs.readFile('./hello.html', (error, data) => {
                res.statusCode = 200
                res.setHeader = ('Content-Type', 'text/html')
                res.end (data)
        })
            break
            default:
                res.statusCode = 404
                res.setHeader('Content-Type', 'text/html')
                res.end('Not Found')
    }
});


server.listen(PORT, () => {
    console.log('Server is Running!!!!')
});