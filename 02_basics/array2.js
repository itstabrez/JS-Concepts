const arrayOne = ["Tabrez" , "Anonymys" , "Random"];
const arrayTwo = ["Hacker" , "Foolish" , "Consumer"];

// arrayOne.push(arrayTwo)
// console.log(arrayOne);

// console.log(arrayOne[2]); //After addition of two arrays first array treat whole second array as a single array element 
// console.log(arrayOne[2][1]); 

// let allArray = arrayOne.concat(arrayTwo)   //This will return new array and after concatination each element is concatinated as new elements

// console.log(allArray);

const allNewArray = [...arrayOne, ...arrayTwo]; //This will also add two arrays as each different elements
console.log(allNewArray);

const latest_array = [1 , 2 , 4 , [6 , 8 , 7] , 5 , [5 , 4 , [4 , 7 ]]];

const normalArray = latest_array.flat(Infinity);  //This will move all nested array in a single array with each element separated

console.log(normalArray);

console.log(Array.isArray("Tabrez"))  //Check if the array is present which is passed as an arguments

console.log(Array.from("Tabrez"))  //Create a new array using passed argument

console.log(Array.from({ Name : "Tabrez"}))  //Unique Case so if this can't convert passed argument in array then it provide an empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1 , score2 , score3));  //.of function will also convert passed argument as set of array