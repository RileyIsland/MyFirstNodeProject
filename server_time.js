const http = require('http')

const server = http.createServer((inRequest, inResponse) => {
    const requestModule = require('request')
    requestModule(
        'http://worldtimeapi.org/api/timezone/America/Los_Angeles',
        (inErr, inResp, inBody) => {
            inResponse.end(`Hello from my first Node Web server: ${inBody}`)
        }
    )
})

server.listen(80)
