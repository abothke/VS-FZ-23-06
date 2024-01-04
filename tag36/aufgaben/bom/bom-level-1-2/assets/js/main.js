let counter = 100;
const countDown = () => {
    if (counter > 0) {
        counter--;
        document.querySelector(".zeit").innerHTML = `${counter}%`;
    } else {
        clearInterval(timer);
    }
}

document.getElementById("btn").addEventListener("click", () => {
    timer = setInterval(countDown, 50);
});