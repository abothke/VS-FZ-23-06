console.log("Start: Warten für 3 Sekunden...");
const textDelay = () =>{
    console.log("Erledigt. Du hast 3 Sekunden verschwendet");
}

setTimeout(textDelay, 3000)

let counter = 11;

const countDown = () => {
    if (counter > 1) {
        counter--;
        console.log(counter);
    } else {
        console.log("Endlich Feierabend");
        clearInterval(timer);
    }
}

let timer = setInterval(countDown, 1000);