// if

if (true){
    console.log("Always True");
}
if (false){
    console.log("Always False");
}
if (2=='2'){
    console.log("2 == '2'");
}
if (2==='2'){
    console.log("2 === '2'");
}
// <, >, <=, >=, ==, ===, !=, !==


const isLoggedIn = true
if (isLoggedIn){
    console.log("The user is logged in");
}

let temp = 40
if (temp<25){
    console.log("Temp is less than 25");
}else if (temp<35){
    console.log("Temp is less than 35");
}else if (temp<45){
    console.log("Temp is less than 45");
}else{
    console.log("Temp is more or equal to 45");
}

let score = 200
if (score>100){
    power = "fly"
    console.log(`User has following power: ${power}`)
}
// console.log(`User has following power: ${power}`)        -       Error


// /* Implicit scope - Not prefered one  */
// let books = 12;
// if (books>10) console.log("User has many books")
// books = 20;
// if (books>15) console.log("User has many books"), console.log("They need to carry a bag for it.");
// books = 30;
// if (books>25) console.log("User has many books"), 
// console.log("They need to carry a curtain for it.");


const googleLoggedIn = true
const emailLoggedIn = false
let varified
let debitCredit = false

if ( googleLoggedIn || emailLoggedIn ){
    varified = true
    if (varified && debitCredit){
        console.log("User is allowed to purchase items.");
    }else{
        console.log("Please fill credit/debit details to purchase items.");
    }
}