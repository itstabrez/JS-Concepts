const score = 400
const balance = new Number(10012)

console.log(score)
console.log(balance)  //This Will provide Datatype when printing inc console 

console.log(balance.toString().length)
console.log(balance.toFixed(2))   //Fixing Values to be shown after point (.)

const nextNumber = 23.655;

//Returns Precise Value 
console.log(nextNumber.toPrecision(3));  // ALWAYS RETURN STRING 

const otherNumber = 123.4554
console.log(otherNumber.toPrecision(4));

const amountRepresentation = new Number(10000000);
console.log(amountRepresentation.toLocaleString('en-IN'));

// ~~~~~~Maths library~~~~~~~~ //
console.log(Math);

// Negative value will change to positive //Same As CPP
console.log(Math.abs(-4))  

//Round Of The Value 
console.log(Math.round(4.8));

//TAKE HIGHER VALUE TO ROUND OFF
console.log(Math.ceil(4.6)); 

//TAKE LOWER VALUE TO ROUND OFF
console.log(Math.floor(4.6)); 

//Maximum Value will print
console.log(`Max : ${Math.max(4,6,4,3,7,6,4)}`); 

//Minimum Value will print
console.log(`Min : ${Math.min(4,6,4,3,7,6,4)}`); 

//Random Value will print always between 0 to 1
console.log(Math.random()); 

//Random Value will print other than between 0 to 1
console.log((Math.random()*10) + 1);

//Random Value will print other than between 0 to 1 and rounded off value with lowest value
console.log(`Random Value : ${Math.floor(Math.random()*10) + 1}`);

const max=10;
const min=20;

// Random Value but between 10 to 20 
console.log(Math.floor(Math.random()*(max - min + 1))+min)  

