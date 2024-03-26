// SIMPLIFIED LOOPS THAT IS USED IN JS

const array = [5 , 8 , 10];

for (const number of array) {
    // console.log(number);         //IS ITERATABLE
}

const greetings = "Hello Duniya";

// for (const text of greetings) {
//     console.log(text);
// }

// MAPS

const map = new Map();
map.set("IN" , "INDIA");
map.set("EU" , "EUROPE");
map.set("SA" , "SOUTH AFRICA");
map.set("IN" , "INDIA");




// for (const [key, Value] of map) {
//     console.log(key, ":-", Value);
// }   

const myObj = {
    name: "Tabrez",
    age: 20
}

// for (const [key, value] of myObj) {
//     console.log(key, ":-", value);          //NOT ITERATABLE ON OBJECT
// }

// OBJECT ITERATION IN LOOPS USING FOR IN LOOP

const myObject = {
    cpp: "C++",
    js: "JavaScript",
    html: "HTML",
    css: "CSS"
}

for (const key in myObject) {
    // console.log(`${key} for ${myObject[key]}`);      //IS ITERATABLE
}

// ARRAY USING FOR IN LOOP
const myNewArray = ["Ruby" , "Swift" , "CPP" , "JS"];

for (const value in myNewArray) {
    // console.log(myNewArray[value]);          //IS ITERATABLE 
}

// MAPS USING FOR IN LOOP
// for (const keys in map) {
//     console.log(keys);
// }                           //MAP IS NOT ITERATABLE USING FOR IN LOOP

// FOR EACH LOOP

const learning = ["DSA" , "WEB DEV" , "BLOCKCHAIN" , "MACHINE LEARNING"];

// learning.forEach( function (courses) {           //NORMAL FUNCTION
//     console.log(courses);
// } )

// learning.forEach( (offeredCourse) => {          //ARROW FUNCTION
//     console.log(offeredCourse);
// } )

// function printingArray (course) {
//     console.log(course);                    
// }

// learning.forEach(printingArray);        //PRINTING ARRAY BY PASSING FUNCTION IN ARGUMENT

// learning.forEach((courses , index , arr) => {
//     console.log(courses , index , arr);                  //FOR EACH FUNCTION HAVE THESE THREE PARAMETERS
// })

const myCoding = [{
    languageName: "JavaScript",
    languageFilename: "js"
},
{
    languageName: "C++",
    languageFilename: "cpp"
},{
    languageName: "C",
    languageFilename: "c"
}]

myCoding.forEach((value ) => {
    console.log(value);
})


