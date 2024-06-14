// ---------------Example 1----------------
const person = {
    fullName: "Spongebob Squarepants",
    age: 30,
    hobbies: ["skateboarding", "eating", "sleeping"],
    address: {
        street: "Main Street",
        city: "Sandy Springs",
        state: "GA"
    }
}

console.log(person.fullName);

console.log(person.address.state);

for(const property in person.address){
    console.log(person.address[property]);
}


// ---------------Example 2----------------
