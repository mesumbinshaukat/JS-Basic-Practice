let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8,]
let newArr = new Array("Alexander", "John", "Raphaela", "George", "Karl")

console.log(`${arr[0]}) ${newArr[0]}`)
console.table([arr, typeof arr])
console.table([newArr, typeof newArr])

arr.push(9)
console.log(arr)
arr.pop()
console.log(arr)
arr.unshift(-1)
console.log(arr)
arr.shift()
console.log(arr)
arr.shift()
console.log(arr)

const mySlice = arr.slice(1, 3) // Slice manipulates copy of the data
console.log(mySlice)
console.log(arr)

const mySplice = newArr.splice(1, 3) // Splice manipulates original data
console.log(mySplice)
console.log(newArr)