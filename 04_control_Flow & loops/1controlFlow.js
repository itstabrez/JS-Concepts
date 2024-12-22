const isUserLoggedIn = true;

if (isUserLoggedIn) {
    console.log("Executed");
}

// Nullish Coalescing Operator (??): null undefined
let val1;
val1 = 5 ?? 10;
val1 = null ?? 15;

val1 = null ?? 15 ?? 18;

let var2 = undefined ?? 14;                 //THIS OPERATOR IS USED TO PUT VARIABLE IN VAR2 EITHER BOTH OF THEM WHICH IS AVAILABLE


console.log(val1);
console.log(var2);

// Terniary Operator ?

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("Less Than 80") : console.log("More Than 80");