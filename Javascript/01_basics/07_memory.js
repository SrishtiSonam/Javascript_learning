//      ##########      Working of Memory and Threads in JS        ############

/* 
        There are two types of memories :   Stack (Primitive) and Heap (Non-Primitive) 
        Stack -> New variable new block
        Heap -> Refers to address for original value
*/

/*
        Primitive : The new variable which we declare for that we get a copy of original variable.
        Non-Primitive : When the memory is defined in heap,for that we get reference of original value.
*/

let myState = "New Delhi"
let otherState = myState
console.log(otherState);
otherState = "Himachal Pradesh"
console.log(myState);
console.log(otherState);
// Value of original variable does not change on changing the values of copied variable.
// As new variable new block, it actually gets the copy, no relation with original one.

let userone = {
        name:"Srishti",
        age:19,
}
let usertwo = userone;
console.log(userone);
console.log(usertwo);
usertwo.age = 20;       // This will bring change in both the users as address of value is refered.
console.log(userone);
console.log(usertwo);
// Here both the users points towards the same address.