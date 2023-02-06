const express = require("express");
//express app
const app = express();

//register view engine
app.set("view engine", "ejs");

app.listen(3000);

app.use((req, res, next) => {
  console.log("new request made:");
  console.log("host: ", req.hostname);
  console.log("path: ", req.path);
  console.log("method: ", req.method);
  //Express wonder what to do next !!!
  //so it hangs
  //use next to continue execute the rest of the code
  //acually looking forward to matching url
  next();
});

app.get("/", (req, res) => {
  //blogs array
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

//never reaches this if the url was '/'
app.use((req, res, next) => {
  console.log("in the next middleware");
  next();
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
