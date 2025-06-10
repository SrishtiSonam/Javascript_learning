const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

console.log(buttons)
// Nodelist

buttons.forEach(button => {
    
    console.log(button)
    // HTML Span Element

    // Listening the event 
    button.addEventListener('click', (event) => {
        console.log(event)  
        // Event object contains information about the event - Mouse event, Keyboard event, etc.

        console.log(event.target)
        // event.target is the element that triggered the event {from where event is coming from}

        body.style.backgroundColor = event.target.id;
    })


})
