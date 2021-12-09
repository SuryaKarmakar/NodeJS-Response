const http = require("http");

const data = require("./data");
let fs = require("fs");

const PORT = 8000;

const requestListener = (req, res) => {
  // res.writeHead(200, { "Content-Type": "text/html" });
  // res.write("<h1>Welcome to vanilla node server</h1>");
  // res.end();

  // fs.readFile("./index.html", null, (error, data) => {
  //   if (error) {
  //     res.writeHead(404);
  //     res.write("Whoops! File not found!");
  //   } else {
  //     res.writeHead(200, { "Content-Type": "text/html" });
  //     res.write(data);
  //   }
  //   res.end();
  // });

  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(data));
  res.end();
};

const server = http.createServer(requestListener);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
