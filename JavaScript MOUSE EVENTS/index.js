// eventListener =  Listen for specific events to create
//                  interactive web pages events: click mouseover,
//                  mouseout, .addEventListener(event, callbac/ anonymouse function / arrow function);

const myBox = document.getElementById("myBox");
const myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", event => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH! 😒";
});

myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "HOVERED! 😎";
});

myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "CLICK ME 😊";
});