const express = require("express");

//express app
const app = express();

//register view engine
//use ejs to create our templetes
app.set("view engine", "ejs"); // configure app sitting
//it looks into views folder by default
//if ur views folder's name is "blah blah"
//set it:
// app.set('views', 'blah blah')

app.listen(3000);

app.get("/", (req, res) => {
  res.render("index");
  //express will look inside views folder automatically
  //find index.html
  //use EJS view engine
  //to render that and send back to the browser
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/blogs/create", (req, res) => {
  res.render("create");
});

//404 page
app.use((req, res) => {
  res.status(404).render("404");
});
