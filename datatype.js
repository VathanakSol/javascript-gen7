// Data Type 

let firstName = "Juju"; 
let lastName = 'Koko';

let age = 30;
let gpa = 3.8;

let canDrive = false;

console.log("My fullname is " + lastName + " " + firstName + ".")

// Template Literal
console.log(`My fullname is ${lastName} ${firstName}.`);

// DOM
const text = "New update added text!";
// document.getElementById('message')
//             .textContent = text;

// document.getElementById('footer')
//             .textContent = "New context !!!";

// document.getElementById('title')
//             .textContent = "JomNumTech JS"

// Operators
let num1 = 15;
let num2 = 30;

let sum = num2 + num1;
let sub = num2 - num1;
let mul = num2 * num1;
let div = num2 / num1;
let mol = num2 % num1;

// Decrement / Increment
let count = 10;
// count = count + 1;
// count += 1;
// count--;
// count -= 2;

let total = 0;
total += 50;
total += 200;

let a = 5;
let b = "5";

console.log(a + b);

// NaN = Not a number
// TypeScript

// Logical Operator
// AND - OR - NOT
let isRaining = false;
let isSunny = false;
let isCloudy = true;

// AND : true if both condition is true
// true && true = true
// true && false = false
// false && true = false
// false && false = false

// OR : true if one of the condition is true
// true || true = true
// true || false = true
// false || true = true
// false || false = false

// NOT : true if condition is false
// !true = false
// !false = true

if(isRaining || isSunny){
    console.log("Yes It is true");
} else {
    console.log("No It is false");
}

if(!isCloudy){
    console.log("Now, It sunny!");
} else {
    console.log("Now, It is still cloudy!");
}
