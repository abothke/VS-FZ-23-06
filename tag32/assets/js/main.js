// * Event & Event listener

// Aufbau
// 1. Element auswählen
const myButton = document.querySelector("#say-hi-btn");
const output = document.querySelector("#say-hi");
// 2. Eventlistener hinzufügen
myButton.addEventListener("click", () => {
  output.innerHTML = "Hi";
});

// Mouseover
const textInput = document.querySelector("#text-input");
textInput.addEventListener("mouseover", () => {
  console.log("Die Maus wurde über mich bewegt");
  textInput.style.border = "3px solid red";
});

// Mouseout
textInput.addEventListener("mouseout", () => {
  console.log("Die Maus wurde von mir weg bewegt");
  textInput.style.border = "3px solid black";
});

// change

const selectInput = document.querySelector("#select-input");
const selectOutput = document.querySelector("#select-output");
selectInput.addEventListener("change", () => {
  console.log("Ich wurde geändert");
  selectOutput.innerHTML = selectInput.value;
  selectOutput.style.color = "red";
});

// keypress

const username = document
  .querySelector("#username")
  .addEventListener("keypress", () => {
    const user = document.querySelector("#user");
    user.style.backgroundColor = "red";
    user.style.color = "blue";
  });

// keyup
const hacker = document.querySelector("#hacker");
const log = document.querySelector("#log");
hacker.addEventListener("keyup", logKey);

function logKey(event) {
  console.log(event.code);
}

// External Eventlistener
// wir können die Function auch auslagern, damit wir das ganze genereller gestalten können

const liste = document.querySelector("#myList");
console.log(liste);

const firstChildVonMeinerListe = liste.firstElementChild.innerHTML;

console.log(firstChildVonMeinerListe);

const lastChildVonMeinerListe = (liste.lastElementChild.style.color = "red");
console.log(lastChildVonMeinerListe);

const geschwisterElementVonMeinerListe =
  liste.firstElementChild.nextElementSibling.innerHTML;
console.log(geschwisterElementVonMeinerListe);

// HTMLCollection

const liEelementeToArray = liste.children;
console.log(liEelementeToArray);

const liElementeToArrayUmwandeln = Array.from(liEelementeToArray);
console.log(liElementeToArrayUmwandeln);

// liElementeToArrayUmwandeln.forEach((singleElement) => {
//   singleElement.style.color = "purple";
// });

liElementeToArrayUmwandeln.forEach((singleElement) => {
  singleElement.style.color = "purple";
});

liElementeToArrayUmwandeln[0].innerHTML = "Salat";
liElementeToArrayUmwandeln[0].style.color = "green";

const firstKind = liElementeToArrayUmwandeln[0];
console.log(firstKind);

const zugriffAufDasElternElement = liste.parentElement;
console.log(zugriffAufDasElternElement);

zugriffAufDasElternElement.style.border = "1px solid black";

// childElementCount - Anzahl der Kinder length - Anzahl der Kinder
console.log(liste.childElementCount);
console.log(liste.children.length);

const firstAuto = document.createElement("li");
firstAuto.textContent = "Benz";
console.log(firstAuto);
const secondAuto = document.createElement("li");
secondAuto.textContent = "BMW";
const thirdAuto = document.createElement("li");
thirdAuto.textContent = "Audi";

const fliessband = document.querySelector("#fliessband");
// prepend() ist wie unshift() bei Arrays
// append() ist wie push() bei Arrays
fliessband.appendChild(firstAuto);
fliessband.appendChild(secondAuto);
fliessband.prepend(thirdAuto);

let imageVomDom = document.createElement("img");
imageVomDom.setAttribute("src", "https://picsum.photos/200");
imageVomDom.setAttribute("alt", "random image");

document.body.prepend(imageVomDom);

let imageVomDom2 = document.createElement("img");
imageVomDom2.setAttribute("src", "https://picsum.photos/200");
fliessband.appendChild(imageVomDom2);

if (liElementeToArrayUmwandeln[0].style.color === "green") {
  liElementeToArrayUmwandeln[0].textContent = "Zwiebeln";
}