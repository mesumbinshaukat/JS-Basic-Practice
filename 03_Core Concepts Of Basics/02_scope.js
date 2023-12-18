var num1 = 34
let num2 = 450
const num3 = 50

if(!false){
    var num1 = 10
    let num2 = 20
    const num3 = 30
    console.log("INTERNAL VAR", num1);
    console.log("INTERNAL LET", num2);
    console.log("INTERNAL CONST", num3);
}

console.log(num1);
console.log(num2);
console.log(num3);