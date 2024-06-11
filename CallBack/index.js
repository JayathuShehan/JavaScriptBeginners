// Example 1
/*
hello(goodbye);

function hello(callback){
    console.log("Hello");
    callback();
}

function wait(){
    console.log("Wait");
}

function leave(){
    console.log("Leave");
}

function goodbye(){
    console.log("Good Bye");
}
*/

// Example 2
sum(displayPage, 4, 51);

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById("myH1").textContent = result;
}