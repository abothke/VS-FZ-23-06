const changeColor = () => {
    let elements = Array.from(document.getElementsByClassName("card"));
    elements.forEach((element) => {
        element.addEventListener("click", () => {
            element.style.backgroundColor = "gold";
            element.style.backgroundColor = "black";
            element.style.color = "white";
        });
    });
};