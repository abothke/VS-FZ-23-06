let output = document.getElementById("clickMe");
let anzahl = 0;
clickMe.addEventListener("click", () => {
  anzahl++;
  output.innerHTML = `Click me: ${anzahl}`;
});
