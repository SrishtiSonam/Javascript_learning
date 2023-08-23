// const User1 = new Object()           // {}       // Singleton object
// const User2 = {}                // {}       //Non-Singleton Object

// console.log(User1);     // {}
// console.log(typeof User1);      // object
// console.log(User2);     // {}
// console.log(typeof User1);      // object

// /*      They both does not have any internal difference.         */


// const User = {}
// User.id = "123abc"
// User.name = "Srishti"
// User.isLoggedIn = false
// console.log(User);


// /*      Adding a object in object        */
// const defaultUser = {
//     id : "987xyz",
//     userName : {
//         userFullName : {                // This nesting doesn't have any limitations
//             fisrtName : "Srishti",
//             lastName : "Sonam"
//         }
//     },
//     isLoggedIn : true,
// }
// console.log(defaultUser.userName.userFullName.fisrtName);            // Accessing the value


// /*      Combining Objects           */
const obj1 = { 1:"a", 2:"b"}
const obj2 = { 3:"c", 4:"d"}

// const obj3 = {obj1, obj2}       // Object in object 
// console.log(obj3);          // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

/* const obj4 = Object.assign(obj1,obj2)
console.log(obj1);          // Everything is getting changed in Obj1.
// Obj1 : { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj4 === obj1)
console.log(obj4);          // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' } */

// const obj5 = Object.assign({},obj1,obj2)        // An optional parameter - which should be used
/*   As {} act as a target and other as source - no change in original everytime new object */
// console.log(obj5);          // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

/*           Object Assign MDN          */

const obj6 = {...obj1, ...obj2}         // Mostly used
console.log(obj6)            // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


// /*          Mamy objects in array         */
// const Arr = [
//     {   id : 1, name :"abc" },
//     {   id : 2, name :"def" },
//     {   id : 3, name :"ghi" },
//     {   id : 4, name :"jkl" },
// ]
// console.log(Arr[1].name)        // Array ka pehla value vo ki object hy


// /*      Accessing Keys and values of an object       */
// console.log(Object.keys(obj6));
// console.log(Object.values(obj6));
// // console.log(Object.len(obj6));          // len is not a function
// // console.log(obj6.len);             // undefined 

// console.log(Object.entries(obj6));      // Array in array
// // [ [ '1', 'a' ], [ '2', 'b' ], [ '3', 'c' ], [ '4', 'd' ] ]

// console.log(obj6.hasOwnProperty(3))     // true     -   check the presence 



/* 
    For more information about objects:
    create an object in console. Eg : let obj = {1:"a", 2:"b"}
    get all the values of object by writing obj after creating it.
    By this we will get all the prototypes.
*/


/*      ************        De-structuring Objects          ***********      */
// We can directly take the values but destructuring is quite easier.

const course = {
    courseName : "js in hindi",
    price : 999,
    courseInstructor : "hitesh"
}

// Syntaxtical Sugar *************
const {courseInstructor} = course
console.log(courseInstructor);
const {courseInstructor:Instructor} = course
console.log(Instructor);




