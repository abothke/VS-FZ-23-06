const A = "Susi is going to codingschool";

let exampleOne = A.substring(0, 4);
let exampleTwo = A.substring(5, 8);
let exampleThree = A.substring(A.length - 6);
let exampleFour = A.substring(0, 8) + A.substring(A.length - 6);
document.write(`<p>${exampleOne}</p>`);
document.write(`<p>${exampleTwo}</p>`);
document.write(`<p>${exampleThree}</p>`);
document.write(`<p>${exampleFour}</p>`);
