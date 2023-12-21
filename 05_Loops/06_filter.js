let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const numb = num1.forEach((num)=>{return num}) //ForEach can't return values...

// console.log(numb);

// let result = num1.filter((nums) => nums >= 1)

// console.log(result);

// result = num1.filter((nums) => {return nums > 4})

// console.log(result);

// num1.forEach( (nums) => {
//     if(nums >= 1 && nums < 6){
//         console.log(nums);
//     }
// })

const emptyArr = []

num1.forEach((numbers) => {
    if(numbers <= 10){
        emptyArr.push(numbers)
    }
})

console.log(emptyArr);