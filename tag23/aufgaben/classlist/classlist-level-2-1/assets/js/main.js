document.querySelector("#headlineOne").onclick = function () {
    alterHeadline();
  };
  
  document.querySelector("#bList").onclick = function () {
    changeBList();
  };

  document.querySelector("#style").onclick = function () {
    changeHeadline();
  };

  document.querySelector("#reset").onclick = function () {
    resetHeadline();
  };
  
  function alterHeadline() {
    const myHeadline = document.querySelector("#headlineOne");
    myHeadline.classList.add("headline");
  };
  
  function changeBList() {
    const myBList = document.querySelector("#bList");
    myBList.classList.add("bucket-list");
  }
  
  function changeHeadline(){
    const headlineStyle = document.querySelector("#headlineOne");
    headlineStyle.classList.add("changeHeadline")
  }

  function resetHeadline(){
    const headlineStyle = document.querySelector("#headlineOne");
    headlineStyle.classList.remove("changeHeadline")
  }