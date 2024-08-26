const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuidV4 } = require("uuid");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true })); //parse form data

// let getRandomUser = () => {
//   return [
//     faker.string.uuid(),
//     faker.internet.userName(),
//     faker.internet.email(),
//     faker.internet.password(),
//   ];
// };

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "cm_app",
  password: "chetan360",
});

// //inserting new data
// let q = "insert into user (id, username, email, password) values ?";

// let data = [];
// for (let i = 1; i <= 100; i++) {
//   data.push(getRandomUser()); //100 fake users
// }

app.get("/", (req, res) => {
  let q = "select count(*) from  user";
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("home", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});

app.get("/user", (req, res) => {
  let q = "select * from user";
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let data = result;
      res.render("users.ejs", { data });
    });
  } catch (err) {
    res.send("some error occured");
  }
});

app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `select * from user where id='${id}'`;
  console.log(id);
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send("some error occured");
  }
});

app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPass, username: newUsername } = req.body;
  let q = `select * from user where id='${id}'`;
  console.log(id);

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];

      if (formPass != user.password) {
        res.send("Wrong password");
      } else {
        let q2 = `update user set username='${newUsername}' where id='${id}'`;
        connection.query(q2, (err, result2) => {
          if (err) throw err;
          res.redirect("/user");
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.send("some error occured");
  }
});

app.get("/user/add", (req, res) => {
  res.render("add.ejs");
});

app.post("/user", (req, res) => {
  let id = uuidV4();
  let { username, email, password } = req.body;
  let data = [id, username, email, password];

  let q = `insert into user (id, username, email, password) values (?, ?, ?, ?)`;

  try {
    connection.query(q, data, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.redirect("/user");
    });
  } catch (err) {
    console.log(err);
    res.send("some error occured.");
  }
});

app.get("/user/:id/delete", (req, res) => {
  let { id } = req.params;
  let q = `select * from user where id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      res.render("delete.ejs", { id });
    });
  } catch (err) {
    console.log(err);
    res.send("some error occured");
  }

  res.render("delete.ejs", { user });
});

app.delete("/user/:id", (req, res) => {
  let { id } = req.params;
  let { email, password } = req.body;
  let q1 = `select * from user where id='${id}'`;

  try {
    connection.query(q1, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if (email === user.email && password === user.password) {
        let q2 = `delete form user id='${id}'`;
        connection.query(q2, [id], (err, result) => {
          if (err) throw err;
          console.log(result);
          res.redirect("/user");
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.send("some error occured");
  }
});

app.listen(3000, () => {
  console.log(`App is listening on 3000`);
});
