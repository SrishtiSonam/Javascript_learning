/*      for     */

for (let index = 0; index < 10; index++) {
    const element = index;                         // CONST
    if (index%2==0){
        console.log(`${index} is an even number.`);
    }
    console.log(element);
}

// Ctrl + d     to get cursor at all duplicates

// for (i=1;i<=3;i++){
//     console.log(`${i} outer loop number.`);
//     for (j=1;j<=3;j++){
//         console.log(`${j} inner loop.`);
//     }
// }


/*      Tables      */
for (i=1;i<=10;i++){
    console.log(`\nTable of ${i}.`);
    for (j=1;j<=10;j++){
        console.log(`   ${i} * ${j} = ${i*j}`);
    }
}


let myArray = ['a','b','c','d','e','f','g']
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

// <= in loop here     Undefined


/*      break and continue       */
for(let i=1;i<=10;i++){
    if (i>5){
        console.log("Value of i more or equal to than 5");
        break
    }
    console.log(`the value is ${i}`);
}
for(let i=1;i<=10;i++){
    if (i%2==0){
        console.log("Value of i even.");
        continue
    }
    console.log(`the value is ${i}`);
}