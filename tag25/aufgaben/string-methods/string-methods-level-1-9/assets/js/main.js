const text1 = "Sam is going to codingschool";
const text2 = "Susi";
const text3 = "and";
const text4 = "to the movie theater";
samText = text1.replace("coding", "");
theaterText = samText.replace("school", "the movie theater");
gymText = samText.replace("school", "the gym");
exampleOne = `${samText} ${text3} ${text4}`;
exampleTwo = text1.slice(0, 13) + text4;
exampleThree = `${text2} ${text3} ${gymText.replace(
  "is",
  "are"
)} ${text3} ${theaterText.replace("Sam is going", "")}`;
exampleFour = `${samText.replace("Sam", "Susi")} ${text3} ${text4}`;
document.write(exampleOne + "</br>");
document.write(exampleTwo + "</br>");
document.write(exampleThree + "</br>");
document.write(exampleFour + "</br>");
