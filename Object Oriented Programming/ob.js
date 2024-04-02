const user = {
    username: 'Tabrez',
    loginCount: '8',
    signedIn: 'true',

    getUserDetails: function () {                       
        // console.log(`Username is ${this.username}`);            //ARROW FUNCTION WILL NOT RETURN USER NAME WE HAVE TO USE NORMAL FUNCTION
        // console.log('Got User Details From Database');
        console.log(this);  
    }
}

// console.log(user.getUserDetails());


function User (username , loginCount , isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // return this;                 //WE CAN EITHER RETURN IT OR NOT IN BOTH CASE WE CAN ACCESS THE FUNCTION ELEMENTS
}

const userOne = new User("Tabrez" , 10 , true);             //new Keyword create a new empty object and it calls a constructor function and 
const userTwo = new User("Anonymus" , 15 , false);

console.log(userOne);
console.log(userTwo.constructor);       //Here constructor return the refrence of the same function


// -------- What does new Keyword do --------------->

// Creates an Object: When you use new with a constructor function, it creates a new object.

// Binds this: Inside the constructor function, this refers to the newly created object. This allows you to set properties and methods on the object.

// Prototype Linking: It sets up the prototype chain for the newly created object, linking it to the prototype property of the constructor function. This enables inheritance in JavaScript.

// Implicit Return: If the constructor function does not explicitly return an object, the newly created object is returned automatically.

