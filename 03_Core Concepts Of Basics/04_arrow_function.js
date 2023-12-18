// THIS
const User = {
    username: "James",
    age: 23,
    greetingMsg: function(){
        console.log("Checking", this);
        return `Hello, ${this.username}! You are ${this.age} years old.`
    },
}

console.log(User.greetingMsg());
User.username = "Michael"
console.log(User.greetingMsg());

console.log(this);

function userName(name){
    const username = name
    // return this.username // We can't use THIS for calling variables in function scope, but we can use it in objects/classes
    // return this // We can clearly see all the methods which are available to use in function
    return username
    
}
console.log(userName("Sophie"));

// Arrow Function
const addNumber = (num1, num2) => {
    return num1 + num2
}
console.log(addNumber(3, 4))

const printMyName = () => "Mesum"
console.log(printMyName());

const anyName = () => ("Jackson")
console.log(anyName());

const printObject = () => ({name:"William", age: 15})
console.log(printObject());

const printArray = () => ([12, 14, 19, 100, 50, 999])
console.log(printArray());