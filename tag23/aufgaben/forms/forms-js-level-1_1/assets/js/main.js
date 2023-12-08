document.querySelector("button").onclick = function () {
  doubleVal();
};

function doubleVal() {
  let inputNumber = document.querySelector("input").value;
  inputNumber = inputNumber * 2
  document.querySelector("p").innerHTML += `${inputNumber}`;
}
