const User = {
    _username: "Mesum",
    _email: "info@mesum.online",

    get email() {
      return this._email.toUpperCase()  
    },
    set email(value) {
        this._email = value
    },
    get username() {
      return this._username.toUpperCase()  
    },
    set username(value) {
        this._username = value
    }
}

const newUser = Object.create(User)
console.log(newUser.username);
console.log(newUser.email);