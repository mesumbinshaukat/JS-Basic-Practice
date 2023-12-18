let socialMediaPlatforms = ["Instagram", "Facebook", "Snapchat", "Twitter", "LinkedIn"]
let anotherSocialMediaPlatforms = ["YouTube", "Rumble", "Pinterest", "TikTok", "Threads"]

// socialMediaPlatforms.push(anotherSocialMediaPlatforms) // Not a good practice
// console.log(socialMediaPlatforms)

let nestedSocialMediaPlatformsArray = socialMediaPlatforms.concat(anotherSocialMediaPlatforms)

console.log(nestedSocialMediaPlatformsArray);

let bestArrayOfSocialMediaPlatforms = [...socialMediaPlatforms, ...anotherSocialMediaPlatforms]

console.log(bestArrayOfSocialMediaPlatforms);

const newArr = [1, 2, 3, [5, 6, 7], 8, 9, 10, [11, 12, [13, 14, 15], 16], 17, [18, 19, [20, 21, [22, 23, 24, [25, 26, 27], 28], 29], 30], 31]

console.log(newArr);

const spreadArr = newArr.flat(Infinity)

// console.table([spreadArr]);
console.log(spreadArr)

const name = "Solomon"
console.log(Array.isArray(name));
console.log(Array.from(name));

const firstName = "Augustus"
const middleName = "Theodore"
const lastName = "Jr."

console.log(Array.of(firstName, middleName, lastName))