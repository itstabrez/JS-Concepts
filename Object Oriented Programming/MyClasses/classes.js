// ES6

class User {
    constructor(userName , email , password){
        this.userName = userName;
        this.email = email;
        this.password = 123;
    }

    encrypytPassword(){
        return `${this.password}abc`;
    }

    changeUserName(){
        return `${this.userName.toUpperCase()}`
    }
}

const callOne = new User ("Tabrez" , "tabrezamrath@gmail.com" , "123");

console.log(callOne.encrypytPassword());
console.log(callOne.changeUserName());