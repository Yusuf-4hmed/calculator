// ALL BUTTONS AND THE SCREEN FROM HTML
const screenText = document.getElementById("screen-text");

const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const clear = document.getElementById("clear");
const zero = document.getElementById("0");
const point = document.getElementById("point");

const divide = document.getElementById("/");
const multiply = document.getElementById("*");
const subtract = document.getElementById("-");
const add = document.getElementById("+");

const equals = document.getElementById("=");



// screenArray is the array of all numbers inputted by the user
const screenArray = [];
//clears the screenArray when CE button is pressed
clear.addEventListener("click", () => {
    screenArray.length = 0;
    screenText.innerHTML = screenArray.join(" ");
});



//i know there is probably a quicker way to this however 
//i was building this project from scratch
//pushes said number to screenArray when pushed and adds it to the innerHTML
//so the user can see what they have inputed
one.addEventListener("click", () => {
    screenArray.push(1);
    screenText.innerHTML = screenArray.join("");
});
two.addEventListener("click", () => {
    screenArray.push(2);
    screenText.innerHTML = screenArray.join("");
});
three.addEventListener("click", () => {
    screenArray.push(3);
    screenText.innerHTML = screenArray.join("");
});
four.addEventListener("click", () => {
    screenArray.push(4);
    screenText.innerHTML = screenArray.join("");
});
five.addEventListener("click", () => {
    screenArray.push(5);
    screenText.innerHTML = screenArray.join("");
});
six.addEventListener("click", () => {
    screenArray.push(6);
    screenText.innerHTML = screenArray.join("");
});
seven.addEventListener("click", () => {
    screenArray.push(7);
    screenText.innerHTML = screenArray.join("");
});
eight.addEventListener("click", () => {
    screenArray.push(8);
    screenText.innerHTML = screenArray.join("");
});
nine.addEventListener("click", () => {
    screenArray.push(9);
    screenText.innerHTML = screenArray.join("");
});
zero.addEventListener("click", () => {
    screenArray.push(0);
    screenText.innerHTML = screenArray.join("");
});
point.addEventListener("click", () => {
    screenArray.push(".");
    screenText.innerHTML = screenArray.join("");
});


// adds operators via the users input to the screenArray
divide.addEventListener("click", () => {
    screenArray.push("/");
    screenText.innerHTML = screenArray.join(" ");
});
multiply.addEventListener("click", () => {
    screenArray.push("*");
    screenText.innerHTML = screenArray.join(" ");
});
subtract.addEventListener("click", () => {
    screenArray.push("-");
    screenText.innerHTML = screenArray.join(" ");
});
add.addEventListener("click", () => {
    screenArray.push("+");
    screenText.innerHTML = screenArray.join(" ");
});
//uses eval to evaluate the string, screenArray
//i've heard eval can be a security risk but this is a calculator app
equals.addEventListener("click", () => {
    console.log(screenArray.join(""));
    screenText.innerHTML = eval(screenArray.join(""));
    // KEEPs CALCULATING BASED OF PREVIOUS ANSWER
    if (screenText.innerHTML){
        screenArray.length = 0;
        screenArray.push(screenText.innerHTML)
    }
});