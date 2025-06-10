// console.log(10+3)       // Addition
// console.log(10-3)       // Subtraction
// console.log(10*3)       // Multiplication
// console.log(10**3)      // Power
// console.log(10/3)       // Division
// console.log(10%3)       // Remainder

// let str1 = "Hello "
// let str2 = "World"
// let str3 = str1+str2
// console.log(str3)                // Hello World

// let value = 3
// let negativeValue = -value
// console.log(negativeValue);      // -3


/*       Tricky Question not used for coding purposes     */

// console.log("2+1: ");
// console.log(2+1);
// console.log("2"+1);          // 12  
// console.log(2+"1");          // 12
// console.log("2"+"1");        // 12

// console.log("3+2+1: ");    
// console.log("3"+2+1);        //321
// console.log(3+"2"+1);        //321
// console.log(3+2+"1");        //51   
// console.log("3"+"2"+1);      //321
// console.log("3"+2+"1");      //321
// console.log(3+"2"+"1");      //321

// /*    It start from left hand side (->) if one is string convert other also into string   */
// ecma script guidelines to primitive (conversion) RULE.

// console.log(true);      // true
// console.log(+true);     // 1     -   Here value is incremented.
// console.log(true+);     // error      -   As it was not expected. 
// console.log("");        //
// console.log(+"");       // 0     -   { Writing + converts it into boolean. }


/*       Reduces the readability of the code, least suggested.     */

// let num1, num2, num3
// num1 = num2 = num3 = 4  


let gameCounter = 100
gameCounter++
console.log(gameCounter++);     //101   -   first print (usage) then update
console.log(++gameCounter);     //103   -   first update then print (usage)
