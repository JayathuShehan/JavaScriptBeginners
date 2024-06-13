// arrow functions = a concise way to write function expressions
//                   good for simple functions that you use only
//                   once (parameters) => some code.

const hello1 = () => console.log("Hello");
hello1();

const hello2 = (name, age) => {console.log(`Hello ${name}`)
                        console.log(`You are ${age} old`);}
hello2("Jayathu", 25);

const numbers = [1, 2, 3, 4, 5, 6, 7];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => element % 2 === 0);
const oddNums = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);
 
console.log(total);