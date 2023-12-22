const buttons = document.querySelectorAll("li");
const buttonArray = Array.from(buttons);
const body = document.querySelector("body");
console.log(buttonArray);

buttonArray.forEach((element, index) => {
  element.addEventListener("click", () => {
    if (index === 0) {
      body.style.backgroundColor = "grey";
      console.log("Nummer1");
    } else if (index === 1) {
      body.style.backgroundColor = "white";
      console.log("Nummer2");
    } else if (index === 2) {
      body.style.backgroundColor = "blue";
      console.log("Nummer3");
    } else if (index === 3) {
      body.style.backgroundColor = "yellow";
      console.log("Nummer4");
    }
  });
});
