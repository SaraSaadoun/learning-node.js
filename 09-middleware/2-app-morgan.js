const express = require("express");
const morgan = require("morgan");
//express app
const app = express();

//register view engine
app.set("view engine", "ejs");

app.listen(3000);

//make any file in public folder is a static file for the front end
app.use(express.static("public"));

app.use(morgan("tiny")); //dev/tiny/... -> how it is formated

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat bowser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];

  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new Blog" });
});

//404 page
//should be at the bottom because it sends a response, so the code after it will never be executed
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
