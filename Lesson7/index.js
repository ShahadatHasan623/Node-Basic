const http = require("http");
const fs = require("fs");
const port = 3000;
const hostname = "127.0.0.1";

const server = http.createServer((req, res) => {
  const handleFile = (statusCode, fileLocation) => {
    fs.readFile(fileLocation, (err, data) => {
      res.writeHead(statusCode, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  };
  
  if (req.url === "/") {
    handleFile(200, "./views/index.html");
  } else if (req.url === "/about") {
    handleFile(200, "./views/about.html");
  } else if (req.url === "/contact") {
    handleFile(200, "./views/contact.html");
  } else {
    handleFile(200, "./views/Error.html");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
});
