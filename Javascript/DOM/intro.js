//      --------------------        In Page Inspect         ----------------------          //


/*
console.log(window)     ->      All details
console.log(window.document)    ->  All details about Document 
                                ->  Shortcut - console.log(document) 
                                -> All things related page html and all.
                                -> To get more details like jquery and all - console.dir(document)
*/


// Diagramatic Structure is ( Parent-Child Relation ):-
/*
1. Window
2. Document
3. HTML
    A. Head
        I. title 
            a. text node 
        II. meta
            a. Attribute
    B. Body
        I. Div, which have attribute of its own 
            a. H1
                i. attribute
                ii. text node
            b. p (paragraph)
                i. text node
{{  Just know - how to reach to a note/attribute.   }}
This helps us with console.log(document.__)
*/


// console.log(document.links)  -> HTML collection      (( Similar to array ))


// SELECTOR ELEMENTS 
/*
    document.getElementById()   ->  Will provide whole tag
    document.getElementById('ID').innerHTML = "<h2>Chai or Code</h2>"
*/






//      ----------------------       New Elements and Relations      ---------------------       //