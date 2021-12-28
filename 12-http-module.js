const http = require('http')

const server = http.createServer((req, res)=> {
    if(req.url === '/') {
        res.end('Welcome to home page')
    }
    else if(req.url === '/about') {
        res.end('Welcome to about page')
    }
    else {
        res.end(`
        <h1>Oops!</h1>
        <p>We can't find the page</p>
        <a href="/">back home</a>
        `)
    }    
})

server.listen(5000)
