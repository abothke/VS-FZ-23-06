function checkPass() {
  let passLength = document.querySelector("#password").value.length;
  let pwSecure =
    passLength > 8
      ? "Das Passwort ist sicher."
      : "Das Passwort muss mindestens 8 Zeichen lang sein.";
  document.querySelector("h2").innerHTML = `<h2>${pwSecure}</h2>`;
}
