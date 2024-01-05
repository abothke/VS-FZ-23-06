const cat = document.querySelector('#cat');
let xPos = 0;
let steps = 0;
let richtung = "rechts"
let istAmLaufen = "true"
let timer = 13

const walkingCat = () => {
    if (richtung === "rechts") {
        cat.style.left = `${xPos}%`;
        cat.style.transform = "scaleX(1)"
        xPos = xPos + 2;
        if (xPos >= 80) { 
            richtung = "links";
        }
    } else if (richtung === "links") { 
        cat.style.left = `${xPos}%`;
        cat.style.transform = "scaleX(-1)"
        xPos = xPos - 2;
        if (xPos <= 0) {
            richtung = "rechts";
        }
    }
}

const catWalk = () => {
    timer--
    clearInterval(timer)
    timer = setInterval(walkingCat, 50)
    console.log(timer)
}

const pause = () =>{
    clearInterval(timer)
}

const turn = () =>{
    if (richtung === "links"){
        richtung = "rechts"
    } else{
        richtung = "links"
    }
}

const catSpeed = () =>{
    timer = setInterval(walkingCat, 50)

}