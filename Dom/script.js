// let p = document.createElement("p");
// p.innerText = "Hey I'm red";
// let body = document.querySelector("body");
// p.classList.add("red");
// body.append(p);

// let h3 = document.createElement("h3");
// h3.innerText = "I'm a blue h3!";
// h3.classList.add("blue");
// body.append(h3);

// let div = document.createElement("div");
// div.classList.add("box");
// let h1 = document.createElement("h1");
// h1.innerText = "I'm in a div";
// let p2 = document.createElement("p");
// p2.innerText = "Me TOO!";
// div.append(h1);
// div.append(p2);
// body.append(div);

// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   let h1 = document.querySelector("h1");
//   let randomColor = getRandomColor();
//   h1.innerText = randomColor;

//   let div = document.querySelector("div");
//   div.style.backgroundColor = randomColor;
// });

// function getRandomColor() {
//   let r = Math.floor(Math.random() * 255);
//   let g = Math.floor(Math.random() * 255);
//   let b = Math.floor(Math.random() * 255);

//   let color = `rgb(${r}, ${g}, ${b})`;

//   return color;
// }

// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   let input = this.elements[0]; //form.elements[0]
//   console.log(input.value);
// });

let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  let li = document.createElement("li");
  li.innerText = input.value;
  let delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  delBtn.classList.add("delete");
  li.appendChild(delBtn);
  ul.appendChild(li);
  input.value = "";
});

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let li = event.target.parentElement;
    li.remove();
  }
});
