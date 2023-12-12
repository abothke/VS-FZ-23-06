// ! neue Themen

// switch

let zahl = 2;
switch (zahl) {
  case 1:
    console.log("Die Zahl ist 1");
    break;
  case 2:
    console.log("Die Zahl ist 2");
    break;
  case 3:
    console.log("Die Zahl ist 3");
    break;
  default:
    console.log("Die Zahl ist nicht 1, 2 oder 3.");
    break;
}

let fruit = "Apfel";

switch (fruit) {
  case "Apfel":
    console.log("Dast ist ein Apfel");
    break;
  case "Birne":
    console.log("Das ist eine Birne");
    break;
  case "Banane":
    console.log("Das ist eine Banane");
    break;
  default:
    console.log("Diese Frucht ist nicht da");
    break;
}

function getDay() {
  let day = document.querySelector("#day").value;
  console.log(day);
  switch (day) {
    case "Montag":
    case "Dienstag":
    case "Mittwoch":
    case "Donnerstag":
    case "Freitag":
      console.log("Es ist Wochentag");
      break;
    case "Samstag":
    case "Sonntag":
      console.log("Es ist Wochenende");
      break;
    default:
      console.log("Das ist kein gültiger Wert");
      break;
  }
}

let num = 100;

console.log(num);
switch (true) {
  case num > 50:
    console.log("Die Zahl ist größer als 50");
    break;
  case num < 50:
    console.log("Die Zahl ist kleiner als 50");
    break;
  default:
    console.log("Die Zahl ist 50");
    break;
}

// # Ternary Operator

let hungry = true;

hungry
    ? console.log("ja, ich hab hunger")
    : console.log("Nein, ich hab keinen Hunger");

    let zahl2 = 4;


let ergebnis =
zahl2 > 5
    ? "Ja, die Zahl ist größer als 5"
    : "Nein, die Zahl ist kleiner als 5"
    console.log(ergebnis);

let durst = false ? console.log("ich habe durst") : console.log("nein danke");


// # String Methoden
// index 01234 Hallo
let text = "Hallo Leute, heute ist ein schöner Tag, heute werden wir string methoden lernen"

// Index startet immer bei 0. H ist also index 0.
// * concat()
// * verbindet zwei Strings
let moretext = " ich bin sogar mehr Text"
console.log(text.concat(" ich bin noch mehr text"));
// Hallo Leute, heute ist ein schöner Tag ich bin noch mehr text
console.log(text.concat(moretext));
// Hallo Leute, heute ist ein schöner Tag ich bin sogar mehr Text

// charAt()
// liefert uns das jeweilige Zeichen zurück, das sich in einer Zeichenkette befindet (index)
console.log(text.charAt(1));
// includes()
console.log(text.includes("hallo"));
console.log(text.includes("Tag"));

// indexOf()
// sucht ab welchem index i das erste Mal vorkommt
console.log(text.indexOf("i"));

// length
// gibt uns die länge des Strings aus

console.log(text.length);

// replace()
// ersetzt ein Teil eines Strings und gibt diesen zurück

console.log(text.replace("Tag", "Abend"));
console.log(text.replace("Hallo", "Guten Morgen"));

// replaceAll()

console.log(text.replaceAll("heute", "abend"));

// slice()
// scjmeode bos om dex 2 aööe uweocjem weg imd gon ims dem rest zurück
console.log(text.slice(6));
console.log(text.slice(2, 39));
// schneide uns index 0 bis 6 aus dem String
console.log(text.slice(0, 6));

// substring()
console.log(text.substring(2));
console.log(text.substring(0, 6));

// substring vs slice
// mit slice kann ich mit minuswerten arbeiten, er fängt von hinten an

console.log(text.slice(-3)); // funktioniert
console.log(text.substring(-3)); // funktioniert nicht


// toLowerCase()