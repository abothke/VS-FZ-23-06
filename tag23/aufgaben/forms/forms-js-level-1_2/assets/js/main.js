document.querySelector("button").onclick = function () {
    bdayCalc();
  };

  function bdayCalc(){
    let birthYear = document.querySelector("input").value;
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear; 
    document.querySelector(".age").innerHTML = age
  }