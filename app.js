const mongoose = require("mongoose");
const express = require("express");
const db = require("./database/db");
const path = require("path");
const app = express();
const port = 3000;

//middleware
app.use(express.json());

//middleware:linking the router files to make our route easy
app.use(require("./router/auth"));

app.use(require("./router/blogs"));

//middleware
const middleware = (req, res, next) => {
  //it takes 3 arguments,next means after
  console.log(`hello middleware`); //the middleware's work is done,move to next
  next();
};

app.get("/home", function (req, res) {
  res.sendFile(path.join(__dirname + "/client/index.html"));
});

app.get("/about",middleware, (req, res) => {
  res.send("Hello about!");
});

app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/signup.html"));
});


app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/login.html"));
});

app.get("/createblog", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/blog.html"));
});

app.get("/readblog", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/blog.html"));
});

app.get("/updateblog", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/blog.html"));
});

app.get("/deleteblog", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/blog.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

/*
added middleware func here : user cannot directly go to about section without loggin in

we add middleware to make sure before visiting any route and getting it's response,
we can do the work that we want to , like : the we can make sure that user must
login or signup,before accessing any other page.

-first middleware will complete it's work then next tasks will be carried over
-if we didnt call the next() of the middleware,the next tasks wont get executed
*/
