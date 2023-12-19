let drinks = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull Energy Drink",
  "Fanta",
];

const myDrinks = (drinks) => {
  drinks.sort();
  drinks.forEach((drink) => {
    console.log(drink);
    document.write(drink + "</br>");
  });
};

myDrinks(drinks);
