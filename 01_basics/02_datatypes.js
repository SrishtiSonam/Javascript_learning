"use strict";       // treat all js code as newer version   -   By default   -    It is just for syntax


//  alert()     -   used with html or console-browser.


console.log(3+3); console.log("Hello")
console.log(10
    *
    5)
/*  
    Semi-colons are not required in js but here it is must to run the code with out any error.
    This kind of writing reduces readability, even it is executed.
*/  


/*      ------------------       MDN  web docs - Javascript - basics        -------------------     */ 
/*      ------------------       ECMA - script - Documentation - adv.       --------------------    */ 


/*      Js has comparatively less datatypes         */ 

let name = "Srishti"            // Strings 
let age = 20                    // Number  -   2 to the power 53       else    Bigint is used    
let isLoggedIn = true           // Boolean
// let device = Laptop      -       " Double quotes are must "
let marks = null                // Representation of empty value - intentionally not assigned 
let grade = undefined           // Value is not given yet. 
let score = ""                  // This is not null, type is defined.
/*  The difference between above three can be understood with the help of a server example. */ 
// symbol => To identify uniqueness. {React, figma}
// Objects 

console.log(typeof(marks));     // Object - NULL - It is a standalone value {not - language error}
console.log(typeof grade);     // Undefined
console.log(typeof score );     // String 


/*   
    Some specification on ecma script.
    Major on MDN - documentation.
*/
