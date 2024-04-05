const descriptor = Object.getOwnPropertyDescriptor(Math , "PI");

// console.log(descriptor);


// console.log(Math.PI);


const keyboard = {
    name: "prodot Keyboard",
    price: '250',
    isAvailable: true,

    function (){
        console.log("Keyboard is expensive");
    }

}

console.log(Object.getOwnPropertyDescriptor(keyboard ,"name"));

Object.defineProperty(keyboard , "name", {
    // writable: false,
    enumerable: false                           //IF THIS ENUMERABLE IS FALSE WE CANNOT ITERATE ON THE DEFINED PRPERTY HERE THE PROPERTY IS name SO WE CANNOT ITERATE ON NAME IF THIS IS FALSE
})

// console.log(Object.getOwnPropertyDescriptor(keyboard ,"name"));

for (let [key , value] of Object.entries(keyboard)) {
    if (typeof value !== "function") {              //IF THIS CHECKLIST WILL NOT BE HERE FUNCTION WILL ALSO GET PRINTED IN THIS LOOP
        console.log(`${key} : ${value}`);
    }
}

