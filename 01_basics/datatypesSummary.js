const id = Symbol('123')
const anotherId  = Symbol('123')
console.log(id===anotherId)     //FALSE O/P because because symbol is unique in itself

// ARRAYS, OBJECTS, Functions
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