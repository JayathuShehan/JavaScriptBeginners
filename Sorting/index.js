let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];
numbers.sort();
console.log(numbers);

numbers.sort((a, b) => a - b);
console.log(numbers);

const people = [{name: "Alice", age: 25, gpa: 3.5},
                {name: "Bob", age: 30, gpa: 3.2},
                {name: "Charlie", age: 35, gpa: 3.8}];
people.sort((a, b) => a.gpa - b.gpa);
console.log(people)

people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people)