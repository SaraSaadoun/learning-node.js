//NOTE THE NAMING CONVENTION INSIDE THIS FILE

//define a schema using moongos
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//Schema:
//defines the structure that will later store inside a collection
//a thing that a model wrapps around

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//options obj as the 2nd argumnet:
//ex : timestamps:
//          generate automatically timestamps properties
//          on our blog's documents

//model: surrounds schema and provide us with
//      interface to communicate with db collection

const Blog = mongoose.model("Blog", blogSchema);
//arguments: model name, schema
//note this model name is important :
//           will search for the plural of this name
//           and look for a collection inside the db with this name when using it

//so, this automatically looks for blogs

//export it
module.exports = Blog;

//summary (3 steps)
//1-schema defination
//2-Model creation(name(singular of the collection name), schema)
//3-export the model
