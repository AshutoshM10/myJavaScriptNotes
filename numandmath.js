// Defining a variable 'score' with automatic type inference
const score = 122;
console.log("Score:", score);

// Defining a variable 'balance' with explicit type definition using 'new' keyword
const balance = new Number(100);
console.log("Balance:", balance);

// Converting 'balance' to string using toString()
console.log("Balance as string:", balance.toString());

// Rounding 'balance' to two decimal places using toFixed()
console.log("Rounded balance:", balance.toFixed(2));

// Displaying 'a' with precision of 4 decimal places using toPrecision()
const a = 23.8988;
console.log("Precision of 'a':", a.toPrecision(4));

// Displaying 'b' with commas as thousands separators using toLocaleString()
const b = 1000000;
console.log("Formatted 'b':", b.toLocaleString('en-IN'));

// ++++++++++++++++ Math Functions ++++++++++++++++++

// Displaying the Math object
console.log("Math object:", Math);

// Absolute value using Math.abs()
console.log("Absolute value of -4:", Math.abs(-4));

// Rounding using Math.round()
console.log("Rounded value of 4.2:", Math.round(4.2));

// Ceiling value using Math.ceil()
console.log("Ceiling value of 4.2:", Math.ceil(4.2));

// Floor value using Math.floor()
console.log("Floor value of 4.2:", Math.floor(4.2));

// Square root using Math.sqrt()
console.log("Square root of 4:", Math.sqrt(4));

// Finding the minimum value in an array using Math.min()
let array = [1, 2, 3, 4, 5, 7];
console.log("Minimum value in the array:", Math.min(...array));

// Finding the maximum value in an array using Math.max()
console.log("Maximum value in the array:", Math.max(...array));

// Generating a random integer between min and max using Math.random()
let min = 10;
let max = 20;
console.log("Random integer between min and max:", Math.floor(Math.random() * (max - min + 1)) + min);
