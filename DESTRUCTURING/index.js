// --------------Example 1----------------
// SWAP THE VALUE OF TWO VARIABLES

let a = 10;
let b = 20;
[a, b] = [b, a];

console.log(a);
console.log(b);

// --------------Example 2----------------
// SWAP 2 ELEMENTS OF AN ARRAY

const colors = ["red", "green", "blue", "yellow"];
[colors[0], colors[3]] = [colors[3], colors[0]];
console.log(colors);

// --------------Example 3----------------
// ASSIGN ARRAY ELEMENTS TO VARIABLES

const colors2 = ["red", "green", "blue", "yellow"];
const [firstColor, secondColor, thirdColor, ...extraColors] = colors2;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

// --------------Example 4----------------
// EXTRACT VALUES FROM OBJECTS

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    job: "Fry Cook",
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 40,
}

/*
const {firstName, lastName, age, job} = person1;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);
*/

const {fistName, lastName, age, job = "Unemployed"} = person2;

console.log(fistName);
console.log(lastName);
console.log(age);
console.log(job);


// --------------Example 5----------------
// DESTRUCTURE IN FUNCTION PARAMERES

function displayPerson({firstName, lastName, age, job="Unemployed"}) {
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Age: ${age}`);
    console.log(`Job: ${job}`);
}

const person3 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    job: "Fry Cook",
}

const person4 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 40,
}