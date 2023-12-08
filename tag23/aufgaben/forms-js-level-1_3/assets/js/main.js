document.querySelector("button").onclick = function () {
    difference();
  };

  function difference(){
    let valOne = document.querySelector(".valOne").value;
    let valTwo = document.querySelector(".valTwo").value;
    let ageDiff = valOne - valTwo;
    console.log(ageDiff);
    document.querySelector("p").innerHTML = `Die Differenz ist ${ageDiff}`
  }