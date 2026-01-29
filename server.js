const http = require("http");

const VERSION = process.env.APP_VERSION || "v0.1.0";
let counter = 0;

const server = http.createServer((req, res) => {
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

server.listen(8080, "0.0.0.0", () => console.log(`Listening on 8080, version=${VERSION}`));