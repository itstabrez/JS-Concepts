const myArr = [2 , 6 , 5 , 3 , 2]

console.log(myArr[3]);  //Printing 3rd index element of array
myArr.push(7);  //Push this argument element from back side of array
console.log(myArr);
myArr.pop();
console.log(myArr);

myArr.unshift(9)  //Add argument element from front side of array and shift 1 index of each present element of array from
console.log(myArr);

myArr.shift()
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(2));

let newArray = myArr.join()   //This will get converted in string
console.log(newArray)

console.log(myArr.slice(1,3));  //SLICE WILL NOT MANIPULATE ORIGINAL ARRAY
console.log(myArr.splice(1,3));  //SPLICE WILL MANIPULATE ORIGINAL ARRAY AND SEPARATE THE PART WHICH WE PASSED AS AN ARGUMENT 