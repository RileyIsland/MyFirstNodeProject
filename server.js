const http = require('http')

const server = http.createServer((inRequest, inResponse) => {
    inResponse.end('Hello from my first Node Web server')
})

server.listen(80)
