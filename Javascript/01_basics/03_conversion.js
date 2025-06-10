// Conversion in Js is a nightmare topic.

console.log("number to string")
let score = 12
console.log(typeof score)
let scoreString = String(score)         // Class base.
console.log(scoreString)
console.log(typeof scoreString)


console.log("string to number")
let scoreCard = "12"
console.log(typeof scoreCard)
let numberScore = Number(scoreCard)     // to conver in number type
console.log(numberScore)
console.log(typeof numberScore)
/*  string -> "56yrt" when converted in number -> NaN(Not a number) - special type - datatype number */
/*  null when converted in number then result is 0 */
/*  undefined when converted gives NaN */
/*  boolean value returns 0 and 1 */


console.log("boolean to number")
let loggedIn = true
let loggedInValue = Number(loggedIn)     // to conver in number type
console.log(loggedInValue)
console.log(typeof loggedInValue)

console.log("number to boolean")
let isRegistered = 11               // true for all except 0 
let isRegisteredInBoolean = Boolean(loggedIn)     // to conver in number type
console.log(isRegisteredInBoolean)
console.log(typeof isRegisteredInBoolean)

console.log("String to Boolean")
let isVerified = " "               // true for all except "" even for " "
let isVerifiedInBoolean = Boolean(isVerified)     // to conver in number type
console.log(isVerifiedInBoolean)
console.log(typeof isVerifiedInBoolean)




/*  Case of unique conversions. */ 
console.log("Case of unique conversions.")

let Class = "12A"                       // variable name can't be "class"
let classCard = Number(Class)
console.log(classCard)                  //  NaN
console.log(typeof classCard)

let classBoolean = Boolean(classCard)
console.log(classBoolean)                  //  false
console.log(typeof classBoolean)

let percentage = null
let percentageCard = Number(percentage)
console.log(percentageCard)                  //  0
console.log(typeof percentageCard)

let percentageBoolean = Boolean(percentage)
console.log(percentageBoolean)                  //  false
console.log(typeof percentageBoolean)

let percentageString = String(percentage)
console.log(percentageString)                  // null
console.log(typeof percentageString)

let rank = undefined
let rankCard = Number(rank)
console.log(rankCard)                  //  NaN
console.log(typeof rankCard)

let rankBoolean = Boolean(rank)
console.log(rankBoolean)                  //  false
console.log(typeof rankBoolean)

let rankString = String(rank)
console.log(rankString)                  //  undefined
console.log(typeof rankString) 