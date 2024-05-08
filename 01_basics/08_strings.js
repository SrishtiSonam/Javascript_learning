const name = "Srishti"
const repoCount = 10

// In JS '' and "" are same in case of strings.
// String Concatenation --> str1 + str2         
/*
    #### Check for comma
    let n = 'h'
    let m = 'k'
    let x = n+m         -->     'hk'
    let y = n,m         -->     'k'
*/
// console.log(name+" has repo. count of "+repoCount);  ----    This sytle is not prefered.

console.log(`Hello everyone, my name is ${name.toUpperCase} and I have ${repoCount} repositories.`);
// Modern way of writing    -   StringInterPulation

const gameName = new String("Caterpillar_Game")         // Objects of JS
// New way to declaring strings in javascripts.
// Here string is an object. 
// Here we get length properties as well as various other methods and functions which are under prototype.

console.log(gameName[3]);       // Key value Pair
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
    but will take values on its own like start-0, end-last   */

let anotherString = gameName.slice(0,4)        
// In this we can give negative values unlike substring.

let newStringOne = "    Srishti    "
console.log(newStringOne);      //      Srishti
console.log(newStringOne.trim());       // Srishti
// Check trim javascript mdn    -   trimStart()   and trimEnd()     -   Whitespace and new line terminators.

let url = "https://hello.com/hello%20world"
console.log(url.replace('%20',"  "));       // https://hello.com/hello  world
console.log(url.includes("hello"));        // true


// .toString - Method       &&      .toString() - Run/Execute a method.


const splitSeparator = new String("Hello-World-Srishti-this-side")
console.log(splitSeparator.split('-'))          // Returns array    -   Arguments -> {separator, limit}



/*      ----------- Write about the methods of strings for their working, from console and mdn  -----------     */

