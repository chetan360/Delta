let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let speed = Math.floor(Math.random() * 10) + 1;

      if (speed < 4) reject();

      h1.style.color = color;
      resolve("color changed.");
    }, delay);
  });
}

async function demo() {
  try {
    await changeColor("red", 1000);
    await changeColor("orange", 1000);
    await changeColor("green", 1000);
    await changeColor("blue", 1000);
  } catch (err) {
    console.log("error: ", err);
  }

  console.log("Code after promise");
}

// changeColor("red", 1000)
//   .then(() => {
//     console.log("red color was completed");
//     return changeColor("orange", 1000);
//   })
//   .then(() => {
//     console.log("orange color was completed.");
//     return changeColor("yellow", 1000);
//   })
//   .then(() => {
//     console.log("yellow color was completed.");
//   })
//   .catch(() => {
//     console.log("promise failed.");
//   });

// // call back hell
// setTimeout(() => {
//   h1.style.color = "red";
// }, 1000);
// setTimeout(() => {
//   h1.style.color = "green";
// }, 2000);
// setTimeout(() => {
//   h1.style.color = "blue";
// }, 3000);
