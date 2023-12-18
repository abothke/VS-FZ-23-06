// String Number Boolean

const string = "Ich bin ein String"; // String
const number = 245; // Number
const boolean = true; // Boolean

// Array

let team = ["Alex", "John", "Kim", "Jimmy", "Tommy"]; // Array
console.log(team); // Ausgabe des Arrays

let player1 = "Alex";
let player2 = "John";
let player3 = "Kim";
let player4 = "Jimmy";
let player5 = "Tommy";

let teamArr = [player1, player2, player3];
console.log(teamArr);

// index
// so können wir auf die einzelnen Elemente zugreifen, indem wir den Index angeben

console.log(team[0]); // Alex
console.log(team[1]); // John
console.log(team[5]); // Tommy

// indexOf()
// Sucht in einem Array nach einem Element und gibt den Index des Elements zurück

console.log(team.indexOf("Sandra")); // 2
console.log(team.indexOf("Tommy")); // 5

team[0] = "Julia"; // Alex wird zu Julia
team[2] = "Daniel"; // Kim wird zu Daniel

console.log(team);

// Dynamische Arrays
console.log(team.indexOf("Julia")); // 0
team[team.indexOf("Julia")] = "Nina"; // Suche nach Julia & ersetze mit Nina
console.log(team);

const searchUser = () => {
  let user = document.getElementById("user").value;
  let newUser = document.getElementById("newUser").value;

  if (team.indexOf(user) !== -1) {
    team[team.indexOf(user)] = newUser;
  } else {
    console.log("User nicht gefunden");
  }
};

console.log(team);

//  length
// Gibt die Länge eines Arrays zurück
console.log(team.length); // 5

// Gut zu wissen
console.log(team[team.length - 2]); // Jimmy

let mitarbeiter = ["Jimmy", "Johanna", "Christian", "Jannik", "Steffen"];
console.log(mitarbeiter);

// pop()
// Entfernt das letzte Element eines Arrays

console.log("%c pop()", "color: red; font-size: 20px");
let popMitarbeiter = mitarbeiter.pop(); // Steffen
console.log(popMitarbeiter);
console.log(mitarbeiter); // ["Jimmy", "Johanna", "Christian", "Jannik"]

console.log("%c shift()", "color: red; font-size: 20px");
// shift()
// Entfernt das erste Element eines Arrays

let shiftMitarbeiter = mitarbeiter.shift(); // Jimmy
console.log(shiftMitarbeiter);

console.log(mitarbeiter); // ["Johanna", "Christian", "Jannik"]

console.log("%c push()", "color: red; font-size: 20px");

// push()
// Fügt ein Element am Ende des Arrays hinzu und gibt die Länge des Arrays zurück

let pushMitarbeiter = mitarbeiter.push("Lisa"); // ["Johanna", "Christian", "Jannik", "Lisa"]
console.log(pushMitarbeiter); // 4
console.log(mitarbeiter);

// const pushUser = () => {
//   let user = document.getElementById("pushUser").value;
//   mitarbeiter.push(user);
//   console.log(mitarbeiter);
// };

console.log("%c unshift()", "color: red; font-size: 20px");

// unshift()
// Fügt ein Element am Anfang des Arrays hinzu und gibt die Länge des Arrays zurück

let unshiftMitarbeiter = mitarbeiter.unshift("Timo"); // ["Timo", "Johanna", "Christian", "Jannik", "Lisa"]
console.log(unshiftMitarbeiter); // 5
console.log(mitarbeiter); // ["Timo", "Johanna", "Christian", "Jannik", "Lisa"]

console.log("%c join()", "color: red; font-size: 20px");

// join()
// Erstellt einen String aus einem Array

let heroes = ["Batman", "Thor", "Ironman", "Hulk", "Spiderman"];
console.log(heroes);
console.log(heroes.join(" - "));

const ul = document.querySelector("ul");
ul.innerHTML = `<li>${heroes.join("</li><li>")}</li>`;

console.log("%c filter()", "color: red; font-size: 20px");

// filter()
// Filtert ein Array nach einem bestimmten Kriterium

const numbers = [1, 2, 3, 4, 5];

const evenNumber = numbers.filter((num) => num % 2 === 0); // [2, 4] - alle geraden Zahlen
console.log(evenNumber);

const batman = heroes.filter((char) => char === "Batman"); // ["Batman"] - alle Helden die Batman heißen
console.log(batman);

const getSpieler = () => {
  const spieler = document.getElementById("spieler").value;
  const result = heroes.filter((character) => character === spieler).join("");
  if (result) {
    console.log(result);
  } else {
    console.log("Spieler nicht gefunden");
  }
};
