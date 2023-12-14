const hero = (heroName, heroPower, heroEnemy) => {
  let name = `Mein Lieblingsheld ist: ${heroName}`;
  let power = `Er/Sie hat die Fähigkeit: ${heroPower}`;
  let enemy = `Sein/Ihr größter Gegner ist: ${heroEnemy}`;
  console.log(name, power, enemy);
};

hero(
  "Iron Man",
  "Seine Rüstung ist mit modernster Technik ausgestattet wie zum Beispiel Laserstrahlen",
  "Mandarin"
);
