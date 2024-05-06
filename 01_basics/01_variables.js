console.log("Srishti")

const accountNumber = 1234
// Changing const is not allowed by node.js during analyzing the code.
var accountName = "Srishti"
let accountType = "Saving"
accountEmail = "srishti@gmail.com"
let accountState;       // Currently Undefined.

/* 
    Memory space for storing the data.
    Variablea and Constants. 
    These keywords help in assigning to memory like creating / reserving space for the variable.
    const - can't be changed        
    var - it doesn't understand the concept of Block & Functional scope
    let - used in latest code with scope concept { }
    here even without writing you can reserve some space for the variable   ### check for var or let ###
*/ 

// Investigation Study 
/*      
    Declare variables with and without different keywords.
    Check it's value if notprovided.
    Change the values and analysis.
    Check its scope.
*/

console.table([accountNumber, accountName, accountType, accountEmail, accountState]);

/*      Checking if the value can be changed on later..      */
// accountNumber = 9876     -       Not allowed
accountName = "Shreya"
accountType = "Investing"
accountEmail = "shreya@gmail.com"
accountState = "New Delhi"

console.table([accountNumber, accountName, accountType, accountEmail, accountState]);
