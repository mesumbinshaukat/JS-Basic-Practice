class User {
    constructor(username){
        this.username = username
    }

    greetings(){
        return `Welcome ${this.username}`
    }
}

class MoreDetails extends User {
    constructor(username, age, gender){
        super(username)
        this.age = age
        this.gender = gender
    }

    details(){
        return `Username: ${this.username} \nAge: ${this.age} \nGender: ${this.gender}`
    }
}

const userDetails = new MoreDetails("Thomas", 19, "Male")

console.log(userDetails);
console.log(userDetails.details());
console.log(userDetails instanceof User);