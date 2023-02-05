const http = require("http");
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  //   res.write('<head><link rel="stylesheet" href = "#"></head>');
  //automatically add head , body tags
  //if you specify them manually -> it will replace them

  res.write("<p>hello, world</p>");
  res.write("<p>hello again, world</p>");

  res.end();
});

server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});
