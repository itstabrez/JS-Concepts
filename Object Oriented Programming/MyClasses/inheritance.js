class user {
    constructor(userName){
        this.userName = userName;
    }

    logMe(){
        console.log(`Username is ${this.userName}`);
    }
}

class Teacher extends user{
    constructor(userName , email , password){
        super(userName);
        this.email = email;
        this.password = 1234;
    }

    addCourse(){
        console.log(`A new course was added by ${this.userName}`);
    }
}

const callObj = new Teacher("Anonymus" , "tabrezjamui@gmail.com", "12345");

callObj.addCourse();

const newCall = new user ("Tabrez");     //newCall don't have teacher class access so can't access any method of teacher    
newCall.logMe();           


console.log(callObj instanceof user);
console.log(callObj instanceof Teacher);        //Instance of is a keyword used to know if one object is an instance of another object or not


