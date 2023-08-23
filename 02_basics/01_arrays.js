// let name = "Srishti"
// const myArray1 = [ 0, "hello", true, name]       // Resizable 
// console.log(myArray1);               // [ 0, 'hello', true, 'Srishti' ]

// const myArray2 = new Array("hello", "hi", "good")
// console.log(myArray2);          // [ 'hello', 'hi', 'good' ]
// console.log(myArray2[1]);           // hi

// /* 
//     Shallow copy - Same Reference Point 
//     Deep copy - simply a copy of original
// */

// /*
//     array -> prototype -> prototype.
// */


// /*          **********          Array Methods           **********           */
// let myArray = [1,2,3,4]

// myArray.push(6)
// myArray.push(10)
// console.log(myArray);

// console.log(myArray.pop())
// console.log(myArray);

// myArray.unshift(9)
// console.log(myArray);           // [ 9, 1, 2, 3, 4, 6 ]

// myArray.shift()
// console.log(myArray);           // [ 1, 2, 3, 4, 6 ]

// myArray.push(3)
// console.log(myArray.includes(3));       // true
// console.log(myArray.indexOf(4));        // 3
// console.log(myArray.lastIndexOf(2));        // 1
// console.log(myArray.indexOf(14));       // -1

// let newArray = myArray.join()
// console.log(myArray);
// console.log(newArray);
// console.log(typeof newArray);           // string


// /*          **********      Slice and Splice     **********             */
// let sArray = new Array(1,2,3,4,5,6,7,7,8,9,10)
// // slice    -   steps are not possible here     -   no change in original   -   (start,end)
// console.log(sArray.slice(2,5));         // [ 3, 4, 5 ]
// // splice   -   changes original array  -   (start,range)
// console.log(sArray.splice(2,5));        // [ 3, 4, 5, 6, 7 ]
// console.log(sArray);            // [ 1, 2, 7, 8, 9, 10 ]


// /*          **********       Joining two arrays         **********           */

// const numArray1 = new Array(1,2,3,4,5,6,7,8,9)
// const alphaArray1 = new Array('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h')
// numArray1.push(alphaArray1)
// console.log(numArray1);          // Array inside array
// console.log(numArray1[9][4]);        // e

// const numArray2 = new Array(1,2,3,4,5,6,7,8,9)
// const alphaArray2 = new Array('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h')
// let concatArray = numArray2.concat(alphaArray2)         // Has limitation - what if more than two arrays
// console.log(concatArray);           // No change in original
// console.log(numArray2);         
// let spreadArray = [ ...numArray2, ...alphaArray2]
// console.log(spreadArray);           // No change in original


// let complexArray = [ 1, 2, [3, 4, 5], 6, [7, [8, 9]]]
// let simplifiedArray = complexArray.flat(Infinity)       // We should give actual depth flat()
// console.log(complexArray)
// console.log(simplifiedArray)


console.log(Array.isArray("Srishti"));      // false    -   Srishti is not an array
console.log(Array.from("Srishti"));         // An array
console.log(Array.from({ name:"Srishti"}));         // An empty array   -   []


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))


/*          Difference between Array.of and Array.from      -       ??????       */


