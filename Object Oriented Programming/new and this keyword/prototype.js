let myName = "Tabrez     ";         //IF I ADD SPACES, JS WILL CONSIDER THAT ALSO WHEN GIVING LENGTH OF THIS STRING

console.log(myName.length);             


const myHeroes = ["ShaktiMan" , "Krrish"];

let heroPower = {
    shaktiMan: "rotating",
    Krrish: "Long Jump",

    getKrrishPower: function () {
        console.log(`Krrish Power is ${this.Krrish}`);
    }
}

Object.prototype.tabrez = function () {
    console.log("Tabrez is present in all objects");
}

// heroPower.tabrez();

// myHeroes.tabrez();

// INHERITANCE

const user = {
    username: "Unknown"
}

const teacher = {
    makeVideo: true
}

const teachingAssistant = {
    isAvailabale: false,
}

const taSuuport = {
    makeAssignment: "JS ASSIGNMENT",
    fullTime: true,
    __proto__: teacher          //IN OLD DAYS THIS '__proto__' Syntax was used to inherit one object elemnt to another object
}

teachingAssistant.__proto__ = user;
// console.log(teachingAssistant.username);    //EARLIER WE CAN INHERIT OBJECT ELEMENT LIKE THIS ALSO
// console.log(taSuuport.makeVideo);

// Modern Syntax

Object.setPrototypeOf(teacher , user);      //This is modern Syntax of inheriting element
// console.log(teacher.username);

const string = "cleanCode   ";

String.prototype.trueLength = function (){
    console.log(this);
    console.log(`True Length is ${this.trim().length}`);
}

string.trueLength();

"willPrintThis".trueLength();           //NOW WE CAN USE trueLength Property in any string as we injected this in all strings
"new".trueLength();