const id = Symbol(1)
const User = {
    [id]: 1,
    name: "Tulay",
    isMale: true,
    age: 18,
    siblings: ["Augustus", "Bale", "Chris", "Ryan"],
    "citizen of": "United States",
    email: "info@tulay.com"
}

console.log("Id", id)
console.log(typeof id)
console.log(User);
console.log(typeof User);
console.log(User.name);
console.log(User[id]);
console.log(User["citizen of"]);

User.email = "support@tulay.com"
console.log(User.email);

// Object.freeze(User) // This will not stop any data from inserting in the User class
User.name = "Donald"
console.log(User.name);

User.msg = function(){
    const message = `Hello, I'am ${User.name}, and I agree that I'm ${User.age} years old.`;
    return message;
}

console.log(User.msg);
console.log(User.msg());