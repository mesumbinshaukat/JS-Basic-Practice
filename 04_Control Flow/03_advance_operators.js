// Nullish Coalescing Operator
const val1 = null // Falsy 
const val2 = 1 // Truthy
const val3 = undefined // Falsy
const val4 = [] // Truthy
const val5 = {} // Truthy
const val6 = NaN // Falsy
const val7 = false // Falsy
const val8 = true // True
const val9 = "" // Falsy
const val10 = -0 // Falsy
const val11 = 0n // Falsy

console.table([val1, val2, val3, val4, val5, val6, val7, val8, val9, val10, val11])

const result = val1 ?? val2 // This ?? is called nullish coalescing operator.

//Read more at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing

const anotherResult = val1 ?? val2 ?? val3 ?? val4 ?? val5 ?? val6 ?? val7 ?? val8 ?? val9 ?? val10 ?? val11

console.log(result);

console.table([anotherResult])

// Ternary Operator

const num1 = 4
const num2 = 6

num1 >= num2 ? console.log(`${num1} is greater than or equals to ${num2}`) : console.log(`${num1} is less than ${num2}`); // This "condition ? true : false " is called as ternary expression or ternary operator.

//Read more at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator


// Truthy & Falsy

if(val1) console.log(`IT WORKS ${val1}`);
if(val2) console.log(`IT WORKS ${val2}`);
if(val3) console.log(`IT WORKS ${val3}`);
if(val4) console.log(`IT WORKS ${val4}`);
if(val5) console.log(`IT WORKS ${val5}`);
if(val6) console.log(`IT WORKS ${val6}`);
if(val7) console.log(`IT WORKS ${val7}`);
if(val8) console.log(`IT WORKS ${val8}`);
if(val9) console.log(`IT WORKS ${val9}`);
if(val10) console.log(`IT WORKS ${val10}`);
if(val11) console.log(`IT WORKS ${val11}`);