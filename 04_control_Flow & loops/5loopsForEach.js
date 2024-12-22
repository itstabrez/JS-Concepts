// const myCoding = ["C++" , "JS" , "DART" , "C"];

// myCoding.forEach((item) => {
//     console.log(item)
// });

const values = [1,4,3,2,5,6];

// values.forEach((value) => console.log(value));

// const newValue =  values.filter((item) => item > 3)

// console.log(newValue);

const myNewFilter = values
            .map((val) => val*10)
            .filter((val) => val > 10);

console.log(myNewFilter);


const myNewNumber = values.reduce((accumulator , current) => accumulator + current , 0 );

console.log(myNewNumber);