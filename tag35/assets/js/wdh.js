// Wiederholung

// Bsp. 1

const numbers = [1, 2, 3, 4, 5]

const doubleNumberMitMap = numbers.map(number => {
return number * 2
})

console.log(doubleNumberMitMap);

const doubleNumberArray = [];
const doubleNumberMitForEAch = numbers.forEach((number) => {
    doubleNumberArray.push(number * 2)
    // return number * 2
})

console.log(doubleNumberMitForEAch);
console.log(doubleNumberArray);

// * Bsp. 2

const words = ["apple", "banana", "orange", "grape"]

const wordsLength = words.map(word => word.length)

console.log(wordsLength);

// * Bsp. 3

const students =[
    {id: 1, name: "Max Mustermann"},
    {id: 2, name: "Maria Musterfrau"},
    {id: 3, name: "John Doe"}
]

const studentsName = students.map ((name) =>{
    return name.name.split(" ")
})

console.log(studentsName);


// * Bsp 4

const products =[
    {id: 1, name: "Laptop", price: 1200},
    {id: 2, name: "Phone", price: 800},
    {id: 3, name: "Tablet", price: 500}
]

const productNames = products.map ((el) =>{
    return `Product: ${el.name} Price: ${el.price}`
})

console.log(productNames);
