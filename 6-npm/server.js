//trying lodash :
const http = require("http");
const fs = require("fs");
const _ = require("lodash"); //common => imported as _

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // lodash
  // random number
  const num = _.random(0, 20);
  console.log(num);

  // call this func ONCE
  const great = _.once(() => {
    console.log("Hello");
  });
  great();
  great(); //will not work

  res.setHeader("Content-Type", "text/html");

  let path = "../5-requests-responses/views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});
