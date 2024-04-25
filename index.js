const http = require("http");
const url = require("url")

const server = http.createServer((req, res) => {
    let result = 0
    const fullURL = req.url
    const parsedUrl = url.parse(fullURL, true);
    const { pathname, query } = parsedUrl
    const a = Number(query.a);
    const b = Number(query.b);
    switch (pathname) {
        case "/add":
            result = a + b;
            break;
        case "/subtract":
            result = a - b;
            break;
        case "/multiply":
            result = a * b;
            break;
        case "/divide":
            result = a / b;
            break;
        default:
            console.log("Error in operator")
            break;
    }

    res.end(`Response => ${result}`)

})

server.listen(3000, 'localhost', () => {
    console.log("Listing");
})