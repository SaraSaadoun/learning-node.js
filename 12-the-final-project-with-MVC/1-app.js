const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");

//express app
const app = express();

//register view engine
app.set("view engine", "ejs");

//make any file in public folder is a static file for the front end
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
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

//routes
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

//blog routes
app.use("/blogs", blogRoutes); //apply all of the handlers in it to the app
//404 page
//should be at the bottom because it sends a response, so the code after it will never be executed
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
