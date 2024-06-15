fruits = [
    {
        name: "apple",
        color: "red",
        taste: "sweet",
        calories: 50
    },
    {
        name: "banana",
        color: "yellow",
        taste: "sour",
        calories: 80
    },
    {
        name: "orange",
        color: "orange",
        taste: "sour",
        calories: 60
    }
];
// remove selected objects
fruits.splice(1, 1);

fuits.pop();

console.log(fruits[1].name);

fruits.push({
    name: "mango",
    color: "yellow",    
    taste: "sour"
});

// forEach()
fruits.forEach(fruit => console.log(fruit.calories));

// map()
const fruitNames = fruits.map(fruit => fruit.name);
console.log(fruitNames);

// filter()
const sourFruits = fruits.filter(fruit => fruit.taste === "sour");
console.log(sourFruits);

// reduce()
const totalCalories = fruits.reduce((accumulator, fruit) => accumulator + fruit.calories, 0);
console.log(totalCalories);