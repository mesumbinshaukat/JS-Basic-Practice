let name = "Joseph"
let age = 29

let sentence = `Hello ${name}! You are ${age} years old.` //This `` is called backticks
console.log(sentence)

let string = sentence.toUpperCase()
console.log(string)

string = sentence.toLowerCase()
console.log(string)

string = sentence.endsWith(".")
console.log(string)

string = sentence.includes("to")
console.log(string)

string = sentence.indexOf("Joseph")
console.log(string)

let testing = "    Hello      "
console.log(testing)

string = testing.trim()
console.log(string)

string = sentence.length
console.log(string)

// string = sentence.slice(0, 13)
string = sentence.slice(-22, -1)
console.log(string)

string = sentence.substring(0, 13)
console.log(string)

string = sentence.split(" ")
console.log(string[4])

string = sentence.search(29)
console.log(string)

string2 = sentence.replace(29, 35)
console.log(string2)

let regex = /[A-Z]/g
let string4 = sentence.match(regex)
console.log(string4);