const prompt=require("prompt-sync")({sigint:true});
// the above line will import the prompt lib for prompt
let age = prompt("What's you age: ?")
console.log(typeof age)  // it will print the type of age, the type is string.
age = Number (age);   // we need to convert this into a number like this.
console.log(typeof age) // it will print the type age Number


let a = 1;
let b = 0;
console.log(typeof a) 
console.log(Boolean(a))
console.log(Boolean(b))

let c = 12
let booleanTypeConversion = Boolean(c)
console.log(booleanTypeConversion);


/* 
"33"=> 33
"33abc" => NaN
"true" => 1
"false" => 0

to convert to boolean, we do 
let booleanTypeConversion = Boolean(variable_name)
let stringConversion = String(variable_name)

*/