function checkAge() {
  let age = document.querySelector("#age").value;
  console.log(age);
  let underageCheck = age >= 18 ? "Volljährig" : "Minderjährig";
  console.log(underageCheck);
  document.querySelector("p").innerHTML = underageCheck;
}
