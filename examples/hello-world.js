const fs = require("fs");

const message = "Hello from Node.js";

console.log(message);

fs.writeFileSync(`${__dirname}/hello-world.txt`, message);
