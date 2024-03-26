    //FOR LOOP
for (let i = 0; i <= 10; i++) {
    const element = i;
    if(i == 5){
        // console.log("5 is best number");
    }
    // console.log(element);
}

for (let i = 1; i <= 10 ; i++) {
    console.log(`Outer Loop Value ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inside Loop Value ${j} and inner loop ${i}`);
        // console.log(i + " * " + j + " = " + i*j);
    }
}

// ACCESSING ARRAY THROUGH FOR LOOP

let myArray = ["Shaktiman" ,  "Krrish" , "Flying Jatt"]
// for (let index = 0; index < myArray.length ; index++) {
//     console.log(myArray[index]);
// }

// for (let index = 0; index <= 20; index++) {
//     if(index == 5){
//         break;
//     }
//     console.log(`Value of i is ${index}`);
// }

for (let index = 0; index <= 20; index++) {
    if(index == 5){
        continue;
    }
    console.log(`Value of i is ${index}`);
}

// WHILE & DO WHILE LOOP
let index = 0;
while (index<=5){
    console.log(index);
    index+=2;
}

let i = 0;
// while(i < myArray.length){
//     console.log(myArray[i]);
//     i++;
// }

do {
    console.log(myArray[i]);
    i++;
} while (i < myArray.length);


