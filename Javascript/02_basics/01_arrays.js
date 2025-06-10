// let name = "Srishti"
// const myArray1 = [ 0, "hello", true, name]       // Resizable 
// console.log(myArray1);               // [ 0, 'hello', true, 'Srishti' ]  -   { Elements in array } 


// Array is an object. Container for many different or same type of datatypes.
// Can be access through indexing only.


// const myArray2 = new Array("hello", "hi", "good")        // An object
// console.log(myArray2);          // [ 'hello', 'hi', 'good' ]
// console.log(myArray2[1]);           // hi



// /* 
//     Shallow copy - Same Reference Point      { Array }
//     Deep copy - simply a copy of original
// */



// /*
//     array -> prototype {Array} -> prototype {Object}     -   [[ Prototype Chaining ]]
// */




// /*          **********          Array Methods           **********           */

// let myArray = [1,2,3,4]

// console.log(myArray.length)      // 4

// myArray.push(6)                  // At last
// myArray.push(10)
// console.log(myArray);

// console.log(myArray.pop())       // From last
// console.log(myArray);

// myArray.unshift(9)
// console.log(myArray);           // [ 9, 1, 2, 3, 4, 6 ]  -   Time consuming for large number of elelments

// myArray.shift()
// console.log(myArray);           // [ 1, 2, 3, 4, 6 ]     -   Remove element from start


// myArray.push(3)
// console.log(myArray.includes(3));       // true      -   Questionaries return boolean values
// console.log(myArray.indexOf(4));        // 3
// console.log(myArray.lastIndexOf(2));        // 1
// console.log(myArray.indexOf(14));       // -1


// let newArray = myArray.join()        -       { Array -> String }
// console.log(myArray);
// console.log(newArray);
// console.log(typeof newArray);           // string






// /*          **********      Slice and Splice - { Return section of array }     **********             */

// let sArray = new Array(1,2,3,4,5,6,7,7,8,9,10)

// // slice    -   steps are not possible here     -   no change in original   -   (start,end)    -   Range is not included
// console.log(sArray.slice(2,5));         // [ 3, 4, 5 ]

// // splice   -   changes original array  -   (start,range)    -   Range is included
// console.log(sArray.splice(2,6));        // [ 3, 4, 5, 6, 7 ]

// console.log(sArray);            // [ 1, 2, 7, 8, 9, 10 ]






// /*          **********       Joining two arrays         **********           */

// const numArray1 = new Array(1,2,3,4,5,6,7,8,9)
// const alphaArray1 = new Array('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h')


// numArray1.push(alphaArray1)      // Array nesting - Array inside array
// console.log(numArray1);          // Second array as a single element

// console.log(numArray1[9][4]);        // e


// const numArray2 = new Array(1,2,3,4,5,6,7,8,9)
// const alphaArray2 = new Array('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h')
// let concatArray = numArray2.concat(alphaArray2)          
    // // No nesting here
    // // Returns new array.     
    // // Has limitation - what if more than two arrays
// console.log(concatArray);           // No change in original
// console.log(numArray2);    



// // Spread Operators
// let spreadArray = [ ...numArray2, ...alphaArray2]        // Array into indivisual array
// console.log(spreadArray);           // No change in original



// let complexArray = [ 1, 2, [3, 4, 5], 6, [7, [8, 9]]]
// let simplifiedArray = complexArray.flat(Infinity)       // We should give actual depth flat()
// console.log(complexArray)
// console.log(simplifiedArray)




console.log(Array.isArray("Srishti"));      // false    -   Srishti is not an array
console.log(Array.from("Srishti"));         // An array

console.log(Array.from({ name:"Srishti"}));         // An empty array   -   []
// Not able to convert directly.
// We have to tell that weather we want array of keys or values.


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))


/*          Difference between Array.of and Array.from      -       ??????       */
/* 
    Array.of - It uses set of elements.
    Array.from - It uses single element.
*/