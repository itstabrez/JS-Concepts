// Stack , Heap

// ALL PRIMITIVE DATA TYPE USES STACK

// FOR EXAMPLE

let firstVariable = "Dedication"
let secondVariable = firstVariable   //=> Both variable will have value Dedication

// console.log(firstVariable)
// console.log(secondVariable)

secondVariable="Perseverance" //UPDATING SECOND VARIABLE 
console.log(firstVariable)      //FIRST VARIABLE REMAINS UNCHANGED
console.log(secondVariable)         //Second Variable as we changed value in variable so it will be changed


// ALL NON PRIMITIVE DATA TYPE USES HEAP IN JS

// FOR EXAMPLE

let userOne = {
    Name:"Tabrez Alam",
    Email:"tabrezamrath@gmail.com"
}
let userTwo = userOne
console.log(userOne)
console.log(userTwo)
userTwo.Name="Anonymus" //UPDATING USER TWO
console.log(userOne)    //USER ONE VALUE WILL BE CHANGED AS WE CHANGED USER TWO VALUE
console.log(userTwo)


