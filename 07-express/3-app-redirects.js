const express = require("express");
const app = express();

app.listen(3000);

//note if any of the get methods match the url requested
//then the rest of the code is not carried out (executed)

//route1
app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});

//route2
app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});

//redirects
app.get("/about-us", (req, res) => {
  res.redirect("/about"); //send it to the browser and forces for a new req
});

//404 page
//use -> doesn't know the status code
//    ->- create middleware function and fire it (meaning later)
app.use((req, res) => {
  //u should specify the status code manually
  res.status(404).sendFile("./views/404.html", { root: `${__dirname}/..` });
  //chaining because res.status(404) returns res
});
//"use callback func" -> will fire for every single request comming in
//                       it is not scoped out to a particular url
//                       but only if reached to this line in the code (->use)

//                       like default in switch (enter it if all of the above cases doesn't match)
//                       regardless the url

//                       or like a catch

//so, it must be at the bottom
