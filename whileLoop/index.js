let username = "";
const myh1 = document.getElementById("myh1");

while (username === "" || username === null) {
    username = window.prompt(`Enter your name`);
}

myh1.textContent = username;

console.log(`Hello ${username}`);