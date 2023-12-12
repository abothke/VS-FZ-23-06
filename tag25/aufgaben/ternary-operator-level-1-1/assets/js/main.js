function checkAge() {
  let age = document.querySelector("#age").value;
  let underageCheck = age >= 18 
  ? "Volljährig" 
  : "Minderjährig";
  document.querySelector("p").innerHTML = underageCheck;
}
