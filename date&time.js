// Date: Represents a single moment in time in a platform-independent format
let myDate = new Date();

// Displaying date in different formats
console.log("Date in default string format:", myDate.toString());
console.log("Date in ISO string format:", myDate.toISOString());
console.log("Date in JSON string format:", myDate.toJSON());
console.log("Date in local date string format:", myDate.toLocaleDateString());
console.log("Time portion of the date:", myDate.toTimeString());
console.log("Timezone offset in minutes:", myDate.getTimezoneOffset());

// Checking the type of myDate (it should be an object)
console.log("Type of myDate:", typeof myDate);

// ---------------------------------------------------------

// Creating a specific date (January 23, 2023)
let NewDate = new Date(2023, 0, 23); // Months start from 0 (January)

// Displaying the new date
console.log("Specific Date:", NewDate.toString());

// Creating a date from a string (MM-DD-YYYY format)
let myCreatedDate = new Date("01-14-2023");
console.log("Created Date in local format:", myCreatedDate.toLocaleString());

// Getting current timestamp
let myTimeStamp = Date.now();
console.log("Current Timestamp:", myTimeStamp);
console.log("Timestamp of the created date:", myCreatedDate.getTime());
console.log("Timestamp in seconds:", Math.floor(Date.now() / 1000));
console.log(`The created date in milliseconds: ${myCreatedDate.getTime()} ms`);
console.log(`The created date in seconds: ${Math.round(myCreatedDate.getTime() / 1000)} s`);

// ---------------------------------------------------------

// Displaying a specific aspect of the date (e.g., weekday)
console.log("Weekday of the new date:", NewDate.toLocaleString('default', {
    weekday: 'long',
}));

// Getting the year from the current date
let myNewCreatedDate = new Date();
console.log(`The year is: ${myNewCreatedDate.getFullYear()}`);
