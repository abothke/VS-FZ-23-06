let studentData = [
    {
        name: "Alex",
        age: 23,
        coop: false,
        address: {
            street: "Don Valley Business Park",
            city: "Toronto",
            postalCode: "ONM3C3E5"
        },
        emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
        name: "Sandra",
        age: 22,
        coop: true,
        address: {
            street: "34 Lawrence Ave",
            city: "Toronto",
            postalCode: "ONM3C0E5"
        },
        emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
];

console.log(studentData);
const studentOutput = (array) => {
array.forEach((arrayData) => {
console.log(arrayData.name)
console.log(arrayData.coop)
console.log(arrayData.emails);
console.log(arrayData.address.city);
}
);
}

studentOutput(studentData)