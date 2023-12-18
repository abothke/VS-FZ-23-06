// Number ()

const string1 = "10";
console.log(string1);
console.log(Number(string1));
console.log("magda");

// boolean to Number => Nice to know

console.log(Number(true));
console.log(Number(false));

// to fixed
const number1 = 10.345678;

console.log(number1.toFixed(2));
console.log(number1.toFixed(3));
console.log(number1.toFixed(5));

// toString()
// Datentyp ist number
const number2 = 20;
console.log(number2);
console.log(number2.toString());
console.log(String(number2));

// Math Object Methoden

// Math.round()
console.log(Math.round(54.54738));

// Math.ceil()
console.log(Math.ceil(54.54738));
// rundet immer auf

// Math.floor()
// rundet immer ab
console.log(Math.floor(54.54738));

// Math.random
// gibt eine zufällige Zahl zwischen 0 und 1 aus

console.log(Math.random());

console.log(Math.ceil(Math.random() * 10));
console.log(Math.floor(Math.random() * 9 + 3));

// Math.abs()
// gibt den absoluten Wert aus

console.log(Math.abs(-10)); // 10

// Funktion mi Math.random() um eine Zahl eines "Würfels" mit 6 Seiten, wovon die Zahlen 1-5 sind und die 5 zwei mal vorhanden ist
// 1, 2, 3, 4, 5, 5

function wuerfel() {
    var zahl = Math.floor(Math.random() * 6) + 1;
    if (zahl === 6) {
        zahl = 5;
    }
    return zahl;
}

