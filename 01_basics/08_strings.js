const name = "Srishti"
const repoCount = 10

// console.log(name+" has repo. count of "+repoCount);  ----    This sytle is not prefered.



console.log(`Hello everyone, my name is ${name} and I have ${repoCount} repositories.`);
// Modern way of writing

const gameName = new String("Caterpillar_Game")
// New way to declaring strings in javascripts.
// Here string is an object. 
// Here we get length properties as well as various other methods which are under prototype.

console.log(gameName[3]);
console.log(gameName.__proto__);    
// Here we get an empty object for it but in browser/console we get many things.

console.log(gameName.__proto__.length);    // 0 - length of object proto

console.log(gameName.length);    
console.log(gameName.toUpperCase);    //[Function: toUpperCase]
console.log(gameName.toUpperCase());
// Original string does not get changed. {stack-primitive}
console.log(gameName.charAt(5));
console.log(gameName.indexOf('l'));

const game = gameName.substring(0,4)
// Storing into a variable.
console.log(game);
/*   For negative values substrings will not give error 
    but will take values on its own like start-0, end-lats   */

let anotherString = gameName.slice(0,4)        
// In this we can give negative values unlike substring.

let newStringOne = "    Srishti    "
console.log(newStringOne);      //      Srishti
console.log(newStringOne.trim());       // Srishti
// Check trim javascript mdn

let url = "https://hello.com/hello%20world"
console.log(url.replace('%20',"  "));       // https://hello.com/hello  world
console.log(url.includes("hello"));        // true

const splitSeparator = new String("Hello-World-Srishti-this-side")
console.log(splitSeparator.split('-'))

/* Write about the methods of strings for their working, from console and mdn*/





