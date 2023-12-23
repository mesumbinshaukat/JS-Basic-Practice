function userId (id) {
    this.id = id
    console.log("Working");
}

function user(id, username, email, age, isLoggedIn) {
    userId.call(this, id)

    this.username = username
    this.email = email 
    this.age = age
    this.isLoggedIn = isLoggedIn

}

const id = Symbol(1)
const username = "Rambo"
const email = "rambo@example.com"
const age = 28
const isLoggedIn = true

const userInfo = new user(id, username, email, age, isLoggedIn)

console.log(userInfo)