function under9000(array) {
    console.log("\x1b[31m","Nappa:Vegeta, what does the scouter say about his power level?");
    return array.filter((value) => value.population < 100000); // Filtert die Werte von data.population wenn unter 100k und gibt das neue Array gefiltert aus
}

function over9000(array) {
    console.log("\x1b[36m%s\x1b[0m", "Vegeta: It's over 9000!");
    console.log("\x1b[31m","Nappa:What 9000? There's no way that can be right!");
    return array.filter((value) => value.population > 100000); // Filtert die Werte von data.population wenn über 100k und gibt das neue Array gefiltert aus
}


export { under9000, over9000 };