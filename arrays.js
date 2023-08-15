// Creating an array called myArr with some initial values
const myArr = [0, 1, 2, 3, 4];

// Printing the array to the console
console.log("Original Array:", myArr);

// Arrays are collections of data, resizable, and indexed from zero

// Adding values to the end of the array using push()
myArr.push(5);
myArr.push(6);
myArr.push(7);

// Removing the last element from the array using pop()
myArr.pop();

// Adding a value to the start of the array using unshift()
myArr.unshift(9);

// Removing the first element from the array using shift()
myArr.shift();

// Checking if the array includes a certain value using includes()
console.log("Does the array include 3?", myArr.includes(3));

// Printing the updated array
console.log("Modified Array:", myArr);

// The type of myArr is an object
console.log("Type of myArr:", typeof myArr);

// Using join() to convert array elements into a string
const newArray = myArr.join();

// The type of newArray is a string
console.log("New Array as a String:", newArray);
console.log("Type of newArray:", typeof newArray);

// Using slice() to create a new array from a portion of the original array
const slicedArray = myArr.slice(1, 4);
console.log("Sliced Array:", slicedArray);

// Using splice() to remove elements from the array and get the removed elements
const removedElements = myArr.splice(1, 2);
console.log("Removed Elements:", removedElements);

// Printing the final array after all operations
console.log("Final Array:", myArr);
