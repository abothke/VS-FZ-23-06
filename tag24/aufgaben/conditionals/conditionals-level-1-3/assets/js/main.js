function greaterThan(){
    event.preventDefault();
    let output = document.querySelector(".result")
    if (document.getElementById("input").value >= 18){
        output.innerHTML = "Du denkst du darfst Shisha rauchen, nur weil du 18 oder älter bist?!"
    } else {
        output.innerHTML = "Du darfst keine Shisha rauchen"
    }
}

