const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

app.use(express.static(path.join(__dirname, "/public/js")));
app.use(express.static(path.join(__dirname, "/public/css")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/register", (req, res) => {
  let { user, pass } = req.query;
  console.log(`Hello ${user}!`);
});

app.get("/hello", (req, res) => {
  res.send("Hello");
});

app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  const instaData = require("./data.json");
  let data = instaData[username];
  if (data) {
    res.render("instagram.ejs", { data });
  } else {
    res.render("error", { username });
  }
});

app.get("/rolldice", (req, res) => {
  let dicVal = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice", { dicVal });
});

app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});
