const output = document.querySelector(".output");
let defaultVal = 0;
let outputValue = defaultVal;

function superFunk(value) {
  outputValue = outputValue + value;
  output.innerHTML = outputValue;
}

function superFunkZwei() {
  outputValue = outputValue * 2;
  output.innerHTML = outputValue;
}

function reset() {
  outputValue = 0;
  output.innerHTML = outputValue;
}

// # Conditional Statemens

/*
if (hier kommt eine Bedingung rein){
    hier kommt der Code rein, wenn die Bedingung richtig ist
} else if (hier kommt eine weiter Bedingung rein){
    hier kommt Code rein, wenn 
}
}
else {
    wenn die Bedingung nicht zutrifft oder falsch ist 
}
*/

function reichSein() {
  let reich = document.querySelector("#reich").value;
  console.log(reich);
  let entscheidung = document.querySelector("#entscheidung");

  if (reich === "yes") {
    entscheidung.textContent = "Ja, du wirst reich!!!";
  } else {
    entscheidung.textContent = "Nein, du wirst nicht reich!";
  }
}

// function checkAge(){
//     let age = document.querySelector("#ageInput").value;
//     let output = document.querySelector("#message");
//     if (age >= 60){
//         output.innerHTML = "Du bist steinalt!"
//     }else if(age < 18 || age >60){
//         output.innerHTML = "Entweder zu jung oder älter als 60"
//     }else if(age >= 18){
//         output.innerHTML = "Du bist volljährig"
//     }
// }

// ! &&
// ! ==
function checkAge() {
  let age = document.querySelector("#ageInput").value;
  let checked = document.querySelector("#checked").checked;
  let output = document.querySelector("#message");
  if (age >= 30 && age <= 80 && checked) {
    output.innerHTML = "Du bist ALT und hast zugestimmt";
  } else if (age >= 18 && age < 30 && checked) {
    output.innerHTML = "Du bist volljährig und hast zugestimmt";
  } else if (age < 18 || !checked) {
    output.innerHTML = "Entweder zu jung oder keine Zustimmung";
  } else if (!checked) {
    output.innerHTML = "Keine Zustimmung";
  }
}

// ? LOGIN

function checkUserData() {
  const correctUsername = "andre";
  const correctPassword = "12345";
  let loginUsername = document.querySelector("#username").value;
  let loginPassword = document.querySelector("#password").value;
  const outputLogin = document.querySelector(".login-output")
  if (loginUsername === "" && loginPassword === ""){
    outputLogin.innerHTML = "<p class='password-message'>Bitte Benutzername und Passwort eingeben</p>";
  } else if (loginUsername === correctUsername && loginPassword === correctPassword){
    outputLogin.innerHTML = "<p class='password-message'>Login war erfolgreich</p>"
    window.location.replace("./secret.html")
    } else {
        outputLogin.innerHTML = "<p class='error-message'>Das Passwort oder Username war nicht korrekt.</p>"
    }
  }
