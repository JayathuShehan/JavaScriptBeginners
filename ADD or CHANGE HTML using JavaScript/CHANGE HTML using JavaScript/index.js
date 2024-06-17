// -------------- EXAMPLE 1 h1>----------------

// STEP 1 CREATE THE ELEMENT
const newH1 = documnet.createElement("h1");

// STEP 2 ADD ATTRIBUTES/PROPERTIES TO THE ELEMENT
newH1.textContent = "Hello World";
newH1.id = "myH1";
newH1.style.color = "blue";
newH1.style.textAlign = "center";

// STEP 3 APPEND ELEMENT TO DOM
document.body.append(newH1); // APPENDS ELEMENT TO THE END OF THE BODY
document.body.prepend(newH1); // APPENDS ELEMENT TO THE BEGINNING OF THE BODY
document.getElementById("box1").append(newH1);

const box2 = document.getElementById("box2");
document.body.insertBefore(newH1, box2); // document.body.insertBefore(New Element, Target Element);

// If elements have no id
const boxes = documne.quarySelectorAll(".box");
documnet.body.insertBefore(newH1, boxes[4]);

// REMOVE HTML ELEMENT
document.body.removeChild(newH1);





// -------------- EXAMPLE 2 ol>li>----------------
const newListItem = document.createElement("li");

newListItem.textContent = "Coconut";
newListItem.id = "coconut";
newListItem.style.color = "orange";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "yellow";

document.getElementById("fruits").append(newListItem);

const orange = document.getElementById("orange");
document.getElementById("fruits").insertBefore(newListItem, orange);

// if list items haven't id
const listItems = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListItem, listItems[2]);