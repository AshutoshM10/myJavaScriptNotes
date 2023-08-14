const score = 122; // javaScript is used to define the datatype automatically 
console.log(score);  

// but to define the datatype explicitely, we use 'new' key word

// syntax:   new <datatype>("value")
const balance =  new Number(100)  // new keyword helps to define the datatype explicitely
console.log('balance: ', balance);

console.log(balance.toString()); 
console.log(balance.toFixed(2));   

/* 
toFixed() allows allows you to format a number 
to a specific number of decimal places
*/


const a = 23.8988
console.log(a.toPrecision(4));
/* 
Returns a string containing a number represented either in exponential or 
fixed-point notation with a specified number of digits.
*/

const b = 1000000
console.log(b.toLocaleString('en-IN'));  // vistarika sankhya pain, comma in every 1, 10, 100,100 and so on positions





// ++++++++++++++++ Maths ++++++++++++++++++

// math's lib comes to javaScript by default
console.log(Math);

// Math.abs() -> absolute value
console.log(Math.abs(-4));   // returns 4
// Math.round() -> for round off values
console.log(Math.round(4.2));
// Math.ceil() -> for upper values while rounding off
console.log(Math.ceil(4.2));
// Math.floor() -> for lower values while rounding off
console.log(Math.floor(4.2));
// Math.sqrt() -> for square root of the values.
console.log(Math.sqrt(4));
// Math.min() -> for finding a lower value in the Array
let array = [1,2,3,4,5,7]
console.log(Math.min(...array)); 
/* the spread operator (...) is used to pass the elements of 
the array as separate arguments to the Math.min() function.
*/

// Math.max() -> used to find maximum value in an array
console.log(Math.max(...array));
// Math.random() -> for getting the value between 0 to 10 (mostly decimals)
console.log(Math.random()); // it give random numbers mostly decimals. to get the roundoff value
                            // we can use round(), min(), max()



let min = 10
let max = 20
console.log(Math.floor(Math.random() * (max-min+1 + min)));
/* 

Math.random(): This gives you a random decimal number between 0 (inclusive) and 1 (exclusive). It's like rolling a random fraction.

Range Calculation: (max - min + 1) calculates the range of possible values. The + 1 ensures the maximum value is included in the range.

Scaling: Multiplying Math.random() by the range from step 2 gives you a random decimal number within that range.

Math.floor(...): This rounds down the decimal number from step 3 to the nearest whole number. It's like removing the decimal part.

Adding min: Adding min shifts the rounded number up by min units, effectively moving it into the desired range.

*/