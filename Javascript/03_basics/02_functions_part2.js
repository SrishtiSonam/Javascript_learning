function getnum(num1) {
    return num1;
}
console.log(getnum(200));       // 200
console.log(getnum(200, 400, 500));       // 200



function sumOfAll(...num){      // rest Operators
    return (num)
}
console.log(sumOfAll(100,200,300))          // [ 100, 200, 300 ]

function sumOfAllExceptFirstTwo(val1,val2,...num){
    return (num)
}
console.log(sumOfAllExceptFirstTwo(100,200,300,400,500));



// Passing an object to the function 
const user = {
    name:"Srishti",
    price:199
}
function handleObjects(anyObject){
    console.log(`Username is ${anyObject.name} who is purchasing book of ${anyObject.price} ruppes.`);
}
// If incorrect parameters and names are given then undefined will be shown. 
handleObjects(user)
handleObjects({             // Directly passing any object 
    name:"Shreya",
    price:299
})



const Arr = [1, 2, 3, 4, 5]
function handleArray(anyArray){
    return(anyArray[0])
}
console.log(handleArray(Arr))
console.log(handleArray(["a","b","c","d"]));