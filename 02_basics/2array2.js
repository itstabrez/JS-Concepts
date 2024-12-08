const arrayOne = ["Tabrez" , "Anonymys" , "Random"];
const arrayTwo = ["Hacker" , "Foolish" , "Consumer"];

// arrayOne.push(arrayTwo)  
// console.log(arrayOne);

// console.log(arrayOne);
// const arrayThree = arrayOne.flat(Infinity);
// console.log(arrayThree);

//After addition of two arrays first array treat whole second array as a single array element ++++++++++++++++++++++++++

// console.log(arrayOne[2]); 
// console.log(arrayOne[2][1]); 

//This will return new array and after concatination each element is concatinated as new elements ++++++++++++++++++++++++++

// let allArray = arrayOne.concat(arrayTwo)   

// console.log(allArray);


//This will also add two arrays as each different elements  ++++++++++++++++++++++++++

//Spread Operator ++++++++++++++++++++++++++

// const allNewArray = [...arrayOne, ...arrayTwo]; 
// console.log(allNewArray);

const latest_array = [1 , 2 , 4 , [6 , 8 , 7] , 5 , [5 , 4 , [4 , 7 ]]];

//This will move all nested array in a single array with each element separated ++++++++++++++++++++++++++

// const normalArray = latest_array.flat(Infinity);  
// console.log(normalArray);

//Check if the array is present which is passed as an arguments
// console.log(Array.isArray("Tabrez"))  

//Create a new array using passed argument
// console.log(Array.from("Tabrez"))  

//Unique Case so if this can't convert passed argument in array then it provide an empty array
console.log(Array.from({ Name : "Tabrez"}).keys)  

// let score1 = 100;
// let score2 = 200;
// let score3 = 300;

//.of function will also convert passed argument as set of array
// console.log(Array.of(score1 , score2 , score3));  