// element selectors =  Methods used to target and manipulate HTML elements
//                      They allow you to select one or multiple HTML elements
//                      from the DOM (Document Object Model)

// 1. document.getElementById()             Element or Null
// 2. document.getElementByClassName()      HTML Collection
// 3. document.getElementByTagName()        HTML Collection
// 4. document.querySelector()              First Element or Null
// 5. document.querySelectorAll()           Node List


// 1. document.getElementById()             Element or Null
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor =  "yellow";
myHeading.style.textAlign = "center";
console.log(myHeading);


// 2. document.getElementByClassName()      HTML Collection
const fruits = document.getElementsByClassName("fruits");
console.log(fruits);
fruits[0].style.backgroundColor = "red";
/*
for(let fruit of fruits){
    fruit.style.backgroundColor = "red"; 
}
*/
Array.from(fruits).forEach((fruit) => {
    fruit.style.backgroundColor = "red";
})


// 3. document.getElementByTagName()        HTML Collection
const h4Elements = document.getElementsByTagName("h4");
console.log(h4Elements);
h4Elements[0].style.backgroundColor = "green";
h4Elements[1].style.backgroundColor = "yellow";


// 4. document.querySelector()              First Element or Null
const element = document.querySelector(".fruits"); // select first matching element
console.log(element);
element.style.backgroundColor = "blue";

const olElements = document.querySelectorAll("ol");
console.log(olElements);        // Returns null if no element found


// 5. document.querySelectorAll()           Node List
const fruitsQuery = querySelectorAll(".fruits");
fruitsQuery[1].style.backgroundColor = "red";
console.log(fruitsQuery);

fruitsQuery.forEach((fruit) => {
    fruit.style.backgroundColor = "red";
});