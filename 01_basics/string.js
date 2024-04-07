let name="Tabrez "  //One way of initializing string

//specifying data type after new keyword will assure in console that what data type it is

const gameName = new String ('BGMI-India')  //Another Way of initializing string        


console.log(gameName)
console.log(gameName[0])
console.log(gameName.__proto__)         //this will return an object of prototypes
console.log(gameName.length)                    
console.log(gameName.toLowerCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf("I"))

const newString = gameName.substring(0,2)
const anotherString = gameName.slice(-9,6)

console.log(anotherString)
console.log(newString)

const againString = new String('        Tabrez    ')

console.log(againString.trim())  //REMOVE ALL SPACES

const url = "tabrezportfolio%20new.com"

console.log(url.replace('%20','-'))

console.log(url.includes('anonymus'))

console.log(gameName.split('-'))

const repoAccount = 14

console.log(name + repoAccount + " Value")  //OUTDATED SYNTAX

console.log(`Hello Guys My name is ${name} hope you all are doing well and my ${repoAccount} is stored in GitHub`)  //Latest Syntax
