document.querySelector(".superball-1").onclick = function() {clickMe1()};
document.querySelector(".superball-2").onclick = function() {clickMe2()};
document.querySelector(".superball-3").onclick = function() {clickMe3()};
document.querySelector(".superball-4").onclick = function() {clickMe4()};

function clickMe1() {
  document.querySelector("h1").style.color = "#7A0A6A";
  document.querySelector("body").style.background = "#329C5E";
}


function clickMe2() {
  document.querySelector("h1").style.color = "#DEB74C";
  document.querySelector("body").style.background = "#504C7D";
}

function clickMe3() {
    document.querySelector("h1").style.color = "#CF6B0B";
    document.querySelector("body").style.background = "#020025";
  }

  function clickMe4() {
    document.querySelector("h1").style.color = "#43D3FE";
    document.querySelector("body").style.background = "#050353";
  }
