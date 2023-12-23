const appUser = {
    userName: "Lucy",
    gender: "Femal",
    age: 19,
    isLoggedIn: false,
    logInCount: function(count){
        return `${this.userName}, you have ${count} times logged in since registered.`
    }
}


console.log(appUser.logInCount(5));

const User = function (username, userPass, userEmail) {
    this.username = username
    this.userPass = userPass
    this.userEmail = userEmail

    return this
}

const userOne = new User("William", "strong_Pass123", "william@example.com")
const userTwo = new User("Robert", "advancedPass321!", "info@example.com")

// console.log(userOne);
// console.log(userTwo)