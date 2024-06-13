// Example 01
class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return 2 * radius;
    }
    static getCircumference(radius){
        return 2 * this.PI * radius;
    }
    static getArea(radius){
        return this.PI * radius * radius;
    }
}

console.log(MathUtil.getArea(5));
console.log(MathUtil.getCircumference(5));
console.log(MathUtil.PI);

// Example 02
class User{

    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }

    sayHello(){
        console.log(`Hello, My username is ${this.username}`);
    }
}

const user1 = new User("John");
const user2 = new User("Jane");
const user3 = new User("Joe");
console.log(user1.username);
console.log(user2.username);
console.log(user3.username);

user1.sayHello();

console.log(User.userCount);