let persons = ["Bruce", "Wayne", "Superreich"];
let friends = ["Farid", "Christian", "Sergio"];
let favoriteFood = ["Pizza", "Burger", "Pasta"];

persons.push("Batman");
persons.push("Robin");

friends.push("Joker");
friends.push("Pinguin");

favoriteFood.push("Lasagne");
favoriteFood.push("Gummibärchen");

console.log(persons);
persons.unshift("Alfred", "Gordon");
console.log(persons);
console.log(friends);
friends.unshift("Catwoman", "Batgirl");
console.log(friends);
console.log(favoriteFood);
favoriteFood.unshift("Brezel", "Chips");
console.log(favoriteFood);
