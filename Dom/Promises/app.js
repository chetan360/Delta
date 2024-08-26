// function savetoDB(data, sucess, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;

//   if (internetSpeed > 4) {
//     sucess();
//   } else {
//     failure();
//   }
// }

// savetoDB(
//   "cm 360",
//   () => {
//     console.log("success1: dada saved.");
//     savetoDB(
//       "hello world",
//       () => {
//         console.log("success2: dada saved.");
//         savetoDB(
//           "chetan",
//           () => {
//             console.log("success3: dada saved.");
//           },
//           () => {
//             console.log("failure3: connection faild.");
//           }
//         );
//       },
//       () => {
//         console.log("failure2: connection faild.");
//       }
//     );
//   },
//   () => {
//     console.log("failure1: connection faild.");
//   }
// );

function savetoDB(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("sucess: data was saved.");
    } else {
      reject("failure: weak connection.");
    }
  });
}

savetoDB("cm 360")
  .then((result) => {
    console.log("data saved.");
    console.log("result of promise: ", result);
    return savetoDB("hello world");
  })
  .then((result) => {
    console.log("data2 saved.");
    console.log("result of promise: ", result);
    return savetoDB("chetan");
  })
  .then((result) => {
    console.log("data3 saved.");
    console.log("result of promise: ", result);
  })
  .catch((error) => {
    console.log("promise was rejected.");
    console.error("error of promise: ", error);
  });
