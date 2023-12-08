document.querySelector("#headlineOne").onclick = function () {
  changeHeadline();
};

document.querySelector("#bList").onclick = function () {
  changeBList();
};

function changeHeadline() {
  const myHeadline = document.querySelector("#headlineOne");
  myHeadline.classList.add("headline");
}

function changeBList() {
  const myBList = document.querySelector("#bList");
  myBList.classList.add("bucket-list");
}
