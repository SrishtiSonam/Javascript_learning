/*      ##########     Read Documentation - Temporal API - {Just like Math}      ##########      */


let myDate = new Date()     // As object

// console.log(myDate.getDate());      // 22
// console.log(myDate.getDay());       // 2 - Tuesday
// console.log(myDate.getFullYear());      // 2023
// console.log(myDate.getHours());     // 19
// console.log((myDate.getMonth()) + 1);       // 7+1 = 8


// console.log(myDate);        // 2023-08-22T13:50:27.851Z          {Millisecond Time}
//  --> Milliseconds since Jan 1, 1970, UTC
// console.log(myDate.toString());         // Tue Aug 22 2023 19:21:39 GMT+0530 (India Standard Time)


// console.log(myDate.toDateString());         // Tue Aug 22 2023   ********
// console.log(myDate.toISOString());          // 2023-08-22T13:53:29.848Z


// console.log(myDate.toJSON);             // [Function: toJSON]
// console.log(myDate.toJSON());               // 2023-08-22T13:54:36.179Z
// console.log(myDate.toLocaleDateString());       // 22/08/2023
// console.log(myDate.toLocaleTimeString());       // 19:25:45


// console.log(myDate.toLocaleString());       // 22/08/2023, 19:25:45      // Object 


/* Customizing Date according to your choice.  */
myDate.toLocaleString('default', {             // Ctrl + Spacebar   after   'default'
    weekday:"long",
    // timeZone:
});
// toLocaleString() -   Arguments { Intlization, {After that define whatever you need}}


// console.log(myDate);        // 2023-08-22T14:33:32.719Z
// console.log(typeof myDate);             // object


//      ##############       ?????????????       Write formats.
// let myCreatedDate1 = new Date(2023/0/23)     // Invalid Date  
// let myCreatedDate2 = new Date(2000/7/04)     // 1970-01-01T00:00:00.087Z
// let myCreatedDate3 = new Date(2023, 1, 23)      // 2023-02-22T18:30:00.000Z
// let myCreatedDate4 = new Date("2017-02-14")         // 2023-01-23T00:00:00.000Z
// let myCreatedDate5 = new Date("22-08-2023")      *****************************************
/* 
    Date(year: number, monthIndex: number, date?: number | undefined, hours?: number | undefined, minutes?: number | undefined, seconds?: number | undefined, ms?: number | undefined): Date
    Months start from 0 in JS.  Date starts from 1. 
*/
// console.log(myCreatedDate1);
// console.log(myCreatedDate2);
// console.log(myCreatedDate3); 
// console.log(myCreatedDate4); 
// console.log(myCreatedDate5); 


/*      -----   For Timestamp   -----        */
let myTime = Date.now()
// console.log(myTime);        // 1692713660952    -   milliseconds
// console.log(myDate.getTime());      // Return values in milliseconds
// /* Comparisions are always done at milliseconds.  */

// console.log(Math.floor(Date.now()/1000));       // Result in seconds

