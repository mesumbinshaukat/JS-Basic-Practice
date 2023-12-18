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
