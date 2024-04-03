function multiplyBy5(num){
    // this.num = num;
    return num*5;
}

multiplyBy5.power = 2;
console.log(multiplyBy5.prototype);
console.log(multiplyBy5.power);

function createUser(username , score ){
    this.username = username;
    this.score = score;
}

createUser.prototype.printFun = function () {
    console.log(this.score);
}

createUser.prototype.incrementing = function () {
    this.score++;
}

const callOne = new createUser('Tabrez' , 20);
const callTwo = new createUser('Anonymus' , 60);

callOne.printFun();


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/


