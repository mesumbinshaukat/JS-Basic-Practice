let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numb = num1.forEach((num)=>{return num}) //ForEach can't return values...

console.log(numb);

let result = num1.filter((nums) => nums >= 1)

console.log(result);

result = num1.filter((nums) => {return nums > 4})

console.log(result);

num1.forEach( (nums) => {
    if(nums >= 1 && nums < 6){
        console.log(nums);
    }
})

const emptyArr = []

num1.forEach((numbers) => {
    if(numbers <= 10){
        emptyArr.push(numbers)
    }
})

console.log(emptyArr);

const novel = [
    {
        novel: "Novel-1",
        author: "Robert Jr.",
        publication_year: 2016,
        edition: 2
    },
    {
        novel: "Novel-2",
        author: "Chris Downey",
        publication_year: 2005,
        edition: 1
    },
    {
        novel: "Novel-3",
        author: "John Hemsworth",
        publication_year: 1995,
        edition: 4
    },
    {
        novel: "Novel-4",
        author: "Bale Ramond",
        publication_year: 2024,
        edition: 6
    },
    {
        novel: "Novel-5",
        author: "William Alex",
        publication_year: 2021,
        edition: 2
    },
    {
        novel: "Novel-6",
        author: "Jonhson Jutin",
        publication_year: 1980,
        edition: 5
    },
    {
        novel: "Novel-7",
        author: "Augustus Theodore",
        publication_year: 2003,
        edition: 6
    },
    {
        novel: "Novel-8",
        author: "Solomon Bieber",
        publication_year: 2000,
        edition: 8
    },
    {
        novel: "Novel-9",
        author: "Hugo Raphael",
        publication_year: 2008,
        edition: 6
    },
    {
        novel: "Novel-10",
        author: "Martin Karl",
        publication_year: 2012,
        edition: 3
    },
]

console.log(novel);

const novel_detail = novel.filter( (novels) => {
    return novels.publication_year >= 2005 && novels.edition >= 3
})

console.log(novel_detail);