const { response } = require("express");
const express = require("express");

// express app
const app = express();

// listen for requests
app.listen(3000); // localhost => auto
// return instance of a server like http.createServer
// const server = app.listen(3000); // if u need to use websockets after then for ex

//respond to requests of get method
app.get("/", (req, res) => {
  // u can use these below as well
  // res.write();
  // res.end();

  //use send method in express
  //automatically it detect the content type header,
  //                        status code tooo
  res.send("<p>Home Page</p>");
});
