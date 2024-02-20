const firstIndex = (array) => {
    return array[0]; // Erster Index des Arrays
}

const arrayButLast = (array) => {
    return array.slice(0, array.length - 1); // Slice von 0 bis zum vorletzten Index, also wird der letzte Index nicht mitgenommen
}

const lastIndex = (array) => {
    return array[array.length - 1]; // Länge des Arrays - 1 ergibt den Index des letzten Elements
}

const arrayButFirst = (array) => {
    return array.slice(1); // Slice vom 1. Index bis zum letzten Index, also wird der erste Index nicht mitgenommen
}

const removeMatch = (array, value) => {
    return array.filter((element) => element !== value); // Filtert alle Elemente, die nicht dem übergebenen Wert (value) entsprechen
}

const removeDuplicateValues = (array) => {
    return array.filter((value, index) => array.indexOf(value) === index); // Filtert alle Elemente, die nicht an der gleichen Stelle im Array vorkommen
}

const sumOfValues = (array) => {
    let sum = 0; // Initialisiert die Summe mit 0
    array.forEach((value) => sum = sum + value); // Addiert alle Werte des Arrays zusammen
    return sum // Gibt die Summe zurück
}

const randomOfTwo = (a, b) => {
    return Math.ceil(Math.random() * b); // Gibt eine zufällige Zahl zwischen a und b zurück
}

const firstLetterUppercase = (string) => {
    return string.charAt(0).toUpperCase(); // Gibt den String mit einem Großbuchstaben am Anfang zurück
}

const toUpperCase = (string) => {
    return string.toUpperCase(); // Gibt den String komplett in Großbuchstaben zurück
}

const checkLastChar = (string, char) => {
    return string[string.length - 1] === char; // Überprüft, ob das letzte Zeichen des Strings dem übergebenen Zeichen entspricht
}

export { firstIndex, arrayButLast, lastIndex, arrayButFirst, removeMatch, removeDuplicateValues, sumOfValues, randomOfTwo, firstLetterUppercase, toUpperCase, checkLastChar };