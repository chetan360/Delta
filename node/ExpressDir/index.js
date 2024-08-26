const express = require("express");
const app = express();

// console.dir(app);

let port = 3000;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

// app.use((req, res) => {
//   console.log("request received.");
//   res.send({
//     name: "apple",
//     color: "red",
//   });
// });

app.get("/", (req, res) => {
  res.send("Hello! I am root path");
});

app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params;
  res.send(`Hello! I am @${username}, ${12}`);
});

app.get("/search", (req, res) => {
  let { q } = req.query;
  res.send(`Search results for: ${q}`);
});
