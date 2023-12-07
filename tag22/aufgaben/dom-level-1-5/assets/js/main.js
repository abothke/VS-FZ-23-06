document.write("<button>Zeige mir die URL!</button>");
document.write("<main></main>");

document.querySelector("button").onclick = function () {
  showURL();
};

function showURL() {
  document.querySelector("main").innerHTML = `<p>${window.location.href}</p>`;
}
