/*      'this'    with   objects     */

// const user = {
//     name : "Srishti",
//     price : 999,
//     welcomeMessage : function(){
//         console.log(`${this.name}, welcome to website.`);      // Refering current context  -  this - 'user'
//         console.log(this);      //    welcomeMessage: [Function: welcomeMessage]
//     }
// }

// user.welcomeMessage     // Nothing displays
// user.welcomeMessage()       // Srishti, welcome to website.
// name = "Shreya"
// user.welcomeMessage()       // Srishti, welcome to website.
// user.name = "Shreya"    // Changing the context 
// user.welcomeMessage()       // Shreya, welcome to website.


// console.log(this);      // {} - no context under global for node environment.


/*  In window, console.log(this) => window  */




/*      'this'    with   functions     */

// function one() {
//     console.log(this)
// }
// one()
/*
<ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 75.59850001335144,
      nodeStart: 5.948599934577942,
      v8Start: 13.823599934577942,
      bootstrapComplete: 55.097999930381775,
      environment: 29.546800017356873,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1692856473410.061
  },
  fetch: [AsyncFunction: fetch]
}
*/

 

// function two() {
//     let name = "Srishti" 
//     console.log(this.name)          // undefined - does not work with functions
// }
// two()



// /*          Different ways of declaring functions         */

// function type1() {
//     console.log("This is type 1");
//     console.log(this)                       // long value of this
// }
// type1()

// // resultType2 = function type2() {
// //     return("This is type 2");
// // }
// function type2() {
//     return(this);                           // long value of this
// }
// let resultType2 = type2()
// console.log(resultType2)

// let resultType3 = function () {
//     console.log("This is type 3"); 
//     console.log(this)                       // long value of this
// }
// resultType3()

// let resultType4 =  () => {
//     console.log("This is type 4");
//     console.log(this)                       // {}
// }
// resultType4()

// /*          In arrow fuction we can't use this like we do in others           */


// /*      Arrow Function      */

// // ()  => {}           // Basic syntax of arrow function

// // let arr1 = () => {}        // Holding arrow fuction under a name.

let add = (num1,num2) => {          // Taking parameters and defining funtions 
    return (num1+num2)
}
console.log(add(1,2))

/* Implicit Return */
// For one line statements      -       no need of return 
let subtract = (num1,num2) => num1-num2
console.log(subtract(9,4)) 

/* If wrapped in curly brackets need to write return
    If wrapped in parantheses no need to mention return */
let product = (num1,num2) => (num1*num2)
console.log(product(9,4)) 


let name = () => ({name : "Srishti"})
console.log(name())



/*      Function in loop        */
// const myArr = [ 1,4,7,12,34,8,2,6]
// myArr.forEach(element => {
    
// });