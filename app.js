
const prompt=require("prompt-sync")({sigint:true});
 
let a = prompt("enter the first number: ");
let b = prompt("enter the second nuumber: ")

if (a > b) {
    console.log(a + " is greater than "+  b);
} else if (a==b) {
    console.log(a + " is equal to " + b);
} else {
    console.log(a + " less than " + b);
}

