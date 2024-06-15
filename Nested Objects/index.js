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
class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}


class Address{
    constructor(street, city, state){
        this.street = street;   
        this.city = city;
        this.state = state;
    }
}

const person1 = new Person("Spongebob Squarepants", 30, "Main Street", "Sandy Springs", "GA");
console.log(person1.address.state);