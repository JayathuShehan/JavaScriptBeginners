// Example 1

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    set width(newWidth) {
        if(newWidth > 0 ){
            this._width = newWidth;
        }
        else{
            console.error("Width must be greater than 0");
        }
    }
    set height(newHeight) {
        if(newHeight > 0 ){
            this._height = newHeight;
        }
        else{
            console.error("Height must be greater than 0");
        }
    }

    get width() {
        return `${this._width}cm`;
    }
    get height() {
        return this._height.toFixed(2);
    }
    
    // Remain this for later
    get area() {
        return this.height * this.width;
    }
}

const rectangle = new Rectangle(10, 5);
console.log(rectangle.height);
console.log(rectangle.width);
rectangle.height = 20;
rectangle.width = 10;
console.log(rectangle.height);
console.log(rectangle.width);

// Example 2

class Person{

    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }
        else{
            console.error("First name must be a string and greater than 0");
        }
    }

    set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }
        else{
            console.error("Last name must be a string and greater than 0");
        }
    }
    set age(newAge){
        if(typeof newAge === "number" && newAge > 0){
            this._age = newAge;
        }
        else{
            console.error("Age must be a number and greater than 0");
        }
    }

    get firstName(){
        return this._firstName;
    }
    get lastName(){
        return this._lastName;
    }
    get age(){
        return this._age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}