function weather() {
  let value = document.querySelector("#number").value;
  let output = document.querySelector(".output");
  if (value <= 10 && value >= 8) {
    output.innerHTML = "super";
  } else if (value <= 7 && value >= 6) {
    output.innerHTML = "gut";
  } else if (value <= 5 && value >= 3) {
    output.innerHTML = "okay";
  } else if (value <= 2 && value >= 0) {
    output.innerHTML = "schlecht";
  } else {
    output.innerHTML = "Bitte einen Wert zwischen 0 und 10 eingeben!";
  }
}
