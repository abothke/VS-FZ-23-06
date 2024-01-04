let counter = 10;
const countDown = () => {
    if (counter > 0) {
        counter--;
        document.querySelector("#count").innerHTML = `${counter}`;
    } else {
        clearInterval(timer);
        document.querySelector(".message").style = "opacity: 0";
    }
}

    timer = setInterval(countDown, 100);