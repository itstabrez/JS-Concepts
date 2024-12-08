// Singleton
// Object.create    ------> Constructor Method (Singleton Object)

// Object literals

let mySym = Symbol("Key1");
const jsUser = {                     //------>  literals method
    name: "Tabrez",
    age: "20",
    [mySym]:"1stKey",       //Symbol can only assigned by square brackets in variable and accessed using second way of accessing
    email: "tabrezamrath@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Saturday"],
    "investigation":"Can't access by first way of accessing element"    //This can only be accessed by 3rd way of accessing objects
} 
console.log(jsUser.name);       //One Way of accessing 
console.log(jsUser["email"]);   //Third way of accessing objects element
console.log(jsUser["investigation"]);
console.log(jsUser[mySym]);//Second way of accessing objects element

jsUser.age = 21;            //Updating Object Elements

console.log(jsUser["age"]);

//Now No Further updates in jsUser object can be done
// Object.freeze(jsUser);      

jsUser.name = "Anonymus";

console.log(jsUser.name);

jsUser.greetings = function () {
    console.log("Hello Tabrez Have a good day !");
}

jsUser.info = function () {
    console.log(`Hello your mail id is ${this.email}`);
}
jsUser.details = function () {
    console.log(`is Logged : ${this.isLoggedIn}`);
}

console.log(jsUser.greetings());
console.log(jsUser.info());
console.log(jsUser.details());