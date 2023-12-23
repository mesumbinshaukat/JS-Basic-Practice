function User(username, email) {
    this._username = username
    this._email = email

    Object.defineProperty(this, 'username', {
        get: function (){
            return `Username: ${this._username.toUpperCase()}`
        },
        set: function (val){
            this._username = val
        }
    })
    Object.defineProperty(this, 'email', {
        get: function (){
            return `Email: ${this._email.toUpperCase()}`
        },
        set: function (val){
            this._email = val
        }
    })
}

const newUser = new User("Mesum", "info@mesum.online")

console.log(newUser.email);
console.log(newUser.username);