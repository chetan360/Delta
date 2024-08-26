const mongoose = require("mongoose");
main()
  .then((res) => {
    console.log("connection sucessfull.");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

// const user2 = new User({ name: "sm", email: "sm@gmail.com", age: 25 });

// user2
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.insertMany([
//   { name: "Tony", email: "tony@gmail.com", age: 50 },
//   { name: "Peter", email: "peter@gmail.com", age: 30 },
//   { name: "Bruce", email: "bruce@gmail.com", age: 47 },
// ]).then((data) => {
//   console.log(data);
// });

// User.find({})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findOne({ age: { $gte: 47 } })
//   .then((res) => {
//     console.log(res.name);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.updateOne({ name: "Bruce" }, { age: 51 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.updateMany({ age: { $gt: 48 } }, { age: 45 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findOneAndUpdate({ name: "Bruce" }, { age: 35 }, { new: true }).then(
//   (data) => {
//     console.log(data);
//   }
// );

// User.findByIdAndUpdate(
//   "66cb26d1b8a4ee4931107761",
//   { age: 45 },
//   { new: true }
// ).then((data) => {
//   console.log(data);
// });

// User.deleteOne({ name: "cm" }).then((res) => {
//   console.log(res);
// });

// User.deleteMany({ age: 45 }).then((res) => {
//   console.log(res);
// });

const bookSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
  },
});

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
  name: "Math",
  author: "R D Sharma",
  price: 1200,
});

book1
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
