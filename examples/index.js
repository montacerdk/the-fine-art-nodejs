const http = require("http");

const SERVER_PORT = 3002;

const server = http.createServer((req, res) => {
  console.log(`Server is listening on port ${SERVER_PORT}`);
  // console.log(req);
  console.log(req.url, req.method, req.headers);

  res.setHeader("Content-Type", "text/html");

  if (req.url === "/home") {
    res.write("<html>");
    res.write("<head><title>My home page</title></head>");
    res.write(
      "<body style='font-size:70px;'>Hello from our Node.js Server Home page</body>"
    );
    res.write("</html>");
    res.statusCode = 200;
    return res.end();
  }

  res.write("<html>");
  res.write("<head><title>My first page</title></head>");
  res.write(
    "<body style='font-size:70px;'>Hello from our Node.js Server</body>"
  );
  res.write("</html>");
  res.statusCode = 200;
  res.end();
});

server.listen(SERVER_PORT);
