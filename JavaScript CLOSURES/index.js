// ---------------------------------------------- CLOSURES ----------------------------------------------------

// Example 1

function outer() {

    let message = "Hello";

    function inner() {
        console.log(message);
    }

    inner();
}

// message = "Goodbye"; we cannot access variables in the functions outside the function

outer();


// Example 2

function createCounter() {

    let count = 0;

    function increment() {
        count++;
        console.log(`Count increased to ${count}`);
    }

    function getCount() {
        return count;
    }

    return {increment, getCount};
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();

console.log(counter.getCount());


// Example 3

let score = 0;

function createGame(){

    let score = 0;

    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`);
    }

    function decreaseScore(points){
        score -= points;
        console.log(`-${points}pts`);
    }

    function getScore(){
        return score;
    }

    return {increaseScore, decreaseScore, getScore};
}

const game = createGame();

game.increaseScore(10);
game.decreaseScore(5);
console.log(game.getScore());