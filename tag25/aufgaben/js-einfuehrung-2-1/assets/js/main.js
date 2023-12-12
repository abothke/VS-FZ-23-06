function sendText() {
  let textInput = document.querySelector("#textInput").value;
  let alertMsg = "Gib bitte eine Nachricht ein!";
  let emptyCheck = textInput.length;
  if (emptyCheck == 0) {
    document.querySelector("span").innerText = alertMsg;
    document.querySelector("p").innerHTML = "";
  } else {
    document.querySelector("span").innerText = "";
  }
  if (textInput == "") {
  } else {
    document.querySelector("p").innerHTML = textInput;
  }
}
