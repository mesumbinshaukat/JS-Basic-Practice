// Operators: ==, >, <, >=, <=, ===, !, !=, ||, &&, !==, ===

const num1 = 5
const num2 = 3
const num3 = num1
const nameOne = "Adam"
const nameTwo = "Luke"
const sameName = nameOne
const emailOne = "info@example.com"
const emailTwo = "support@test.com"
const sameEmail = emailOne
 
if(5 == 5){
    console.log("Execusted 1st Condition");
}

if(num1 > num2){
    console.log(`${num1} is greater than ${num2}`)
}

if(num1 <= num3) console.log(`${num1} is less than or equals to ${num3}`);

if(num2 == "3"){
    console.log(`${num2} is equals to "3"`);
}

if(num2 === "3"){
    console.log(`${num2} value and datatype is same as "3"`);
}else{
    console.log(`${num2} value is same but datatype is not same as "3"`);
}

const newNum = 50

if(num1 >= newNum && num1 <= num3){
    console.log(`${num1} is greater than or equals to ${num2} AND ${num1} is less than or equals to ${num3}`);
}else if(num1 === num3 || num2 !== num3 && newNum >= num1){
    console.log(`This else if condition has been executed.`);
}else{
    console.log("EVERY CONDITION IS FALSE!!!!!!!");
}

const isMale = false

if(!isMale){
    console.log("He is a male.");
}else{
    console.log("He is not a male.");
}