const zahlen = [12, 25, 7, 18, 30, 5];
const kleinerAlsZwanzig = zahlen.filter((zahl) => zahl < 20); // Filtert alle Zahlen aus dem Array, die kleiner als 20 sind
const timesTwo = (num) => num * 2; // Funktion, die eine Zahl mit 2 multipliziert
const arrayTimesTwo = kleinerAlsZwanzig.map(timesTwo); // Multipliziert alle Zahlen aus dem Array kleinerAlsZwanzig mit 2 und speichert das Ergebnis in einem neuen Array
console.log(kleinerAlsZwanzig); // [12, 7, 18, 5]
console.log(arrayTimesTwo); // [24, 14, 36, 10]
