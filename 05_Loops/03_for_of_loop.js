const arr = ["Chair", "Table", "Light", "Wire", "TV", "Laptop"]
for (const things of arr) {
    console.log(things);

}

const fullRandomName = "Robert Downey Jr."
count = 1

for (const fRName of fullRandomName) {
    console.log(`${count}) ${fRName}`);
    count ++;
}

let map = new Map()
map.set("Pk", "Pakistan")
map.set("UAE", "United Arab Emirates")
map.set("Mal", "Malysia")
map.set("Thai", "Thailand")

console.log(map.keys());
console.log(map.values());

for (const [key, val] of map) {
    console.log(`${key} stands for: ${val}`);
}
