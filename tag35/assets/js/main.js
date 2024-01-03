// * Dates Object

const date = new Date();

console.log(date);
console.log(typeof date);

const date2 = new Date (2000, 1, 27)
console.log(date2);

// ! ACHTUNG entweder 2 bzw. 3 Parameter oder gar keine
console.log(new Date (2000)); // 1970 1 1 00:00:00 Uhr der 1.1.1970 ist der Startpunkt für die Zeitrechnung in der Programmierung

console.log(Date.now()); // Milisekunden seit 1.1.1970 bis jetzt
 
console.clear


// * toLocale-Methoden

console.log(date.toLocaleString("de", {dateStyle: "full"}));
console.log(date.toLocaleString("de", {dateStyle: "long"}));
console.log(date.toLocaleString("de", {dateStyle: "medium"}));
console.log(date.toLocaleString("de", {dateStyle: "short"}));

console.log(date.toLocaleDateString());

// * mit get-Methoden auf Informationen zugreifen

console.log("getDate()", date.getDate());
console.log("getFullYear()", date.getFullYear());
console.log("getMonth()", date.getMonth());
console.log("getTime()", date.getTime());
console.log("getHours()", date.getHours());
console.log("getMiliseconds()", date.getMilliseconds());

// ! Set-Methoden

const date3 = new Date();
console.log(date3);

// date3.setFullYear(2008);
// console.log(date3);

date3.setMonth(10);
console.log(date3);

date3.setDate(10);
console.log(date3);

const div = document.createElement("div");
document.body.appendChild(div);
div.innerHTML = date3