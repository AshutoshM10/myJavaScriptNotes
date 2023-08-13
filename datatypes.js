"use strict" // it treats the js code as newer version
console.table([3+3, "Ashutosh", "ashutosh@gmail.com"]);
console.log("ashutosh");

// --------- Primitive datatypes ------------------
// numbers : both floats and integers are considered as numbers (range: 2 to 2^53)
// string : patterns and names etc comes under this datatypes => ("String")
// BigInt : Bahut bada numbers pain
// boolean => true/false
// null => standalone value (representation of an empty value)
// undefined => it means i have created the variable, but have not defined the value.
// symbol : Used to give an uniqueness to a code.


// objects:
// example:
let a = 123
console.log(typeof a)  // it will give integer type
let name= "ashutosh"
console.log(typeof name) // it will give string type;
// console.log(typeof variable_names) // it gives the type of the variable. 
console.log(Symbol('123'));  // Symbols are uniquely defined the variable as a unique.



// example: 
let sym1 = Symbol('123');
let sym2 = Symbol('123');
if(sym1 === sym2){
    console.log(true);
} else {
    console.log(false);
}
// the output will be false





// ---------- Non Primitive Datatypes (Reference types) -----------
// Array : these are the list of objects. Which are defined inside square brackets []
const heroes= ["Batman", "Iron man", "Chris Nolan"]

// objects, : these are the key value pairs, which are defined inside curly braces {}
/* 

here **let myObj** is the variable in which we defined the object. 
in words, We store the object in a variable. 

*/
let myObj = {
    name: "Ashutosh",
    age: 23,

}
console.log(myObj);

// functions: 
/* 

Here Created the function and stored that inside a variable.
const <function_name> ---> Variable
function() {
    this is the function.
}




*/
const myFunction = function() {
    console.log("hello world")
}
    console.log(typeof myFunction);  // it returns function. it is actually Object function

    