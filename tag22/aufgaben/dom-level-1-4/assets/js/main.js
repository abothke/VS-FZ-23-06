document.getElementById("info").innerHTML =
  "<h1>Hello World</h1> <h2>How are you?</h2>";

document.getElementById("container").innerHTML = "<p>start of the element</p>";

document.querySelector("#time").innerHTML = Date();

document.write("<p>end of the element</p>");

document.querySelector("#bButton").onclick = function () {
    alterText(document.querySelector("#inputText").value);
  };
  
  function alterText(contentText) {
    document.querySelector("span").innerHTML = `<p>${contentText}</p>`;
    document.querySelector("#test").innerHTML = "<h1>Hello h1</h1>";
  }