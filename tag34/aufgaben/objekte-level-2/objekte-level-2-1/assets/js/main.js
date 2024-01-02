let edelMetallPreise = [
  { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
  { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
  { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
  { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
  { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
  { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
  { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
  { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
  { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" },
];
let newNames = [];
let newPrices = [];
let newChanges = [];

console.log(edelMetallPreise);
edelMetallPreise.forEach((name) => newNames.push(name.name));
console.log(newNames);
const newNamesMap = edelMetallPreise.map((element) => {
  return element.name;
});
console.log(newNamesMap);
edelMetallPreise.forEach((name) => newPrices.push(name.preiseGramEuro));
console.log(newPrices);
const newPricesMap = edelMetallPreise.map((element) => {
  return element.preiseGramEuro;
});
console.log(newPricesMap);

edelMetallPreise.forEach((name) => newChanges.push(name.veraenderung));
console.log(newChanges);
const newChangesMap = edelMetallPreise.map((element) => {
  return element.veraenderung;
});
console.log(newChangesMap);

const pricesOverFifty = newPrices.filter((price) => price > 50);

document.write("<style> table,th, td { border: 1px solid black; text-align: center;} </style>");
document.write("<table>");
document.write("<tr>");
document.write("<th>Name</th>");
document.write("<th>Preis/g in EUR</th>");
document.write("<th>Veränderung</th>");
document.write("</tr>");
document.write("<tr>");
for (let i = 0; i < newNames.length; i++) {
  document.write("<td>" + newNames[i] + "</td>");
  document.write("<td>" + newPrices[i] + "</td>");
  document.write("<td>" + newChanges[i] + "</td>");
  document.write("</tr>");
}
document.write("</table>");