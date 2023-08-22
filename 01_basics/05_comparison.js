// console.log( 2 == 1 )
// console.log( 2 >= 1 )
// console.log( 2 <= 1 )
// console.log( 2 != 1 )
// console.log( 2 > 1 )
// console.log( 2 < 1 )


/*  Before comparing make sure that both datatypes are same to get correct answer. */

// console.log("2">1);     //true
// console.log("02">1);    //true

// console.log (null > 0)          // false
// console.log (null < 0)          // false
// console.log (null == 0)         // false
// console.log (null >= 0)         // true
// console.log (null <= 0)         // true

/* 
        Equality check (==) and comparisons work differently 
        Comparisons convert null to 0 whereas equality check does not.
*/

// console.log (undefined > 0)          // false
// console.log (undefined < 0)          // false
// console.log (undefined == 0)         // false
// console.log (undefined >= 0)         // false
// console.log (undefined <= 0)         // false


/*      Strict Check    { === }        */
console.log( "2" == 2 );        //true
console.log( "2" === 2 );       //false

