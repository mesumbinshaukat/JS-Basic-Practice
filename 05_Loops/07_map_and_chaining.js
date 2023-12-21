let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const val1 = num1.map( (num) => num + 10)

console.log(val1);

const val2 = num1
            .map( (num) => num * 10)
            .map( (num) => {return num / 2})
            .filter( (num) => num >= 13 && num <= 40) // This is called chaining.

console.log(val2);