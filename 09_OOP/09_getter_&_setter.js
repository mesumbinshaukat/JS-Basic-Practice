class User {
    constructor (username, email){
        this.username = username
        this.email = email
    }

    get username () {
        return `Username: ${this._username} `
    }
    set username (val){
        this._username = val
    }

    get email (){
        return `Email: ${this._email}`
    }
    set email (value) {
        this._email = value
    }

   

}

const newUser = new User("David", "davidmartin@example.com")

console.log(newUser.email, newUser.username);