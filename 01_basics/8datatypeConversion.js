// #PROBLEM 1  --- > BUT The Problem is if we assign a varialble as follows++++++++++++++++++++++++++++++++


// let ticketNo = null

// console.log("Now it's an",typeof ticketNo);  //It is an object now

// let valueInNumber = Number(ticketNo)

// console.log("Checking again", typeof ticketNo)   
// // Still it is an Object 
// //But if we print this then it will give an Output of integer 0 which is a problem

// console.log(valueInNumber);



// #PROBLEM 2 ---> Another Example of error ++++++++++++++++++++++++++++++++


// //Assigned as undefined
// let someValue=undefined     

// //undefined type here
// console.log(typeof someValue)  

// //converted in number  
// let valInNumber=Number(someValue) 

// //number type here which is a problem
// console.log(typeof valInNumber)  

// //But O/P will be NAN --> Not a number
// console.log(valInNumber)   



// #PROBLEM 3 ---> Another Example ++++++++++++++++++++++++++++++++


//  //Assigned as string
// let anotherValue="33abs"    

// //string type here
// console.log(typeof anotherValue)  

// //not converted in number  
// let AgainInNumber = Number(anotherValue)  

// //string type here which is a problem
// console.log(typeof anotherValue)  

// //But O/P will be same as assigned value --> String 33abs
// console.log(anotherValue)   


// PROBLEMS SUMMARY
// "33"=33 --- convertable in number
// "33abc" ---- not convertable in number
// true ---> 1 -- convertable in 1 vice versa , for False value will be 0
// "" ---> Empty string False (0)
// "Tabrez" ---> True if any value is in double inverted commas (1)

let loggedIn = 1

let booleanIsLoggedIn = Boolean(loggedIn)

console.log(booleanIsLoggedIn)





