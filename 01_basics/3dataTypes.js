"use strict"; //treat all JS code as newer JS

// alert(3+3);   //we are using nodeJs not browser
console.log(3 + 3);

let name="Tabrez";
let age = 19;
let isStudent=true;

//parsing String in number
let score = "50";

let scoreValueInNumber = Number(score);

console.log(`This should be string type : - ${typeof (score)}`);
console.log(`This should be number type: - ${typeof (scoreValueInNumber)}`);

//If we try to parse 
// "12ab" into number it will print NaN

//If we try to convert null into number it will print 0 after conversion
//Converting Empty string in boolean => false
//Any String in boolean is true

// Data Types
// null
// int
// bigint
// undefined
// boolean
// symbol


// object

console.log(typeof age)
console.log("NULL TYPE IS OBJECT" ,typeof null)


//null is an object type
//but undefined is an undefined data type