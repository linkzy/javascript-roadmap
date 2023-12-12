//https://linkzy.dev/dom-manipulation-in-javascript/

// DOM Manipulation in JavaScript

// Selecting Elements
const elementById = document.getElementById("myElementId");
const elementsByClass = document.getElementsByClassName("myClassName");
const elementsByTag = document.getElementsByTagName("div");
const elementBySelector = document.querySelector("#myContainer .myClass");
const elementsBySelectorAll = document.querySelectorAll(".myClass");

// Modifying Elements
elementById.textContent = "New Text Content";
elementById.innerHTML = "<strong>New HTML Content</strong>";
elementById.setAttribute("src", "new-image.jpg");
elementById.style.color = "red";
elementById.style.fontSize = "16px";

// Creating and Appending Elements
const newElement = document.createElement("div");
elementById.appendChild(newElement);
elementById.removeChild(newElement);

// Event Handling
elementById.addEventListener("click", () => {
    console.log("Element clicked!");
});

const clickHandler = () => {
    console.log("Element clicked!");
};

elementById.addEventListener("click", clickHandler);
elementById.removeEventListener("click", clickHandler);

// Manipulating Classes
elementById.classList.add("newClass");
elementById.classList.remove("oldClass");
elementById.classList.toggle("active");

// Conclusion
// DOM Manipulation is a fundamental skill in web development, allowing you to create dynamic and interactive web pages.
// By selecting and manipulating elements, you can respond to user interactions, update content, and create a seamless user experience.
