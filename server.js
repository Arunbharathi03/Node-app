const http = require('http')
const fs = require('fs')

const readStream = fs.createReadStream('./views/index.html', { encoding: 'utf8' })

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')

    let path = './views'
    console.log(req.url);
    switch (req.url) {
        case '/': {
            path += '/index.html'
            res.statusCode = 200
            break
        }
        case '/home': {
            path += '/home.html'
            res.statusCode = 200
            break
        }
        case '/about': {
            path += '/about.html'
            res.statusCode = 200
            break
        }
        case '/about-me': {
            res.statusCode = 301
            res.setHeader('Location', '/about')
            res.end()
            break
        }
        default: {
            path += '/404.html'
            res.statusCode = 404
            break
        }
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end()
        } else {
            // res.write(data)
            res.end(data)
        } 
    })
    // readStream.on('data', (chunk) => {
    //     res.write(chunk)
    //     res.end()
    // })
})



server.listen(3000, 'localhost', () => {
    console.log('listening to request');
})