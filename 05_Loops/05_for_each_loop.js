const names = ["John", "Winston", "William", "Alfred", "Donnie"]

let count = 1
names.forEach(function (name) {
    console.log(`${count}) ${name}`);
    count++
})

count = 1

names.forEach((name)=>{
    console.log(`${count}) ${name}`);
    count++
})

count = 1

function fName(name){
    console.log(`${count}) ${name}`);
    count++
}

names.forEach(fName)

count = 1
names.forEach((name) => (
    console.log(`${count}) ${name}`),
    count++
))


names.forEach((name, index, arr) => (
    console.log(`${index}) ${name} <=:(-):=> ${arr}`)
))

const proLang = [
    {
        langName: "JavaScript",
        langExtention: "js"
    },
    {
        langName: "Python",
        langExtention: "py"
    },
    {
        langName: "Ruby",
        langExtention: "rb"
    },
    {
        langName: "Objective-C",
        langExtention: "c"
    }
]

proLang.forEach((params) => {
    console.table([`Programming Language:- ${params.langName}`, `${params.langName} extention:- ${params.langExtention}`])
})