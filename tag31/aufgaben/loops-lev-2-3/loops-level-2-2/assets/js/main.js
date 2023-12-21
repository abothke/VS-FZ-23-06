const loopMe = () => {
  let input = document.getElementById("input").value;
  let output = document.getElementById("output");
  let result = "L";
  for (let i = 0; i < input; i++) {
    result += "o";
  }
  result += "p";
  output.innerHTML = result;
};
