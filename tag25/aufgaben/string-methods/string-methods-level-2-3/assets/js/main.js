function highlightText() {
  let hWord = document.querySelector("#search-input").value;
  let aText = document.querySelector("article").innerHTML;
  aText = aText.replaceAll("<span>", "");
  aText = aText.replaceAll("</span>", "");
  highlight = aText.replaceAll(hWord, `<span>${hWord}</span>`);
  document.querySelector("article").innerHTML = highlight;
}
