const myNum = [5 , 6 , 7 , 8 , 9 , 10];

// -------------> PERFORMING OPERATION AND RETURNING VALUES WHILE NOT USING LOOP FOR EACH PROPERTY ------------->
// const temp = myNum.filter((value) => {              //EXPLICIT RETURN WHEN OPENING CURLY BRACES {}
//     return value > 7;
// })
// console.log(temp);

// const tempTwo = myNum.filter((value) => (value > 8));       //IMPLICIT RETURN WHEN OPENING PARANTHESES ()

// console.log(tempTwo);

// ---------------> PERFORMING OPERATION AND RETURNING VALUES WHILE USING LOOP FOR EACH PROPERTY ---------------->

const newNums = [];

myNum.forEach((num) => {
    if (num > 6) {
        newNums.push(num) 
    }
})
console.log(newNums);

// -----------> PERFORMING MORE FILTER OPERATIONS ---------->

const myBooks = [{
    title: "Mind Peace" , genre: "History" , publication: "2010"
},{
    title: "Learning C++" , genre: "Coding" , publication: "2020"
},{
title: "Billionare Mind" , genre: "Non-Fictional" , publication: "2024"},
{
    title: "Manipulation" , genre: "Non-Fictional" , publication: "2025"
}
]

const myGenre = myBooks.filter((favGenre) => favGenre.genre === "Non-Fictional");
console.log(myGenre);


//=============MAPS==========================

const myNums = [10 , 2, 3 , 4 , 5 , 6];

const numbers = myNums.map((num) => num + 10);
console.log(numbers);

//=====================CHAINING===================

const myNums2 = [1 , 2 , 3 , 4 , 5];
const myChainedNums = myNums2.map((num) => num * 2)
.map((num) => num + 1)
.filter((num) => num > 3 )

console.log(myChainedNums);

// ======================REDUCE=======================

const myNums3 = [1 , 2 , 3];
const myTotal = myNums3.reduce((acc , curVal) => { 
    console.log(`accumulator value ${acc} and current value ${curVal}`);        //IMPLEMENTED WHEN WE WANT TO ADD MULTIPLE THINGS OF AN ARRAY
    return acc + curVal;
 },0);

console.log(myTotal);

// USING REDUCE IN OBJECTS

const myObj1 = [{
    name: "DSA",
    price: 299
},
{
    name: "WEB-DEV",
    price: 399
},{
    name: "AI",
    price: 499
}]

const totalCoursePrice = myObj1.reduce((acc , course) => acc + course.price , 0)
console.log(totalCoursePrice);