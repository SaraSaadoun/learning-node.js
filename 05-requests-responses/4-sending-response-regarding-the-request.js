const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  //set header content type
  res.setHeader("Content-Type", "text/html");

  let path = "./../views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me": //redirect to webpage /about
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end(); //end this and redirect
      break;
    default: //anything else go 404
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  //send an html file
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

//status codes describe the type of response sent to the browser
//ok - 200
//301 - resource moved
//404 - not found
//500 -internal server error

//messy right?
//there is 3rd party pkg "Express" that will help
