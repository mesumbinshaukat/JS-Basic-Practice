const UserForm = {}

UserForm.id = '112acb09m1'
UserForm.name = "John"
UserForm.age = 27
UserForm.registered = true

console.log(Object.keys(UserForm));
console.log(Object.values(UserForm));
console.log(Object.entries(UserForm));
console.log(UserForm['age']);

console.log("\nNEW LINE \n");

const _id = Symbol(1)
const Users = {
    [_id]: 1,
    fullName: {
        fName: "Mesum",
        mName: "Bin",
        lName: {
            fName: "Mohammad",
            mName: "Shaukat",
            lName: "Ali"
        }
    },
    email: "masumbinshaukat@gmail.com",
    isLoggedIn: false
}

console.log(Users);
console.log(Users.fullName);
console.log(Users.fullName.lName);
console.log(Users.fullName.lName.fName);

const category1 = ["Apple", "Mango", "Pineapple", "Custardapple", "Strawberry"]
const category2 = ["Cabbage", "Potato", "Onion", "Tomato", "Garlic", "Turnip"]

const fishes = ["Moby Dick", "X-ray Fish", "Jellyfish", "Don Lino", "Flipper", "Oscar"]
const sharks = ["Bullhead Sharks", "Birdbeak Dogfish", "Bull Shark", "Blue Shark", "Angel Shark"]

const category3 = ["Monkey", "Lion", "Tiger", "Xhorse", "Giraffe", "Elephant"]
const category4 = ["Shark", "Snake", "Anaconda", "Crocodile", "Turtle", {
    fishes: fishes,
    sharks: sharks
}]

const Categories = [
    {
        edibles: {...category1, ...category2},
        animals: Object.assign({}, category3, category4)
    },
    {
        easyProgrammingLanguages: ["Python", "JavaScript", "Ruby", "Kotlin", "Dart"],
        difficultProgrammingLanguages: ["C++", "Objective-C", "Java", "C#", "GO", "F#"]
    }
]
console.log("\nNEW LINE...\n\n");
console.log(Categories[0].edibles[1]);
console.log(Categories[0].animals);

const finalResult = {...Categories[0].animals, ...Categories[0], ...Categories[0].difficultProgrammingLanguages, ...Categories[0].easyProgrammingLanguages}

console.log(`This is the final result: \n \t${finalResult}`);

const test = Object.assign(finalResult)
console.log("Test",test);
console.log(Object.keys(test));
console.log(test.edibles);
console.log(test.animals);
console.log(Object.keys(test.animals));
console.table([test.animals[2]])
console.table([test.animals[5]])
console.log(Object.keys(test.animals[5]));
console.table(test.animals[5].fishes)
console.table(test.animals[5].sharks)