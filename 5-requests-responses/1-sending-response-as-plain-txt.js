const http = require("http");
const server = http.createServer((req, res) => {
  // console.log(req.url, req.method);

  //1. formulate reponse headers
  //used to give browser of info (data is html ? css ? ) , also set cookies

  // 1.1 set header content type
  res.setHeader("Content-Type", "text/plain");
  // 1.2 write content to be sent
  res.write("hello, world");
  // 1.3 ending response , then send
  res.end();
});

server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});
