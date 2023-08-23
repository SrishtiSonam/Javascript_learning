// singleton if made with constructor
// Object.create


const mySym = Symbol("key1")


// object literals 
let Jsuser = {}       // Empty Object
Jsuser = {              // KeyValue pair
    name : "Srishti",           // No need to write "name" it is automatically done
    "fullName" : "Srishti Sonam",
    [mySym] : "key1", 
    age : 20,
    subjects : ["DBMS", "OOP", "Python", "MatLab", "English"],
    isLogedIn : false

}
console.log(Jsuser.name);           // Not the only way but generally used one 
// console.log(Jsuser[age]);           // Not defined
console.log(Jsuser["age"]);             // behind the string it is treating like string
// console.log(Jsuser."fullName");          // Can't be accessed through dot method
console.log(Jsuser["fullName"]);

/* If symbol is used without square brackets            -        mySym : "key1",
console.log(Jsuser[mySym]);         // undefined
console.log(typeof Jsuser[mySym]);          // undefined
console.log(Jsuser.mySym);          // key1
console.log(typeof Jsuser.mySym);          // string            */

/* If symbol is used without square brackets            -        [mySym] : "key1",    */
console.log(Jsuser[mySym]);         // key1
console.log(typeof Jsuser[mySym]);          // string - the value 
console.log(Jsuser.mySym);          // undefined
console.log(typeof Jsuser.mySym);          // undefined     

// /*      *****    Symbol declaration in an object    ?????       *****    */


Jsuser.isLogedIn = true         // Overwriting the values 
console.log(Jsuser["isLogedIn"]);

// Object.freeze(Jsuser)

// Jsuser.isLogedIn = false         // After freezing no overwriting/changes 
// console.log(Jsuser["isLogedIn"]);

// console.log(Jsuser);


/*          **********      Adding function to an object        **********           */
Jsuser.greeting = function(){
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
