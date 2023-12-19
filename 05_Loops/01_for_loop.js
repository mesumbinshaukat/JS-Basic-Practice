for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
    
}

for (let i = 0; i <= 10; i++) {
    if(i === 10){
        console.log("Detected", i);
    }
    console.log(i);
    
}

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        for (let x = 1; x <= 10; x++) {
            const formula = `${i} * ${x} = ${i*x}`
            console.log(formula);
        }
    }
    console.log(i);
    
}

const heroes = ["Ultron", "Captain America", "Iron Man", "Superman", "Darkseid", "General Zod", "Black Panther", "Hawk-eye", "Hulk", "Thanos"]

console.log(heroes.length);
for (let i = 0; i < heroes.length; i++) {
    if (heroes[i].toString() === "Thanos" || heroes[i].toString() === "Ultron" || heroes[i].toString() === "Darkseid" || heroes[i].toString() === "General Zod") {
        const villain = heroes[i]
        console.log(`Villain detected in array. Villain -: ${villain}`);
        continue;
    }
    console.log(`${i}) ${heroes[i]}`);
    
}

const numbersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

for (let i = 1; i < numbersArr.length; i++) {
    if(numbersArr[i] >= 11){
        console.log(`Loop stoped because it's only limited to 10, and ${numbersArr[i]} detected in array.`);
        break;
    }
    console.log(`${i} x ${numbersArr[i]} = ${i*numbersArr[i]}`);
    
}