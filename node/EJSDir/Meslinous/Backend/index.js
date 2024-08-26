const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/register", (req, res) => {
  console.log(req.body); // Should correctly log the JSON body
  let { user, pass } = req.body;
  res.send(`Hello ${user}!`);
});

app.get("/register", (req, res) => {
  let { user, pass } = req.query;
  res.send(`Hello ${user}`);
});

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
