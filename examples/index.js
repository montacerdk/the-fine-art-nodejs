const http = require("http");

const SERVER_PORT = 3002;

const server = http.createServer((req, res) => {
  console.log(`Server is listening on port ${SERVER_PORT}`);
});

server.listen(SERVER_PORT);
