function myName(){
    console.log("Mesum")
}
myName()

function addNumbers(num1, num2){
    const result = num1 + num2
    console.log(result); 
}
addNumbers(5, 100)

const result = addNumbers(2, 10)
console.log("Result", result) // Expected output is undefined.

function multiplyResultBy100(num1, num2){
    const res = num1 + num2
    return res * 100
}
multiplyResultBy100(5, 2) // This code will not execute.
console.log(multiplyResultBy100(5, 5));

function basicCondition(name){
    if(!name){
        console.log("Please enter your name")
        return "No name"
    }
    return `Hello, ${name}`;
}
console.log(basicCondition("Mesum"));

function calculateQty(qty1, qty2, ...allQty){ //This ... is called rest operator
    return `First quantity: ${qty1} \nSecond quantity: ${qty2} \nAll Quantity: ${allQty}`
}
console.log(calculateQty(200, 500, 3000, 900, 34500, 10035));

const User = {
    name: "Johnson",
    age: 18,
    course: "Backend Web Development"
}

function userInfo(obj){
    return `Hello, ${obj.name}! You're ${obj.age} years old and you're enrolled in ${obj.course} course.`
}

console.log(userInfo(User));

const numbers = [100, 200, 500, 600]

function myNumber(obj){
    return obj[2]
}

console.log(myNumber(numbers));