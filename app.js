// ini adalah Backend

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const postingan = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("home", {
    article: postingan
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/compose", (req, res) => {
  res.render("compose");
});

app.post("/compose", (req, res) => {
  const newPost = {
    title: req.body.postTitle,
    content: req.body.postBody,
  }
  postingan.push(newPost);
  console.log(postingan);

  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server berjalan di http://localhost:3000");
});
