// DATE
// let myDate = new Date()
// console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// DATE TYPE IS OBJECT

//Month Starts from 0 and end at 11

// let myCreatedDate = new Date(2023,0,23) 
// console.log(myCreatedDate.toString());
// console.log(myCreatedDate.toLocaleString());

//YY-MM-DD

let myNewCreatedDate = new Date("2024-12-07")   
// console.log(myNewCreatedDate.toLocaleString()); 

let myTimeStamp = Date.now()   

//IT WILL GIVE US TIME IN MILISECONDS
// console.log(myTimeStamp); 

// WILL ALSO GIVE US TIME IN MILISECONDS
// console.log(myNewCreatedDate.getTime()); 

//IT WILL GIVE US TIME IN SECONDS 
// console.log(Math.floor(myNewCreatedDate/1000));

//IT WILL GIVE US CURRENT MONTH     
// console.log(myNewCreatedDate.getMonth()  + 1);  

let newDate = new Date()

console.log(newDate);
 // CAN CUSTOMIZE DATE AND TIME ACCORDINGLY
console.log(newDate.toLocaleString('default',{
    weekday: "long",
    day : "2-digit",
}));           
