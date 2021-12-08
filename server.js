const http = require("http");

const PORT = 8000;
const data = [
  {
    id: 1,
    name: "user 1",
    age: 21,
  },
  {
    id: 2,
    name: "user 2",
    age: 23,
  },
  {
    id: 3,
    name: "user 3",
    age: 20,
  },
  {
    id: 4,
    name: "user 4",
    age: 27,
  },
];

const requestListener = (req, res) => {
  //   res.write("<h1>Welcome to vanilla node server</h1>");
  //   res.end();
  res.write(JSON.stringify(data));
  res.end();
};
const server = http.createServer(requestListener);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
