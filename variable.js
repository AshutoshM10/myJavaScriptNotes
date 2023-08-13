var globalVar = "Global variable";
let blockVar = "Block-scoped variable";
const constantVar = "Constant variable";

// Variables can be updated or reassigned
blockVar = "Updated value";

// This will result in an error since constantVar cannot be reassigned
// constantVar = "New value"; // Throws an error
console.log(blockVar);
console.log(globalVar);
console.log(constantVar);