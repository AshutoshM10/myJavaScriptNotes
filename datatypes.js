"use strict"; // Enables strict mode to catch coding mistakes and improve code quality

// Display data in a table format
console.table([3 + 3, "Ashutosh", "ashutosh@gmail.com"]);

// Display a simple message
console.log("ashutosh");

// ---------------- Primitive Data Types ------------------

// Numbers: Represents both floats and integers
// String: Represents patterns, names, etc.
// BigInt: Used for very large numbers
// Boolean: Represents true or false
// Null: Represents an empty value
// Undefined: Represents a variable that has been declared but not defined
// Symbol: Used to give uniqueness to a value

// Example of Symbol
console.log(Symbol('123')); // Symbols are unique identifiers

// Example: Comparing two Symbols
let sym1 = Symbol('123');
let sym2 = Symbol('123');
if (sym1 === sym2) {
    console.log(true); // This will not execute, Symbols are unique
} else {
    console.log(false);
}

// ------------ Non-Primitive Data Types (Reference Types) ------------

// Array: A list of values
const heroes = ["Batman", "Iron man", "Chris Nolan"];

// Objects: Key-value pairs enclosed in curly braces
const myObj = {
    name: "Ashutosh",
    age: 23,
};

// Functions: Blocks of reusable code
const myFunction = function() {
    console.log("hello world");
};
console.log(typeof myFunction); // Functions are considered objects

