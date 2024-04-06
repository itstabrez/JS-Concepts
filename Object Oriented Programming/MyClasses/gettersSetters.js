class user{
    constructor( email , password){
        this.email = email;
        this.password = password;
    }

    get email () {
        return this._email.toUpperCase();
    }

    set email (value){
        this._email = value;
    }

    get password(){
        return this._password.toUpperCase();            //IF WE WANT TO GET PASSWORD WE HAVE TO USE DIFFERENT VARIABLE  
    }

    set password(value){                    //IF WE WANT TO SET PASSWORD WE HAVE TO USE DIFFERENT VARIABLE
        this._password = value;
    }
}

const callUser = new user("tabrezamrath@gmail.com" , "tabrez");
console.log(callUser.password);
console.log(callUser.email);