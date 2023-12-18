console.log(myName("Chris"));


function myName(name) {
    return name
}

// console.log(myName("Chris"));

console.log(userName("Borris")); // It will throw an error because we're holding the function in a variable

const userName = function (name){
    return name
}

// console.log(userName("Borris"));