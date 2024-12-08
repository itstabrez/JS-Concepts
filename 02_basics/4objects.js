//Singleton
const tinderUser = new Object();   //Constructor method of initialization

// console.log(tinderUser);

//This is not Singleton object
const tinderUser2 = {}  

tinderUser2.id = "A133";
tinderUser2.name = "Tabrez";

// console.log(tinderUser2);

// OBJECTS INSIDE OBJECTS KNOWN AS OBJECTS NESTING
const regularUser = {
    email: "tabrezamrath@gmail.com",
    fullName: {
        userFullname: {
            firstName: "Tabrez",
            lastName: "Alam"
        }
    }
}

// console.log(regularUser.fullName);

//ACCESSING NESTED OBJECTS

// console.log(regularUser.fullName.userFullname.firstName);  

const obj1 = {
    1: "a",
    2: "b",
};
const obj2 = {
    3: "c",
    4: "d",
};


//Can add two object like this 

// const obj4 = Object.assign(obj1 , obj2);    

  //Better to add two object like this

// const obj5 = Object.assign({} , obj1 , obj2);  

// console.log(obj4);
// console.log(obj5);
    
//In Latest trend we will use this to concatenate two objects
const obj3 = {...obj1 , ...obj2};   
 //... this is called spread operator
console.log(obj3);                 

console.log(Object.keys(tinderUser2));   //IT WILL RETURN ARRAY OF KEYS WHICH WILL BE HELPFUL IN FUTURE PROJECTS
console.log(Object.values(tinderUser2));    //IT WILL RETURN ARRAY OF VALUES 

console.log(Object.entries(tinderUser2)); //IT WILL RETURN SEPARATE ARRAY OF EACH ELEMENTS KEYS AND VALUE

console.log(Object.hasOwnProperty("name"));     //WILL FIND IF THE KEY WHICH IS PASSED AS AN ARGUMENTS ARE PRESENT OR NOT

const multiObj = [          //WILL CREATE ARRAY OF OBJECTS
{
    name: "Anonymus",
},
    {
        name: "Haider"
    },
    {
        name: "Tabrez"
    }  
]

console.log(multiObj);



