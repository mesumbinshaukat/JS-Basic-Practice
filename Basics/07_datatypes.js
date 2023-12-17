// Primitive Datatype
const id = Symbol(12)
const anotherId = Symbol(12)

const check = id == anotherId

const numbers = 123456789101112131411115n

console.table([id, anotherId, check, typeof id, numbers, typeof numbers])

// Reference Datatype (Non-Primitive)

let countries = ["Pakistan", "USA", "UAE", "UK", "Greenland", "Russia", "Germany"] //Array

let UserDetails = {
    name: "John",
    age: 33,
    country: countries[6],
    isLoggedIn: false
} // Object

let fruits = function(){
    return "Apple"
} //Function

console.table([countries, typeof countries, UserDetails, typeof UserDetails, fruits, typeof fruits])