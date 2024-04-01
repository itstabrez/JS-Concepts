//--------------------------------------Promise One-------------------
const promiseOne = new Promise((resolve, reject) => {      //ALWAYS PASS RESOLVE AND REJECT TWO ARGUMENT INSIDE FUNCTION
    // DO ASYNC TASKS

    // DB, CRYPTOGRAPHY , NETWORK

    setTimeout(() => {
        console.log("Async Task is complete");
        resolve();
    }, 1000)
});


promiseOne.then(() => {
    console.log("Promise Consumed");
});

//--------------------------------------Promise Two-------------------

new Promise((resolve, reject) => {         //Promise Take two Function as an argument resolve and reject 
    setTimeout(() => {          
        console.log("Async Task 2");            
        resolve();
    }, 1000)
}).then(() => {                             //.then also take a function as an argument
    console.log("Async is resolved");       //WE CAN DIRECTLY ATTACH .then after closing paranthesess of promise
});

//--------------------------------------Promise Three-------------------

const promiseThird = new Promise((resolve, reject) => {
    setTimeout(() => {                      //Set Time Out Also Take a Function as an argument and yes we can define function outside timeOut and pass refrence of function as argument
        resolve({ username: "Tabrez", Email: "tabrezamrath@gmail.com" })        //WE CAN ALSO PASS ARGUMENTS IN RESOLVE
    }, 1000)
})

promiseThird.then((user) => {
    console.log(user);                          //HERE WE TOOK USER refrence in function which is already passed as an argument by resolve function
})

//-------------------------------------Promise four-------------------

const promiseFour = new Promise((resolve, reject) => {      
    setTimeout(() => {
        let error = true;
        if (!error) {                       
            resolve({ username: "Tabrez Alam", Password: 123 });
        } else {
            reject("Error ! Something Went Wrong")              //WE can .then and .catch directly instead of resolve and reject function
        }
    }, 1000)
})

const userName = promiseFour
    .then((user) => {
        console.log(user);
        return user.username;           //this return will be utilized by nested .then function
    })
    .then((username) => {
        console.log(username);              // we can print username which we returned in parent .then
    })
    .catch((error) => {             
        console.log(error);
    })
    .finally(() => console.log("The Promise is Either Resolved or rejected"))       //THIS WILL ALWAYS PRINT EITHER PROMISE IS RESOLVED OR REJECTED

//-------------------------------------Promise Five-------------------

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: "JS USER", Password: 888 });
        } else {
            reject("Error ! Something Went Wrong")
        }
    }, 1000)
});

async function consumePromiseFive() {       //async functions can alse do the job of .then and .catch
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();

// --------------------------- API -------------------
// let url = 'https://jsonplaceholder.typicode.com/users';
// async function getAllUsers() {
//     try {
//         const response = await fetch(url);
//         const data = await response.json();          //converting data in JSON format also takes time so we must have to use await here too
//         console.log(data);
//     } catch (error) {
//         console.log('E:', error);
//     }
// }

// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')             
.then((response) => {                       //TAKE AN ARGUMENT WE NAME IT AS RESPONSE OFTEN
    return response.json();                    
})
.then((data) => {                           
    console.log(data);
})
.catch(() => {
    console.log("Error Encountered");
})

