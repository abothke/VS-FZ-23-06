// slice - Gibt einen Teil eines Arrays zurück.

let fruits = ["Banane", "Orange", "Zitrone", "Apfel", "Mango"];
let obstsalat = fruits.slice(0, 3); // Banane, Orange, Zitrone - 0, 1, 2
console.log(fruits);
console.log(obstsalat);

// sort - Sortiert die Elemente eines Arrays.

let numbers = [4, 2, 5, 1, 3, 22, 55, 44];
numbers.sort();
console.log(numbers);

// splice - Fügt und/oder entfernt Elemente an/aus einem Array.

let myHeroes = ["Deadpool", "Wolverine", "Spiderman", "Ironman"];
myHeroes.splice(2, 0, "Boromir"); // 2 = Position, 0 = Anzahl der zu löschenden Elemente, "Boromir" = Elemente, welches hinzugefügt werden sollen
console.log(myHeroes);

// reverse - Dreht die Reihenfolge der Elemente eines Arrays um.
let numbers2 = [1, 2, 3, 24, 32];
numbers2.reverse();
console.log(numbers2);

