const auswahl = document.querySelector("#auswahl");
const output = document.querySelector("#output");

auswahl.addEventListener("change", () => {
  output.innerHTML = `Sie haben ausgewählt ${auswahl.value}`;
});
