// /*   myArray = ["","","","",""]
//      myObject = [{},{},{},{},{}]    */


//       /*   for of loop   */

// const myValue = [1,2,3,4,5,6]
// for (const num of myValue) {
//     console.log(num)
// }

// const myString = "Hello World"
// for (const char of myString) {
//     console.log(`Each char is ${char}`)
// }


// Maps - datatype 
const myMap1 = new Map()
myMap1.set('IN',"India")
myMap1.set('USA',"United State of America")
myMap1.set('UK',"United Kingdom")

// console.log(myMap1);
// // Map(3) {
// //     'IN' => 'India',
// //     'USA' => 'United State of America',
// //     'UK' => 'United Kingdom'
// //   }          // Unique and same order

// for (const key of myMap1) {
//     console.log(key);
// }
// // [ 'IN', 'India' ]
// // [ 'USA', 'United State of America' ]
// // [ 'UK', 'United Kingdom' ]

// for (const [key,value] of myMap1) {
//     console.log(key,' : ',value);
// }
// // IN  :  India
// // USA  :  United State of America
// // UK  :  United Kingdom


// let myObject1 = {
//     '1':'a',
//     '2':'b'
// }
// // for (const [key,value] of myObject1) {               //  TypeError: myObject is not iterable
// //     console.log(`${key} :- ${value}`)
// // }

// let myObject2 = {
//     '1':'a',
//     '2':'b'
// }
// // for (const [key,value] of myObject2) {               //  TypeError: myObject is not iterable
// //     console.log(`${key} :- ${value}`)
// // }


// /*      forin       */
// let myObject = {
//     'py':"python",
//     'c':"C language",
//     'cpp':"C++ language",
//     'js':"javascript",
// }
// for (const key in myObject) {           // We will get all the keys
//     console.log(key)
// }
// for (const key in myObject) {           // We will get all the values
//     console.log(myObject[key])
// }
// console.log("For different languages: ");
// for (const key in myObject) {           // We will get all the values
//     console.log(`${key} is for ${myObject[key]}`)
// }

// const programming = ["javascript", "python", "c++", "c"]
// for (const key in programming) {            // For arrays keys are their index
//     console.log(`${key}`)
// }
// for (const key in programming) {    
//     console.log(`${programming[key]}`)
// }

// const myMap2 = new Map()
// myMap2.set('Js',"Javascript")
// myMap2.set('py',"Python")
// myMap2.set('cpp',"CPP")

// for (const key in myMap2) {         // This is not iteratable so no error will be there 
//     console.log(`${key}`)                   // Like nothing will be displayed 
// }



/*      For each        */

const coding = ["js", "py", "c++", "c"]         // for each bydefault injected
// coding.forEach( function (item) {
//     console.log(item);
// } )
// coding.forEach( (item) => {             // No need to give it a name as no need to store it.
//     console.log(item);
// } )      
// function printMe(item) {
//     console.log(item)
// }
// coding.forEach(printMe)     
// // coding.forEach(printMe())                // undefined is not a function
// coding.forEach( (ele, i, full) => {           // (item,index,arr) => this is the order 
//         console.log(ele, i, full)            
// })
// coding.forEach( ( ele, i, full) => {           // positons matter here 
//     console.log( full)                   
// }) 


// /*  forEach for array of objects      -     mostly */
// const fileName = [
//     {
//         language : "Javascript",
//         languageFileName : "js"
//     },
//     {
//         language : "C++",
//         languageFileName : "cpp"
//     },
//     {
//         language : "Python",
//         languageFileName : "py"
//     }
// ] 
// fileName.forEach((item)=>{              // Here item are objects 
//     console.log(item.languageFileName);
// })


names = ["Srishti","Shreya","Tanvi"]
// const values = names.forEach(items => {
//     console.log(items);
// });
// console.log(values);            //  undefined
// const values = names.forEach(items => {
//     console.log(items);
//     return items
// });
// console.log(values);            //  undefined


const numbers = [1,2,3,4,5,6,7,8,9,10]

numbers.filter( (num) => num>5 )            // It will return the values but no log so no print

const numLessThanFive = numbers.filter( (num) => num<5 ) 
console.log(numLessThanFive);

let numMoreThanFive = numbers.filter( (num) => {
    num>5 
}) 
console.log(numMoreThanFive);           //  []
numMoreThanFive = numbers.filter( (num) => {
    return num>5 
}) 
console.log(numMoreThanFive); 

evenNumbers = []
numbers.forEach( (num)=>{
    if (num%2==0){
        evenNumbers.push(num)
    }
} )
console.log(evenNumbers);
