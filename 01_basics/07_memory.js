/* 
        There are two types of memories :   Stack (Primitive) and Heap (Non-Primitive) 
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


let userone = {
        name:"Srishti",
        age:19,
}
let usertwo = userone;
console.log(userone);
console.log(usertwo);
usertwo.age = 20;       // This will bring change in both the users.
console.log(userone);
console.log(usertwo);


