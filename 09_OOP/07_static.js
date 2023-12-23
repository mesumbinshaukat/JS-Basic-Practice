class User {
    constructor (username) {
        this.username = username
    }

    static sayHi () { //Static keyword will make this method limited to only this class scope, nor we can inherit this exact method.
        return `Hi, ${this.username}`
    }
}

const userInfo = new User("John Wick")

// console.log(userInfo.sayHi()); //This will throw an error.
console.log(userInfo.username);