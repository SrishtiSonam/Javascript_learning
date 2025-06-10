// // function will return undefined value 

// function sayMyName(){           
//     console.log("S");
//     console.log("r");
//     console.log("i");
//     console.log("s");
//     console.log("h");
//     console.log("t");
//     console.log("i");
// }

// sayMyName    -   Reference  
// sayMyName()  -   Execution



// function sumOfTwo(num1, num2){          // num1, num2 are parameter
//     console.log(num1+num2);
// }

// // sumOfTwo()       //  NaN         as NO ARGUMENTS ARE THERE
// sumOfTwo(2,4)       // 6
// sumOfTwo("2",4)     // 24
// sumOfTwo(2,"4")     // 24
// sumOfTwo(2,"a")     // 2a
// sumOfTwo(2,null)        // nothing will be displayed

//Tring to store this in a variable
// let result = sumOfTwo(4,8)
// console.log(result);            // undefined 



// Return 
// function returnSumOfTwo(num1, num2){          // num1, num2 are parameter
//     let sum = num1+num2
//     return sum
//     // Unreachable Code
//     console.log(sum);       // this will never be executed as written after return      
// }
// result = returnSumOfTwo(4,8)
// console.log(result); 


// function returnProductOfTwo(num1, num2){
//     return (num1*num2)
// }
// let productResult = returnProductOfTwo(6, 8)
// console.log(productResult);



// undefined, "" - false

// function userLoginMessage(username){
//     if (username === undefined){
//         console.log("Please enter a valid Name");
//         return
//     }
//     return (`${username} just logged in.`)
// }      
// console.log(userLoginMessage("Srishti"));        // Double quotes are important 
// console.log(userLoginMessage(""));        // Blank  -   "  just logged in."
// console.log(userLoginMessage());        // Undefined    -   "undefined just logged in."

// function sayHello(name = "Sam"){        // Setting a default value will never give undefined value
//     return (`Hello ${name}`)
// }
// console.log(sayHello("Shreya"));
// console.log(sayHello());

