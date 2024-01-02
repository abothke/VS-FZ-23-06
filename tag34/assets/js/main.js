const user = {
  name: "Jim",
  alter: 60,
  beruf: "Verkäufer",
  hobbies: ["zocken", "lesen", "sport machen"],
  adresse: {
    stadt: "Hamburg",
    straße: "Mustermann",
    plz: "2000",
  },
  auto: false,
};

console.log(user.alter);
console.log(user.beruf);
console.log(user.adresse.stadt);
console.log(user.hobbies[1]);
console.log(user["hobbies"]);

user.alter = 40;
user.name = "Florian";
console.log(user);
console.log(user.alter);

user.hobbies.forEach((hobby) => console.log(hobby));

delete user.auto;

user.auto = "Tesla";
user.verheiratet = false;

console.log({ user });

const admin = {};

admin.name = "Bwalya";
admin.job = "Microsoft";
admin.age = "30";

console.log(admin);

// Methoden in Objekten

const calculator = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  multi: (a, b) => a * b,
};

console.log(calculator.add(2, 5));
console.log(calculator.sub(2, 5));
console.log(calculator.multi(2, 5));

const spieler = {
  name: "Iron Man",
  class: "Hero",
  level: 100,
  spell: ["heilen", "fliegen", "laser"],
  login: () => {
    console.log(spieler.name + " ist eingeloggt");
  },
  castSpell: function () {
    console.log("Casting spell " + this.spell[0]);
  },
  logOut() {
    console.log(this.name + " ist ausgeloggt");
  },
};

console.log(spieler);
spieler.login();
spieler.castSpell();
spieler.logOut();

// Objekt Methoden => Object.keys()

const keysVomSpielerObject = Object.keys(spieler);

console.log(keysVomSpielerObject);

keysVomSpielerObject.forEach((key) => {
  console.log("key", key);
  const myValue = spieler[key];
  console.log("myValue", myValue);
});

// Object.entries()

const entriesObjectDieKeysUndValuesAlsArray = Object.entries(spieler);

console.log(entriesObjectDieKeysUndValuesAlsArray);

for (let akey in spieler) {
  console.log(akey);
}

const grades = {
  math: 4,
  sport: 1,
  informatik: 2,
  chemie: 1,
};

let summe = 0;

for (let fach in grades) {
  summe += grades[fach];
}

console.log(summe);
console.log(grades.length);

const gradesLength = Object.values(grades).length;

console.log(gradesLength);

const durchschnitt = summe / gradesLength;

console.log(durchschnitt);

// Spread Operator

const user2 = {
  name: "Hannah",
  age: 30,
};

console.log(user2);

const updatedUser = { ...user2, age: 33, email: "hannah@gmail.com" };
console.log(updatedUser);


const user1 ={
    name: "Alice",
    age: 30
}

const mehrInfoUser1 = {
    adresse: {
        street: "123 MainSt",
        city: "Wonderland"
    }
}

console.log(user1);
console.log(mehrInfoUser1);

const user1MitMehrInfo = {...user1, ...mehrInfoUser1}
console.log(user1MitMehrInfo);

const arrayUser1MitMehrInfo = Object.entries(user1MitMehrInfo)
console.log(arrayUser1MitMehrInfo);