Object.prototype.sayMyName = function () {
    return `My name is ${this}`
}

const uName = "Mesum"

console.log(uName.sayMyName());

Object.prototype.greetMsg = function () {
    return `Welcome, ${this}!`
}  

const arrNames = ["Solomon", "Augustus"]

console.log(arrNames[0].greetMsg());

String.prototype.exactLengthCheck = function(){
    return this.trim().length
}

const username = "Gordon       "
console.log("Length checker with spaces:",username.length);
console.log("Length check with exactLengthCheck() method:", username.exactLengthCheck());

// Inheritance

const UName = {
    fName: "James"
}

const UMName = {
    mName: "William"
}

const ULName = {
    lName: "Jr."
}

const id = Symbol(1)

const UserDetails = {
    [id]: 2,
    isLoggedIn: false,
    __proto__: [UName, UMName, ULName]
    
}

console.log(UserDetails.__proto__[1].mName.greetMsg());

const FName = {

}

Object.setPrototypeOf(FName, UName, UMName)

console.log(FName.mName)