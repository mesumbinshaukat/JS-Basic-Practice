/*
  |-------------------------------------------------------------------|
  |+++++++++++->->->->->->->->->->Numbers<-<-<-<-<-<-<-<-<-+++++++++++|
  |-------------------------------------------------------------------|
  */
console.log("NUMBERS")
const num1 = new Number(8899007766)
const num2 = 9900665544
const typeOf1 = typeof(num1)
const typeOf2 = typeof(num2)

console.log(`Type of this number => ${num1.toString()} is => ${typeOf1}.\nType of this number => ${num2} is => ${typeOf2}`)

const num3 = 7788.5589
console.log(num3.toPrecision(6))

console.log(num3.toLocaleString("en-Pk"))
console.log(num3.valueOf())
console.log(num3.toFixed(2))
console.log(num3.toExponential(5))

/*
  |------------------------------------------------------------------|
  |++++++++++++->->->->->->->->->->Math<-<-<-<-<-<-<-<-<-++++++++++++|
  |------------------------------------------------------------------|
  */

console.log("MATHS")

console.log(Math.round(5.5))
console.log(Math.ceil(4.2));
console.log(Math.floor(2.9));
console.log(Math.min(2, 5, 10, 3.2, 4, 10.9, 99, 100, 100.9, 56));
console.log(Math.max(2, 5, 10, 3.2, 4, 10.9, 99, 100, 100.9, 56));
console.log(Math.sqrt(25))
console.log(Math.pow(5, 2))

console.log(Math.random())
console.log(Math.random() * 10)
console.log((Math.random() * 10) + 1)
console.log(Math.floor((Math.random() * 10) + 1))

const min = 1000
const max = 9999

console.log(Math.floor(Math.random() * (max - min)) + min)

