// String Manipulation
let fistName="John";
let lastName="Doe";
console.log(fistName.charAt(0)+lastName.charAt(0));

// calculator
let num1=12;
let num2=13;
let sum=num1+num2;
console.log("the sum of two numbers is: " + sum);
let sub=num2-num1;
console.log("the substraction of two numbers: " + sub);
let division=num1/num2;
console.log("the division of two numbers is: " + division);
let multiplication=num1*num2;
console.log("the multiplication of two numbers is: " + multiplication);

// Name Formatting
var name="Ashutosh"
console.log("printing the name into upperCase: " + name.toUpperCase());
console.log("printing the name into lowerCase: " + name.toLowerCase());

// Length Comparison

let word1="ashutosh";
let word1Length=Number(word1.length);
let word2="mohanty";
let word2Length=Number(word2.length);
if (word1Length>word2Length){
    console.log(`${word1} has more characters`);
} else {
    console.log(`${word2} has more characters`);

}


// Type Conversion

let numString="42";
console.log(Number(numString));

// Character Count

let charCount="Hello World!";
console.log("the number of characters are: " + charCount.length);

// Data Type Detection

let x=12;
console.log(typeof x);
let y="Ashutosh";
console.log(typeof y);


