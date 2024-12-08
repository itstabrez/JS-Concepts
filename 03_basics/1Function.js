function myName() {
    console.log("T");
    console.log("A");
    console.log("B");
    console.log("R");
    console.log("E");
    console.log("Z");
}

myName();

// function addTwoNum(number1,number2){
//     console.log(number1 + number2);
// }

function addTwoNum(number1,number2){
    return number1 + number2;
}

const result = addTwoNum(4,8);
// addTwoNum(4,7);

console.log(result);

function userLoginMessage(username = 'You'){
    if(!username){
        console.log("Please Enter a username");
        return;
    }
    return `${username} just logged in`
}

console.log(userLoginMessage("Tabrezzzz"));
console.log(userLoginMessage());

//IF WE DON'T KNOW HOW MANY ARGUMENTS WILL BE PASSED WHILE CALLING A FUNCTION THEN WE USE REST OPERATOR

function calculateCartItemPrice(...num1) {     //  '  ... ' is known as rest operator also spread operator depends on use cases
    return num1;                               
}         

console.log(calculateCartItemPrice(2 , 7 , 10));    


// HANDLING OBJECTS IN FUNCTIONS 

const myObj = {
    name: "Tabrez",
    age: 20
}

function handleObject(anyObject){ 
    console.log(`User Name is ${anyObject.name} and age is ${anyObject.age}`);
}

handleObject(myObj);

handleObject({
    name: "Tom",
    age: 22
})

// HANDLING ARRAYS IN FUNCTION

const myNewArray = [200 , 500 , "Anonymus"]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100 , 300 , 200]));


