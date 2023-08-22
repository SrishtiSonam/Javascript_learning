// Javascript is Dynamically typed language.

/* 
        Official documentation has divided all the datatypes into two categories. 
                            Primitive and Non-Primitive
                    { Call by Value and Call by Reference } - kind of 
        Differentiated on the basics of how data is stored in memory and how it is being accessed.
*/

/*  
                                Primitive   -   7
                They are call by value, we get copy of the data.
            String, Number, Boolean, null, undefined, Symbol, BigInt

 */

/*
                      Non - Primitive  and  Reference Type     
            They are call by reference, Direct access of memory location is allocated.
                            Array, Object, Functions 
*/

let email;      // Value for email is undefined for now.

// TYPEOF  BIGINT 
const bigNumber = 1234567894885678n
console.log(typeof bigNumber);          //bigint

const id = Symbol('123')
const anotherID = Symbol('123')
console.log( id === anotherID );        //  false       
/* They both have same value and datatype but are differentiated by Symbol */


const num = [1, 2, 3, 4]        // Array
let myObj = {                   // Object - function objects
        'a':1,
        'b':2,
}
let myFnc = function(){
        console.log("Hello World");
}
console.log(typeof myFnc);      // function - object function

