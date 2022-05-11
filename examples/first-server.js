const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Listinging");
});

server.listen(3002);
