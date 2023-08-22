console.log("Srishti")

const accountNumber = 1234
var accountName = "Srishti"
let accountType = "Saving"
accountEmail = "srishti@gmail.com"
let accountState;

/* 
    These keywords help in assigning to memory like creating / reserving space for the variable.
    const - can't be changed        var - it doesn't understand the concept of Block & Functional scope
    let - used in latest code with scope concept { }
    here even without writing you can reserve some space for the variable.
*/ 

console.table([accountNumber, accountName, accountType, accountEmail, accountState]);


/*      Checking if the value can be changed on later..      */
// accountNumber = 9876     -       Not allowed
accountName = "Shreya"
accountType = "Investing"
accountEmail = "shreya@gmail.com"
accountState = "New Delhi"
console.table([accountNumber, accountName, accountType, accountEmail, accountState]);
