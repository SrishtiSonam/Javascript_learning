// Javascript is Dynamically typed language - Datatype will be automatically assigned at the time of compilation or code execution.

/* 
        Official documentation has divided all the datatypes into two categories. 
                            Primitive and Non-Primitive
                    { Call by Value and Call by Reference } - kind of 
        ### Differentiated on the basics of how data is stored in memory and how it is being accessed ###
*/

/*  
                                Primitive   -   7
        They are call by value, we get copy of the data. Changes are also made in copy.
            String, Number, Boolean, null, undefined, Symbol, BigInt

 */

/*
                      Non - Primitive  and  Reference Type     
            They are call by reference, Direct access of memory location is allocated.
                            Array, Object, Functions 
*/



let email1;     
let email2 = undefined
        // Value for email is undefined for now.

// TYPEOF  BIGINT 
const bigNumber = 1234567894885678n     // here n makes it BIGINT
console.log(typeof bigNumber);          // undefined


// Symbol - To make value unique - Here return type is also symbol
const id = Symbol('123')
const anotherID = Symbol('123')
console.log( id === anotherID );        //  false       
/* They both have same value and datatype but are differentiated by Symbol */


const num = [1, 2, 3, 4]        // Array - typeof -> object
let myObj = {                   // Object - Every thing inside curly brackets - Here it is stored in a variable  - function objects
        'a':1,                  // key - value pair
        'b':2,                          
}

let myFnc = function(){         // Storing a function into a variable
        console.log("Hello World");
}
console.log(typeof myFnc);      // function - object function ( return of function )


// Check ecma script for typeof of all the datatypes, NULL, UNDEFINED.
