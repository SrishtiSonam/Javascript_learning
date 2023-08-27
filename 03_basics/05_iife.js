/*  Immediately Invoked Function Expression (IIFE)
        execute the function as it is written   and 
        we don't want pollution from global scope {func can take from global scope}       */


// First Method     -       no solution for global pollution
function one(){
    console.log("DB Connected - without iife");
}
one();                      // Here semi-colon helps in writting otherwise error was executing


// Second Method    -       iife
// ()() => (function defination)(execution call)
(function two() {
    console.log("DB Connected - named iife");
})();                       // Importance of semi-colons - end context 


// Writing second method with arrow function 
(()=>{
    console.log("DB Connected - arrow function - unnamed iife");
})();


// Writing second method with parameters and arguments  
((name)=>{
    console.log(`${name}, DB Connected with parameters and arguments iife`);
})("Srishti");