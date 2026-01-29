const http = require("http");

const VERSION = process.env.APP_VERSION || "v0.1.0";
const PORT = process.env.PORT || 8080;

let counter = 0;

const server = http.createServer((req, res) => {
    console.log(`Ping received at ${new Date().toISOString()} on ${VERSION}`);

    counter++;  
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify({
        ok: true,
        version: VERSION,
        counter,
        path: req.url,
        ts: new Date().toISOString()
    }));
});

server.listen(PORT, "0.0.0.0", () => {
    console.log(`Listening on ${PORT}, version=${VERSION}`);
});