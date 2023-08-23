const score = 400
console.log(score);

// Morden way of writting
const balance = new Number(100)
console.log(balance);

/* Similar to string */

console.log(balance.toString().length)
// Now this have all the properties of string.

console.log(balance.toFixed(2))     // 100.00

const otherNumber1 = 128.4975
console.log(otherNumber1.toPrecision(3));       // 128
const otherNumber2 = 128.6975
console.log(otherNumber2.toPrecision(3));       // 129
const otherNumber3 = 1228.1975
console.log(otherNumber3.toPrecision(3));        // 1.23e+3
const otherNumber4 = 100000000
console.log(otherNumber4.toLocaleString()); 
console.log(otherNumber4.toLocaleString('en-IN')); 


// /*Thora dsa wala part */
// let num = new Number(10000);
// console.log(num.MAX_SAFE_INTEGER);       ----        IN Console



//      /*      ==========      Maths       ===========         */      //

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.99));
console.log(Math.min(4,6,8,11,2));
console.log(Math.max(4,6,8,11,2));
console.log(Math.random());     // 0<=x<=1
console.log(Math.random()*10);      // include 0
console.log((Math.random()*10)+1);      // above 0
console.log(Math.floor(Math.random()*10)+1);        // For integers

const max = 100;
const min = 90;
console.log(Math.floor((Math.random()*(max-min+1))+min));      // *******************


