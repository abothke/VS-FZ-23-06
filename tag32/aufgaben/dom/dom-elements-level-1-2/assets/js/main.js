const myFunction = () => {
  const elements = document.getElementsByClassName("example");
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].style.background != "black") {
      elements[i].style.background = "black";
      elements[4].style.color = "white";
    } else {
      elements[i].style.background = "";
      elements[4].style.color = "";
    }
  }
};
