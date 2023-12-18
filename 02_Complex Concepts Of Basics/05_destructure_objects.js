const User = {
    fullName: "Evan Mathew",
    isLoggedIn: true,
    age:14,
    course: "Front-end Web Development"
}

console.log(User);

const {fullName: name, isLoggedIn: status} = User

console.log(name);

console.log(`User Name: \t${name} \nUser Log In Status: \t${status}`)