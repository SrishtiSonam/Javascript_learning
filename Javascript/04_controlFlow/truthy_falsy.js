let userEmail = "srishti.gmail.com"
if (userEmail){
    console.log(`${userEmail}`)
}


// falsy    =>  false   0   -0  (BigInt)0n  ""  null    undefined   NaN

// truthy   =>  "0"     " "      'false'    []  {}      function(){}[EmptyFunction]


let studentNames = []
if ((studentNames.length)===0){
    console.log("Array is empty.");
}
let classTeacherNames = {}
if (Object.keys(classTeacherNames).length===0){
    console.log("Object is empty.");
}


console.log(false == 0)
console.log(false == '')
console.log('' == 0)


/*      Nullish Coalescing Operators (??):  null,  undefined        */
let val1,val2,val3,val4;
val1 = 5 ?? 10
val2 = null ?? 20
val3 = undefined ?? 30
val4 = null ?? undefined ?? 40
console.log(val1,val2,val3,val4);


/*      Turniary Operators       */
// Condition ? true : false
let score = 400
level = (score>200) ? 2 : 1
console.log(level);
