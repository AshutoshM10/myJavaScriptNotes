/* 

    we should write the strings like this backticks  (``) .
    `this is called string interpolation and we print the variables as ${variable_name}`
*/ 

let name="Ashutosh"
let age = 23

console.log(`Hii, My Name is ${name.toUpperCase()} and I am ${age} years old.`);

let gameName = "BattleGround-Mobile"
console.log(gameName);
console.log(typeof gameName)
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.length);

//++++++++++++++++++++++++++++++  SLICE OPERATOR  +++++++++++++++++++++++++++++++++++++++++++
const newGame = gameName.slice(5, 10)
console.log(newGame);
/*
for slice operator, we use slice(starting, ending) function.
if starting index is not given then it will start from beginning of the string.
if endinding index is not give then it will go till last character in that string.
    
let variable_name = newVariable(0, n)
then it will print 0 to (n-1)th index.
slice operators can also use negative indexing. 
that means it can slice through the Strings in a reverse order.

positive indexing, [0|1|2|3|4]
negative indexing [-5|-4|-3|-2|-1]

*******substring() function only follows positive indexing, 
if we give negative index in the start then it will take the first index.******

*/
// ++++++++++++++++++++ Trim and Replace methods +++++++++++++++++++++++++

/*
trim() removes the extra number of spaces in a STRING
replace() replaces the strings.


variable_name.replace('which pattern we want to replace', 'to which we want to replace it with')

*/ 

let battleRoyal=gameName.replace("-","_") // replacing - with _
console.log(battleRoyal);


/*
to check if the character or string is present or not in the variable. 
we use includes() function. 
where we define includes("Pattern")
and it is case sensitive
*/
console.log(gameName.includes('Battle'));

/*

split() method is used to take pattern and divides a string into an ordered list of 
substrings by searching for the pattern.
split(separator, limit)
*/
console.log(gameName.split('-'));