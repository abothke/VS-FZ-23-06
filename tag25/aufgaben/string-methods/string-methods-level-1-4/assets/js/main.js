const A = "Susi is going to codingschool";

let exampleOne = A.slice(0, 4);
let exampleTwo = A.slice(5, 8);
let exampleThree = A.slice(5, 17) + A.slice(-6);
let exampleFour = A.slice(-6);
let exampleFive = A.slice(0, 8) + A.slice(-6);
document.write(`<p>${exampleOne}</p>`);
document.write(`<p>${exampleTwo}</p>`);
document.write(`<p>${exampleThree}</p>`);
document.write(`<p>${exampleFour}</p>`);
document.write(`<p>${exampleFive}</p>`);
