const discriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(discriptor);

const user = {
    username: "Mesum",
    email: "info@mesum.online"
}

const userDiscriptor = Object.getOwnPropertyDescriptor(user, "username")
// console.log(userDiscriptor);

Object.defineProperty(user, "username", {
    writable: false,
    enumerable: false,
    configurable: false
})

const usernameDiscriptor = Object.getOwnPropertyDescriptor(user, "username")
console.log(usernameDiscriptor);

for (const [key, value] of Object.entries(user)) {
    console.log(`Key: ${key} \t | \t Value: ${value}`);
}