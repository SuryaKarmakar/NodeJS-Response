const http = require("http");

const PORT = 8000;

const requestListener = (req, res) => {
  res.write("<h1>Welcome to vanilla node server</h1>");
  res.end();
};
const server = http.createServer(requestListener);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
