const http = require("node:http");

const proxy = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1> Hello Server node js</h1>");
});

proxy.listen(3000, "127.0.0.1", () => {
  console.log("Server Started!!!");
});