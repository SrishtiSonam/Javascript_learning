// Earlier javascript does not have classes, arrow functions, module, etc were not present. 
"use strict";       // treat all js code as newer version/js    - All new states.
                    // -    It is just for syntax [nowadays it get automatically (by default), it is just for good syntax] 


//  alert()     -   used with html or console-browser.      // error in node terminal, used in different syntax.


console.log(3+3); console.log("Hello")
console.log(10
    *
    5)
/*  
    Semi-colons are not required in js but here it is must to run the code with out any error.
    This kind of writing reduces readability, even it is executed.
*/  


/*      ------------------       MDN  web docs - Javascript - basics - Documentation       -------------------     */ 
/*      ------------------       ECMA - script - Original Documentation - adv.       --------------------    */ 
// ecma script does not write javascript but sets standard for js.
//  { as different browser different js - concept doesn't work }
// Like if this is the input then this should be the output, other things here is your choice. ( This is the minimum standard to follow )


/*      Js has comparatively less datatypes         */ 

// ### Primitive Datatypes ###
let name = "Srishti"            // Strings 
let age = 20                    // Number  -   2 to the power 53 (Range given in memory address)      else    Bigint is used    
let isLoggedIn = true           // Boolean
// let device = Laptop      -       " Double quotes are must "
let marks = null                // Representation of empty value - intentionally not assigned - standalone value - a special type.
let grade = undefined           // Value is not given yet - Type is not defined.
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

// Global Objects, Numbers and Dates