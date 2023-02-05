const express = require("express");
var path = require("path");

const app = express();

app.listen(3000);

app.get("/", (req, res) => {
  //sendFile : by default takes absolute path , so pass a parameter indicating the root (indicating this path is relative to this root)
  res.sendFile("./views/index.html", { root: `${__dirname}/..` }); //root ->learning-node.js directory
  // console.log(`${__dirname}/..`); //check this out
});

app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: `${__dirname}/..` });
});
