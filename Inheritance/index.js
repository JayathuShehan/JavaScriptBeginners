class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}
class Rabbit extends Animal{
    name = "Rabbit";

    run(){
        console.log(`This ${this.name} is running`);
    }
}
class Fox extends Animal{
    name = "Fox";
}

const Rabbit = new Rabbit();
const Fox = new Fox();

Rabbit.alive = false;

console.log(Rabbit.alive);
console.log(Fox);
Fox.sleep();