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

// map - Erstellt ein neues Array aus den Ergebnissen einer Funktion, die auf jedes Element des Arrays angewendet wird.

let myNumArray = [1, 2, 3, 4, 5];

let multi = myNumArray.map((num) => num * num);
console.log(multi);

// foreach - Führt eine Funktion für jedes Element eines Arrays aus.

let tiere = ["Hund", "Katze", "Maus", "Pferd", "Kuh"];
tiere.forEach((tier) => {
  console.log(tier);
});

// Beim ersten Durchlauf ist tier = "Hund" und index = 0
// Beim zweiten Durchlauf ist tier = "Katze" und index = 1
// Beim dritten Durchlauf ist tier = "Maus" und index = 2
// Beim vierten Durchlauf ist tier = "Pferd" und index = 3
// Beim fünften Durchlauf ist tier = "Kuh" und index = 4

let num = [1, 2, 3, 4, 5];

num.forEach((element, index, array) => {
  console.log("index: " + index);
  console.log("array: " + array);
  console.log("element: " + element);
});

// map & foreach

let num2 = [1, 2, 3, 4, 5];

const mapForEach = (num2) => {
  let double = num2.map((num) => num * 2);
  double.forEach((doubleNum) => {
    console.log("verdoppelte Zahl: " + doubleNum);
  });
};

mapForEach(num2);
