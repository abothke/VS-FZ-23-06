// ! ===== console.log() =====
console.log("Hello World!");
// mit console.log() können wir uns Texte (strings) ausgeben lassen

// ! ==== Variable ====

// - const - wird für Werte verwendet, die nicht verändert werden sollen
// - let - Werte können nochmal verändert werden
// # var - seit SCMSCRIPT 6 wird var nicht mehr verwendet

// ? CONST

const trainerName = "Farid";
console.log(trainerName);

// ? LET
let score = 8;
console.log(score);

let num1 = 5;
console.log("das ist num1:", num1);

let num2 = 55;
console.log("das ist num2:", num2);

let num3 = 44;
console.log({ num3 });

const num4 = 300;
console.log({ num4 });

// kein let, da wir die Variable schon in Zeile 20 vordefiniert haben.
num1 = 105;
console.log({ num1 });

// lässt sich nicht überschreiben, da num4 eine constant ist
// num4 = 400;
// console.log({num4});

const addScore = num1 + num2;
console.log({ addScore });

console.log("TEST ", num1 + num2);

// ! ==== Datentypen ====

// ? Number - String - Boolean

// ? Boolean
// Boolean hat nur zwei Werte. True oder False.

console.log(true);
console.log(false);

// ! ===== Konvertionen =====

// ! selbsterklärende Namen verwenden
// * nicht zu kurz
// let meineFunktion = "funktion"

// * nicht zu lang
// let lassUnsGemeinsamJavaScriptLernenDennJSIstCool = "NIEN; NICHT SO!"

// * dürfen nicht mit Zahlen anfangen
// let 2Pac = "Nein, nein!"
// statdessen let twoPac = "so ist es besser!"

// * camelCase

// - BestPractise

// * camelCase
let meineErsteVariable;
// Englisch ist besser
let myFirstVariable;

// Underscoure
let my_forst_variable;

// PascalCase
let MyFirstVariable;

// # Was nicht geht:
// # let nein-nein-so-nicht
// # let $bitteSoAuchNicht;
// # let kannichsonichtlesen

// ! Case Sensitive

console.log("===== Case Sensitive =====");
// das sind zwei unterschiedliche Werte
let a = 10;
let A = 100;
console.log({a});
console.log({A});

// ! String Concatination
const firstName = "Wade";
const secondName = "Winston";
const lastName = "Wilson";
let state = "New York";

console.log(
  "Ich bin " +
    firstName +
    " " +
    secondName +
    " " +
    lastName +
    " und lebe in " +
    state
);
console.log(
  `Ich bin ${firstName} ${secondName} ${lastName} und lebe in ${state}`
);

// !  Arithmetische Operatoren
console.log("Arithmetische Operatoren");

let x = 5;
let y = 3;
let z = 15;

// addieren
console.log(x + y);
// subtrahieren
console.log(x - y);
// dividieren
console.log(x / y);
// multiplizieren
console.log(y * z);

// Modulo %= Restwert
console.log(15 % 5);
console.log(5 % 2);
console.log(15 % 4); // 15 : 4 = 12 , rest 3. Ergebnis 3.

// ! Increment
// mit Increment können wir eine Zahl hinzurechnen. Wenn wir eine Zahl weiter zählen möchten, können wir das z.b. mit ++.
 
let zahl1 = 2;
console.log({zahl1});
zahl1++;
zahl1++;
console.log({zahl1});

// ! Decrement
// mit -- wird eine Zahl abgezogen. Wenn wir eine Zahl weiterrechnen wollen, können wir das z.B. mit --.

let zahl2 = 5;
console.log({zahl2});
zahl2--;
zahl2--;
console.log({zahl2});+

// ! ===== Output =====
console.log("===== Output =====");

// - document.write()
// mit der write() Methode können wir Elemente in unserem HTML ausgeben - 
// Obwohl sie in der Webentwicklung häufig verwendet wird, ist sie nicht direkt mit dem Document Object Model (DOM) verbunden. 
// Stattdessen manipuliert sie den Inhalt des Dokuments, das vom Browser gerendert wird.

// so wird ein Text ausgegeben
document.write("Hallo Leute");

// und so mit einem HTML-Tag
document.write("<h2 class='test'>Ich bin eine Headline</h2>");

// - window.alert()
// Es öffnet sich ein Popup mit einer Benachrichtigung
// window.alert(" WARNUNG!!!!! ")

// ! ===== Input =====


// - window.prompt()
// Es öffnet sich ein Popup-Fenster, das den Benutzer zur Eingabe von Informationen auffordert.
// let sayYourName = window.prompt("Wie heißt du?")
// console.log(sayYourName);

// - window.confirm()
// window.confirm("Stimmen Sie den Cookies zu?");
// * Es öffnet sich ein Popup mit einer Bestätigungsanfrage.
// Wenn wir das Ganze in einer Variable speichen, bekommen wir in console.log() was der Nutzer ausgewählt hat.
// let confirm = window.confirm(" Stimmen Sie den Cookies zu?") --> wir bekommen entweder ein true oder ein false Wert zurück.
// console.log(confirm);