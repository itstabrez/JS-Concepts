// DATE
let myDate = new Date()
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
// DATE TYPE IS OBJECT

let myCreatedDate = new Date(2023,0,23)

console.log(myCreatedDate.toString());
console.log(myCreatedDate.toLocaleString());

let myNewCreatedDate = new Date("2023-01-14")   //YY-MM-DD
console.log(myNewCreatedDate.toLocaleString()); 

let myTimeStamp = Date.now()   //
console.log(myTimeStamp); //IT WILL GIVE US TIME IN MILISECONDS
console.log(myNewCreatedDate.getTime()); // WILL ALSO GIVE US TIME IN MILISECONDS

console.log(Math.floor(myNewCreatedDate/1000)); //IT WILL GIVE US TIME IN SECONDS 


console.log(myDate.getMonth()  + 1);  //IT WILL GIVE US CURRENT MONTH 

let newDate = new Date()
console.log(newDate.toLocaleString('default',{
    weekday: "long"
}));            // CAN CUSTOMIZE DATE AND TIME ACCORDINGLY
