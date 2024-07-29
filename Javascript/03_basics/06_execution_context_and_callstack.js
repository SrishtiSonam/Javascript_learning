/*      Javascript Execution Context         */

/*
To run the program it runs our code into two phase. 
        =>  Global Execution Context, it is refered to {this},GEC [ Global Environment ]
        =>  Funtion/Funtional Execution Context
        => Eval Execution Context
How javascript code is executed (in two phases)
        1) Memory creation phase / Memory phase / Creation phase { Only memory is allocated }
        2) Execution Phase 
*/

/*      A code :-       */
let val1 = 10
let val2 = 5
function addNum(num1,num2){
    let total = num1+num2
    return total
}
let result1 = addNum(val1,val2)
let result2 = addNum(20,15)

/*

1} Global Execution     ->      this
2} Memory Phase     ->      {Collect all the variablesand just allocate their place in memory}
    val1 = undefined
    val2 = undefined
    addNum = defination of the function
    result1 = undefined
    result2 = undefined
    {{ First Cycle }}
3} Execution Phase
    val1 = 10
    val2 = 5
    addNum => new env + execution threat  -  [ Memory Creation Phase + Execution Phase ]
            Memory Phase : 
                val1 = undefined
                val2 = undefined
                total = undefined 
            Executional Phase :
                num1 = 10
                num2 = 5
                total = 15
                { this total is being retured }
                { It will be retured back to it's parent executional context [ Here global executional context ]}
            ( All this get deleted and we reture to our previous executional context )
    result1 = 15
    result2 = .....................

*/


/*      Call Stack        

        |                    |              # lifo
        | { as other func    |
        | get exe it get     |
        | forms and deteled  |
        | from here }        |
        |                    |
        |   { Global E C }   |
        |____________________|              
*/


/* 
-> Inspect Element 
-> Source tab { top bar } 
-> Make Direct Snippets 
-> Write a code, wiyh function
-> Apply breakpoints by clicking on linenumbers, after saving the breakpoints
-> Scroll down in left bottom window { Click on call stack }
-> Click on playandpause botton to check stack at each breakpoint 
*/ 


function one(){
    console.log("Function One")
    two()
}
function two(){
    console.log("Function Two")
    three()
}
function three(){
    console.log("Function Three")
}
one()


