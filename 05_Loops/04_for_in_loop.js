const MyObj ={
    name: "Krillin",
    age: 19,
    isMale: true,
    favColor: "black"
}

for (const key in MyObj) {
    console.log(`${key}: ${MyObj[key]}`);
}

const arr = ["Chair", "Table", "Light", "Wire", "TV", "Laptop"]

for (const key in arr) {
    console.log(`${key}) ${arr[key]}`);
}