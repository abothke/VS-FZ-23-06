const text = "Sam is good at codingschool";
let textSchool = text.replace("coding", "");
let exampleOne = textSchool.replace("good", "bad");
let exampleTwo = textSchool.replace("Sam", "Susi");
let exampleThree = textSchool.replace("school", "tennis");
document.write(`<p>${exampleOne}</p>`);
document.write(`<p>${exampleTwo}</p>`);
document.write(`<p>${exampleThree}</p>`);
