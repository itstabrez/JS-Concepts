const id = Symbol('123')
const anotherId  = Symbol('123')
console.log(id === anotherId)     //FALSE O/P because because symbol is unique in itself

//PRIMITIVE DATA TYPES
// String , BigInt ,  Number , Boolean , Undefined , Symbol

//Non Primitive
// ARRAYS, OBJECTS, Functions

const bigNumber  = 112893498344879n;
console.log(`Big Int - ${typeof bigNumber}` );
console.log(`Big Int - ${bigNumber}` );

const array = ["Shaktiman", "ChotaBheem", "Krrish"]
let myObj = {
    name: "Tabrez",
    age: 20
}
const myFun = function() {
    console.log("Inside the function")    
}
console.log(array)
console.log(myObj)
myFun()