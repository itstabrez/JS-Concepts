const user = {
    _email: "tabrez@gmail.com",
    _password: "abs",

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value;
    }
}

const callUser = Object.create(user);
console.log(callUser.email);