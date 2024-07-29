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


// const numbers = [1,2,3,4,5,6,7,8,9,10]

// numbers.filter( (num) => num>5 )            // It will return the values but no log so no print

// const numLessThanFive = numbers.filter( (num) => num<5 ) 
// console.log(numLessThanFive);

// let numMoreThanFive = numbers.filter( (num) => {
//     num>5 
// }) 
// console.log(numMoreThanFive);           //  []
// numMoreThanFive = numbers.filter( (num) => {
//     return num>5 
// }) 
// console.log(numMoreThanFive); 

// evenNumbers = []
// numbers.forEach( (num)=>{
//     if (num%2==0){
//         evenNumbers.push(num)
//     }
// } )
// console.log(evenNumbers);

const books = [
    {
      title: "The Great Gatsby",
      genre: "Fiction",
      publish: 1925,
      edition: 1999
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      genre: "Fantasy",
      publish: 1997,
      edition: 2010
    },
    {
      title: "To Kill a Mockingbird",
      genre: "Fiction",
      publish: 1960,
      edition: 2003
    },
    {
      title: "The Hobbit",
      genre: "Fantasy",
      publish: 1937,
      edition: 2000
    }
  ];

//   let userBooks = books.filter( (book) => book.genre === 'Fantasy' )
// //   [
// //     {
// //       title: "Harry Potter and the Sorcerer's Stone",
// //       genre: 'Fantasy',
// //       publish: 1997,
// //       edition: 2010
// //     },
// //     {
// //       title: 'The Hobbit',
// //       genre: 'Fantasy',
// //       publish: 1937,
// //       edition: 2000
// //     }
// //   ]

//   userBooks = books.filter( (book) => book.publish>1950 )
// //   [
// //     {
// //       title: "Harry Potter and the Sorcerer's Stone",
// //       genre: 'Fantasy',
// //       publish: 1997,
// //       edition: 2010
// //     },
// //     {
// //       title: 'To Kill a Mockingbird',
// //       genre: 'Fiction',
// //       publish: 1960,
// //       edition: 2003
// //     }
// //   ]

//   userBooks = books.filter( (book) => {book.publish>1950} )
//   //    []  -   If we opened up scope {} we have to use return keyword.

//   userBooks = books.filter( (book) => {return book.publish>1950} )
// //   [
// //     {
// //       title: "Harry Potter and the Sorcerer's Stone",
// //       genre: 'Fantasy',
// //       publish: 1997,
// //       edition: 2010
// //     },
// //     {
// //       title: 'To Kill a Mockingbird',
// //       genre: 'Fiction',
// //       publish: 1960,
// //       edition: 2003
// //     }
// //   ]

// userBooks = books.filter( (book) => {
//     return book.edition>2000 && book.genre === 'Fantasy'} )

// console.log(userBooks);




/*          *****   Map     *****         */
const myNumber = [1,2,3,4,5,6,7,8,9]

// let newNums = myNumber.map( (num) => num+=10 )
// // [11,12,13,14,15,16,17,18,19]

// let newNums = myNumber.map( (num) => {num+=10} )
// // [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined]

// let newNums = myNumber.map( (num) => {return num+=10} )
// // [11,12,13,14,15,16,17,18,19]

/*      Chaining    -    It has no limits       */
/*  newNums = myNumber.map().map()
    newNums = myNumber.map().filter()
    newNums = myNumber.filter().filter()    
    In first everthing passed is of second      */
newNums = myNumber.map( (num) => num * 10).map( (num) => num+=100 ).filter( (num) => num>150 )

// console.log(newNums);




/*          *****    Reduce --  billing and all     *****         */
let myNum = [1,2,3,4,5]

// let mySum = myNum.reduce(function ( acc, curVal ) {
//   console.log(`acc: ${acc} and current value: ${curVal}`);
//     return acc + curVal
// },5 )       //  First value of acc, after that anything that return. 
// console.log(mySum);

// let myTotal = myNum.reduce( (acc, curVal) => acc+curVal,0  )
// console.log(myTotal);

const shoppingCart = [
  {
    itemName : "Javascript",
    price: 899
  },
  {
    itemName : "Java",
    price: 499
  },
  {
    itemName : "Python",
    price: 459
  },
  {
    itemName : "Cpp",
    price: 399
  },
]
// const priceToPay = shoppingCart.reduce( (acc,item) => acc+item.price, 0)
// console.log(priceToPay)
