// class User {
//     constructor(username, password, age){
//             this.username = username
//             this.password = password
//             this.age = age
        
//     }
    
//     greetUser(){
//         return `Welcome, ${this.username}`
//     }
// }


// const userDetails = new User("Warren", "CannotHackMyPass", 30)

// console.log(userDetails);
// console.log(userDetails.greetUser());


function User(username, password, age){
    this.username = username
    this.password = password
    this.age = age
}

User.prototype.greetUser = function () {
    return `Welcome, ${this.username}!`
}

const userDetails = new User("Warren", "CannotHackMyPass", 30)

console.log(userDetails);
console.log(userDetails.greetUser());