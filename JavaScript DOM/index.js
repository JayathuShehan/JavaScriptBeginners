// DOM =    DOCUMENT OBJECT MODEL
//          Object{} that represent the page you see in the web browser
//          and provides you with an API to internet with it.
//          Web browser constructs the DOM when it loads an HTML document,
//          and structures all the elements in a tree-like representation.
//          JavaScript can access the DOM to dynamically
//          change the content, structure, and style of a web page.


const username = "";
const welcomeMsg = document.getElementById("welcomeMsg");

welcomeMsg.textContent += username === "" ? `Guest` : username;

console.dir(document);
//console.log(document);

document.title = "My Website";
console.log(document.title);

document.body.style.backgroundColor = "lightblue";
console.log(document.body);