let score=33;

console.log(typeof score);

let valueInString = String(score);

console.log(typeof valueInString)



// #PROBLEM 1  --- > BUT The Problem is if we assign a varialble as follows

let ticketNo = null

console.log("Now it's an",typeof ticketNo);  //It is an object now

let valueInNumber = Number(ticketNo)

console.log("Checking again", typeof ticketNo)   //Still it is an Object 
//But if we print this then it will give an Output of integer 0 which is a problem

console.log(valueInNumber);




// #PROBLEM 2 ---> Another Example of error
let someValue=undefined     //Assigned as undefined

console.log(typeof someValue)  //undefined type here

let valInNumber=Number(someValue)  //converted in number  

console.log(typeof valInNumber)  //number type here which is a problem

console.log(valInNumber)   //But O/P will be NAN --> Not a number



// #PROBLEM 3 ---> Another Example 
let anotherValue="33abs"     //Assigned as string

console.log(typeof anotherValue)  //string type here

let AgainInNumber=Number(anotherValue)  //not converted in number  

console.log(typeof anotherValue)  //string type here which is a problem

console.log(anotherValue)   //But O/P will be same as assigned value --> Not a number

// PROBLEMS SUMMARY
// "33"=33 --- convertable in number
// "33abc" ---- not convertable in number
// true ---> 1 -- convertable in 1 vice versa , for False value will be 0
// "" ---> Empty string False
// "Tabrez" ---> True if any value is in double inverted commas

let loggedIn = 1

let booleanIsLoggedIn = Boolean(loggedIn)

console.log(booleanIsLoggedIn)





