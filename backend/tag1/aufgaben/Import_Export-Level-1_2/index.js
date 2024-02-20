
import { names, numbers } from "./data.js";
import { arrayButFirst, arrayButLast, checkLastChar, firstIndex, firstLetterUppercase, lastIndex, randomOfTwo, removeDuplicateValues, removeMatch, sumOfValues, toUpperCase } from "./function.js";

console.log(names);
console.log(numbers);
console.log("erstes Element",firstIndex(names));
console.log("alle Elemente ausser dem letzten", arrayButLast(names));
console.log("letztes Element", lastIndex(numbers));
console.log("alle Elemente ausser dem ersten", arrayButFirst(numbers));
console.log("entferne Zahl aus dem Array, aus Argument 2(6)", removeMatch(numbers, 6));
console.log("entferne Duplikate", removeDuplicateValues(numbers));
console.log("Summe der Werte des Arrays", sumOfValues(numbers));
console.log("zufällige Zahl zwischen 1-10", randomOfTwo(1, 10));
console.log("erster Buchstabe groß",firstLetterUppercase("hello"));
console.log("komplettes Wort in Großbuchstaben", toUpperCase("hello"));
console.log("Stimmt der letzte Buchstabe aus Arg1 (hello) mit dem Arg2(o) überein?", checkLastChar("hello", "o"));