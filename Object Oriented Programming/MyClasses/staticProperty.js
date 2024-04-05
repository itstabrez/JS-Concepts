class user{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }

    static createId(){              //Static keyword restrict access for instanciate object 
        return `123`;
    }
}

const tabrez = new user ("Tabrezzzz");

// console.log(tabrez.createId());

class teacher extends user{
    constructor(username , email){
        super(username);                        //Super Keyword take their passed arguments to the class which is extended
        this.email = email;
    }
}

const ipad = new teacher ("Iphone" , "@google.com")

ipad.logMe();

console.log(ipad.createId());