// setTimeout(callback, time in ms);
// clearTimeout(id); = can cancel a timeout before it triggers

/*
const sayHello = function() {
    window.alert("Hello");
}

const timeOutID = setTimeout(sayHello, 4000);

clearTimeout(timeOutID);
*/

let timeOutID;
function startTimer() {
    timeOutID = setTimeout(() => {window.alert("Hello");}, 3000);
    console.log("Started");
}

function clearTimer() {
    clearTimeout(timeOutID);
    console.log("Cleared");
}