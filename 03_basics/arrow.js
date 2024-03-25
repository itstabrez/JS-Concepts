const user = {
    username: "Tabrez",
    price: 999,
    welcomeMessage : function() {
        console.log(`${this.username} Welcome to this website`);
        // console.log(this);
    }
}

user.welcomeMessage();
user.username = "Anonymus";
console.log(user.username);
user.welcomeMessage();
console.log(this);

function code() {
    // console.log(this);
}
code();

//  ARROW FUNCTION

const arrowFun =  () => {
    let username = "Haider";
    console.log(username);
}
arrowFun()

// const addTwoNum = (num1, num2) => {          //BASIC ARROW FUNCTION
//     return num1 + num2
// }

const addTwoNum = (num1, num2) => (num1 + num2)            //IMPLICIT RETURN ARROW FUNCTION 

const objectReturn = (num1, num2) => ({username: "Shadan"})            //IMPLICIT RETURN ARROW FUNCTION 


console.log(addTwoNum(4 , 6));
console.log(objectReturn(4 , 6));

// IMMEDIATELY INVOKED FUNCTION EXPRESSION

(function immediateFunc () {
    console.log("CONNECTION ESTABLISHED");
})();

((name) => {
    console.log(` ${name} Instant Execution`);
})("Tabrez");

