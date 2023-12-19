// IIFE: Immediately Invoked Function


(function myName(name = "Mesum"){
    console.log("Hello", name);
})(); // This is called Named IIFE

((name)=>{
    console.log(`Hello, ${name}!`);
})("Winston"); // This is called just IIFE
