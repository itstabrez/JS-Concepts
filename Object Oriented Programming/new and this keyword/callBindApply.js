function setUserName (userName){
    this.userName = userName;
}

function createUser (userName , email , Password){
    setUserName.call(this , userName);
    this.email = email;
    this.Password = Password;
}

const tabrez = new createUser("tabrez" , "tabrez@gmail.com" , 321);

console.log(tabrez);