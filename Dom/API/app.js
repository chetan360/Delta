let url1 = "https://catfact.ninja/fact";

let btn1 = document.querySelector("#b1");

btn1.addEventListener("click", async () => {
  await getFact();
});

async function getFact() {
  try {
    let config = {
      headers: {
        Accept: "applicaton/json",
      },
    };
    let res = await axios.get(url1, config);
    let p = document.querySelector("p");
    p.innerText = res.data.fact;
  } catch (e) {
    console.log(e);
  }
}

let url2 = "https://dog.ceo/api/breeds/image/random";

let btn2 = document.querySelector("#b2");

btn2.addEventListener("click", async () => {
  try {
    let link = await getImage();
    let img = document.querySelector("img");
    img.setAttribute("src", link);
  } catch (e) {
    console.log(e);
  }
});

async function getImage() {
  try {
    let res = await axios.get(url2);
    return res.data.message;
  } catch (e) {
    console.log(e);
  }
}

let url3 = "http://universities.hipolabs.com/search?name=";
let btn3 = document.querySelector("#b3");

btn3.addEventListener("click", async () => {
  let country = document.querySelector(".country").value;

  let colArr = await getColleges(country);

  showColleges(colArr);
});

function showColleges(colArr) {
  let ul = document.querySelector(".list");
  ul.innerHTML = "";

  for (col of colArr) {
    let li = document.createElement("li");
    li.innerHTML = `${col.name} <u>${col["state-province"]}</u>`;
    console.log(col);
    ul.appendChild(li);
  }
}

async function getColleges(country) {
  try {
    let res = await axios.get(url3 + country);
    return res.data;
  } catch (e) {
    console.log(e);
    return [];
  }
}
