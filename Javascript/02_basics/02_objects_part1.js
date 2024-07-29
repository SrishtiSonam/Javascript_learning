// singleton object if made with constructor   { unique object of its kind }
    // - Object.create

// otherwise multiple instances can be formed  - literals


// object literals 

const mySym = Symbol("key1")

let Jsuser = {}       // Empty Object
Jsuser = {              // KeyValue pair    { Key - String      &       Value - Any Datatype }
    name : "Srishti",           // No need to write "name" it is automatically done
    "fullName" : "Srishti Sonam",
    [mySym] : "key1",   // Using symbol as a key
    age : 20,
    subjects : ["DBMS", "OOP", "Python", "MatLab", "English"],
    isLogedIn : false
}

/* Object can be accessed through two ways-     
        1. dot method ( need not to mention as string )       and     
        2. using square method ( need to write as a string )
*/
console.log(Jsuser.name);           // Not the only way but generally used one 
// console.log(Jsuser[age]);           // Not defined
console.log(Jsuser["age"]);             // behind the string it is treating like string
// console.log(Jsuser."fullName");      // Can't be accessed through dot method as in object written as ""
console.log(Jsuser["fullName"]);


/* If symbol is used without square brackets            -        mySym : "key1",    { Not a symbol }
console.log(Jsuser[mySym]);         // undefined
console.log(typeof Jsuser[mySym]);          // undefined
console.log(Jsuser.mySym);          // key1
console.log(typeof Jsuser.mySym);          // string            */

/* If symbol is used with square brackets            -        [mySym] : "key1",     { Treated as a symbol }    */
console.log(Jsuser[mySym]);         // key1
console.log(typeof Jsuser[mySym]);          // string - the value 
console.log(Jsuser.mySym);          // undefined
console.log(typeof Jsuser.mySym);          // undefined     


// /*      *****    Symbol declaration in an object    ?????       *****    */


Jsuser.isLogedIn = true         // Overwriting the values 
console.log(Jsuser["isLogedIn"]);

// Object.freeze(Jsuser)        // Locking

// Jsuser.isLogedIn = false         // After freezing no overwriting/changes  - still no display of error
// console.log(Jsuser["isLogedIn"]);

// console.log(Jsuser);


/*          **********      Adding function to an object        **********           */

Jsuser.greeting = function() {
    console.log("Hello js user");
}

Jsuser.greetingName = function(){
    console.log(`Hello ${this.fullName}`);
}

// console.log(Jsuser[greeting]);          // not defined 
console.log(Jsuser["greeting"]);        // [Function (anonymous)]

// console.log(Jsuser[greeting()]);            // not defined
console.log(Jsuser.greeting());             // Hello js user \n undefined
console.log(Jsuser.greetingName()); 
