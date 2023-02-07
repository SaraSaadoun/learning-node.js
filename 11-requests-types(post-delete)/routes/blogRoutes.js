const express = require("express");
const Blog = require("../models/blog");

const router = express.Router(); //like mini app

router.get("/", (req, res) => {
  Blog.find()
    .sort({ createAt: -1 })
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => console.log(err));
});

router.post("/", (req, res) => {
  // console.log(req.body);
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => console.log(err));
});

//make sure "/blogs/create" before "/blogs/:id" because :id can match anything including string
router.get("/create", (req, res) => {
  res.render("create", { title: "Create a new Blog" });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) =>
      res.render("details", { title: "Blog Details", blog: result })
    )
    .catch((err) => console.log(err));
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then((result) => {
      //we can't redirect here because we send ajax req(async js) - doing it from js not from webform
      //so, we send json data and it will have rredirect property(url)
      res.json({ redirect: "/blogs" }); // send json back
    })
    .catch((err) => console.log(err));
});
module.exports = router;
