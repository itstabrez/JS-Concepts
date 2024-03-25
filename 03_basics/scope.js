let a = 300;

if (true){
let a = 5;
const b = 7;
var c = 50;
console.log(" INSIDE IF BLOCK " , a);
}

console.log(a);

// console.log(a);      //THIS WILL NOT PRINT AS SCOPE IS LIMITED TO THE IF BLOCK
// console.log(b);      //THIS WILL ALSO NOT PRINT
console.log(c);     // IT WILL PRINT AS 'VAR' VARIABLE SCOPE IS OUTSIDE BLOCK

// FUNCTION SCOPE

function one() {
    const username = "Tabrez"           //CHILD FUNCTION CAN ACCESS PARENT FUNCTION VARIABLE
    function two() {                    //PARENT FUNCTION CAN'T ACCESS CHILD FUNCTION VARIABLE
        const website = "yt.com";
        console.log(username);
    }
    // console.log(website);
    two();
}

one();

// IF ELSE STATEMENT SCOPE

if(true){
    const username = "Tabrez";
    if(username == "Tabrez"){
        const website = "yt.com";
        console.log(username + website);
    }
    // console.log(website);        //THIS WILL NOT EXECUTE
}
// console.log(username);       //THIS WILL ALSO NOT EXECUTE


// ---------INTERESTING--------------
console.log(addOne(3));          // WE CAN CALL THIS FUNCTION BEFORE FUNCTION INITIALIZATION WHEN WE ARE DIRECT INITIALIZING FUNCTION

function addOne(num) {
    return num + 1;
}


const addTwo = function(num) {
    return num + 2;
}

console.log(addTwo(5));         // WE CAN'T CALL THIS FUNCTION BEFORE FUNCTION INITIALIZATION WHEN WE HOLD FUNCTION IN A VARIABLE
