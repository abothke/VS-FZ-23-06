function age(){
    let output = document.querySelector(".result")
    let age = document.querySelector("#age").value
    let major = true;
    if (age >= 18){
        major = false
        output.innerHTML = "Volljährig"
        console.log(major);
    } else {
        major = true;
        console.log(major);
        output.innerHTML = "Minderjährig"

    }
}

