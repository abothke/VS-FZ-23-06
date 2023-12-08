function getInputValue() {
  const output = document.querySelector(".output");
  let name = document.querySelector(".name").value;
  let age = document.querySelector(".num").value;
  let range = document.querySelector(".range").value;
  let checkbox = document.querySelector(".checkbox").checked;
  let date = document.querySelector(".bday").value;
  console.log(name, age, range, checkbox, date);

  output.innerHTML +=
    name + " " + age + " " + range + " " + checkbox + " " + date;
}

function getDark() {
  console.log("dark mode ist da");
  const myBody = document.querySelector("body");
  myBody.classList.toggle("dark");
}

function addClass() {
  const headline = document.querySelector(".myAdd");
  headline.classList.add("big");
}

// function removeClass(){
//     const headline =
// }


// Wiederholung

function getInputValue(){
    let name = document.querySelector(".textId").value;
    let age = document.querySelector(".num").value;
    let range = document.querySelector(".range").value;
    let checkbox = document.querySelector(".checkbox").checked;
    let bday = document.querySelector(".bday").value;
    console.log(name, age, range, checkbox, bday);
}