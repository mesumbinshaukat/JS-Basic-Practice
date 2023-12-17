let _date = new Date()

console.log(_date)
console.log(_date.toISOString())
console.log(_date.toDateString())
console.log(_date.toString())
console.log(_date.toLocaleDateString())
console.log(_date.toLocaleTimeString('default', {
    hour12: "",
    month: "long"
}))
console.log(_date.toTimeString())
console.log(_date.toUTCString())

let myDate = new Date("18-December-2023")

console.log(myDate.toLocaleString())

let date_now = Date.now()
console.log(Math.floor(date_now))