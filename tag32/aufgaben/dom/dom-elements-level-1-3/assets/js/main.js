// firstElementChild
// lastElementChild
// firstElementChild nextElementSibling
// lastElementChild previousElementSibling

const liste = document.querySelector("#myList");
const firstElChildListe = liste.firstElementChild.innerHTML;
const lastElChildListe = liste.lastElementChild.innerHTML;
const firstElChildNextSib =
  liste.firstElementChild.nextElementSibling.innerHTML;
const lastElChildPrevSib =
  liste.lastElementChild.previousElementSibling.innerHTML;

const buttonOne = document.querySelector("button:nth-of-type(1)");
const buttonTwo = document.querySelector("button:nth-of-type(2)");
const buttonThree = document.querySelector("button:nth-of-type(3)");
const buttonFour = document.querySelector("button:nth-of-type(4)");
let output = document.querySelector("output");

buttonOne.addEventListener("click", () => {
  output.innerHTML = firstElChildListe;
});

buttonTwo.addEventListener("click", () => {
  output.innerHTML = lastElChildListe;
});

buttonThree.addEventListener("click", () => {
  output.innerHTML = firstElChildNextSib;
});

buttonFour.addEventListener("click", () => {
  output.innerHTML = lastElChildPrevSib;
});
