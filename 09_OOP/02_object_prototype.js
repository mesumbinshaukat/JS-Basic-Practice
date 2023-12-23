function userDetails(username, userEmail, age){
    this.username = username
    this.userEmail = userEmail
    this.age = age
}

userDetails.prototype.responseName = function () {
    return `Hello, ${this.username}!`
}

userDetails.prototype.responseEmail = function() {
    return `You are registered with this ${this.userEmail} email.`
}
userDetails.prototype.responseAge = function() {
    return `You are ${this.age} years old.`
}
    
const user = new userDetails("Willy", "willi@example.com", 55)

const userOne = new userDetails("Bobby", "bobby@example.com", 30)

console.log(userOne);


// user("Willy", "willi@example.com", 55)
// console.log(user.responseName());
console.log(user.responseName())
console.log(user.responseEmail())
console.log(user.responseAge())

