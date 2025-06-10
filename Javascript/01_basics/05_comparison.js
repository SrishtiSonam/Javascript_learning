// { Boolean values }
// console.log( 2 == 1 )
// console.log( 2 >= 1 )
// console.log( 2 <= 1 )
// console.log( 2 != 1 )
// console.log( 2 > 1 )
// console.log( 2 < 1 )


/*  Before comparing make sure that both datatypes are same to get correct answer. */

// console.log("2">1);     //true       { 2 get converted into number }
// console.log("02">1);    //true       {  }

// console.log (null > 0)          // false
// console.log (null < 0)          // false
// console.log (null == 0)         // false     { Comparision and Equality operators have between working style in js }
// console.log (null >= 0)         // true      { Value conversion problem - null becomes 0 }
// console.log (null <= 0)         // true

/* 
        Equality check (==) and comparisons work differently 
        Comparisons convert null to 0 whereas equality check does not.
        Conversions take place either in 0 or NaN.
*/

// console.log (undefined > 0)          // false
// console.log (undefined < 0)          // false
// console.log (undefined == 0)         // false
// console.log (undefined >= 0)         // false
// console.log (undefined <= 0)         // false


/*      Strict Check    { === }        */
console.log( "2" == 2 );        // true         { Allows conversion }
console.log( "2" === 2 );       // false        { Does not allow conversion }

