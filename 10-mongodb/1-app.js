const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

//express app
const app = express();

//register view engine
app.set("view engine", "ejs");

//make any file in public folder is a static file for the front end
app.use(express.static("public"));

app.use(morgan("dev")); //dev/tiny/... -> how it is formated
//connect to mongodb
const dbURI =
  "mongodb+srv://test-user:test1234@cluster0.gr6xp1u.mongodb.net/node-db?retryWrites=true&w=majority";
mongoose.set("strictQuery", true); //to supress the warning appeared
//returns promise
mongoose
  .connect(dbURI)
  .then((result) => {
    console.log("connected to db");
    app.listen(3000);
  })
  .catch((err) => console.log(err));
//note: listen to requests after the connection to the db is established
//      because the page that will send may list a lot of data depends on db

//mongoose and mongo sandbox routes
app.get("/add-blog", (req, res) => {
  const blog = new Blog(
    //create a new instance using Blog model
    {
      title: "2nd Trial",
      snippet: "avout my 2nd trial",
      body: "lorem lorem lokldfjsljfsdlsjdl;gsdfkl;gfldsajldsgj",
    }
  );
  //save this instance using a method in this model
  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

app.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

app.get("/single-blog", (req, res) => {
  Blog.findById("63e116a1d560251f89e23653")
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

//routes
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
