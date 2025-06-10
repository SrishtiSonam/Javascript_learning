// let a = 10;
// const b = 20;
// var c = 30;
// let d = 40;
// console.log(a);
// console.log(b);
// console.log(c);


// {}      // This is what we call scope. Function, if-else, loops, 
                // not in object there it is for object declaraction else where it is scope


// if (true) {
//     let x = 100
//     const y = 90
//     var z = 80
//     var c = 30
// }

// if (!false){
//     c = 3000
//     d = 200                 // variable is not declared 
//     let a = 100             // declared with let 
//     console.log(`a: ${a}`);
//     console.log(`d: ${d}`);
// }

// console.log(`d: ${d}`);
// console.log(`a: ${a}`);     // 100  is a is not declared in scope with let. else ans will be 10 global.  
// // console.log(x);          // Not defined
// // console.log(y);          // Not defined
// console.log(z);         // 80
// console.log(c)          // 30



// /*  Global scope is available for block but vice-versa should not be there. */

// Global scope is different in node environment and in console environment.



// function one(){
//     const name = "Srishti"
//     function two(){
//         const website = "youtube"
//         console.log(name);
//     }
//     // console.log(website);        // not defined
//     two()
// }
// one()


// /* Whenever a function is declared or called it create its different call stack / scope.     */


// if (true) {
//     const username = "Srishti"
//     if (username === "Srishti"){
//         let website = " youtube "
//         console.log(username + website);
//     }
//     // console.log(website)        // we can access if memory is not declared or something like var
// }
// // console.log(username)       // username is not defined



// ********************************************************************************
// console.log(addOne(5))          // Earlier calling will not show any error in js 
// function addOne (num) {
//     return num+1
// }
// // In javascript the variables can hold any thing 
// console.log(addTwo(5))              // This will show error 
// const addTwo = function (num) {         // It is a function known as expression.
//     return num+2
// }