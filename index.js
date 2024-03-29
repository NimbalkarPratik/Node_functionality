// Http module 

const http = require('http');
const fs = require('fs')
const path = require('path');

const app = http.createServer((req, res) => {

    res.writeHead(200, {
        'Content-Type' : 'text/html'
    })

    // if(req.url === '/') {
    //     fs.readFile(path.join(__dirname,'Public','index.html'),(err, content) => {
    //         if(err) {
    //             throw err
    //         }
    //         res.end(content);
    //     })
    // } else if (req.url === '/about'){
    //     fs.readFile(path.join(__dirname,'Public','about.html'),(err, content) => {
    //         if(err) {
    //             throw err
    //         }
    //         res.end(content);
    //     })
    // }

    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url) 

    fs.readFile(filePath, (err, content) => {
        if(err) {
            fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
                if(err) {
                    res.writeHead(500)
                    res.end('Error!!!')  
                } else {
                    res.writeHead(404, {
                       'Content-Type': contentType 
                    })
                    res.end(data)
                }
                
            })
        } else {
            res.writeHead(200, {
                'Content-Type': contentType 
            })
            res.end(content)
        }
    })
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})