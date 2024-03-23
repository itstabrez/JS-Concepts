const score = 400
const balance = new Number(100)

console.log(score)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2))

const nextNumber = 23.655;
console.log(nextNumber.toPrecision(3));  // ALWAYS RETURN STRING

const otherNumber = 123.4554
console.log(otherNumber.toPrecision(4));

const amountRepresentation = 10000000
console.log(amountRepresentation.toLocaleString('en-IN'));

// ~~~~~~Maths library~~~~~~~~ //
console.log(Math);

console.log(Math.abs(-4))  // Negative value will change to positive
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));  //TAKE HIGHER VALUE TO ROUND OFF
console.log(Math.floor(4.6)); //TAKE LOWER VALUE TO ROUND OFF
console.log(Math.max(4,6,4,3,7,6,4)); //Maximum Value will print
console.log(Math.min(4,6,4,3,7,6,4)); //Maximum Value will print

console.log(Math.random()); //Random Value will print always between 0 to 1
console.log((Math.random()*10) + 1); //Random Value will print other than between 0 to 1
console.log(Math.floor(Math.random()*10) + 1); //Random Value will print other than between 0 to 1 and rounded off value with lowest value
const max=10;
const min=20;
console.log(Math.floor(Math.random()*(max - min + 1))+min)  // Random Value but between 10 to 20 


