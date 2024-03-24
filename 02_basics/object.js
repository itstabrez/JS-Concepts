// Singleton
// Object.create    ------> Constructor Method

// Object literals

let mySym = Symbol("Key1");
const jsUser = {                     //------>  literals method
    name: "Tabrez",
    age: "20",
    [mySym]:"1stKey",       //Symbol can only assigned by square brackets in variable and accessed using second way of accessing
    email: "tabrezamrath@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Saturday"],
    "investigation":"Can't access by first way of accessing element"    //This can only be accessed by 2nd way of accessing objects
} 
console.log(jsUser.name);       //One Way of accessing 
console.log(jsUser["email"]);   //Second way of accessing objects element
console.log(jsUser["investigation"]);
console.log(jsUser[mySym]);

jsUser.age = 21;            //Updating Object Elements

// Object.freeze(jsUser);      //Now No Further updates in jsUser object can be done

console.log(jsUser["age"]);
jsUser.name = "Anonymus";

jsUser.greetings = function () {
    console.log("Hello Tabrez Have a good day !");
}

jsUser.info = function () {
    console.log(`Hello your mail id is ${this.email}`);
}

console.log(jsUser.greetings());
console.log(jsUser.info());