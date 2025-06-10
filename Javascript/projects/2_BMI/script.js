const form = document.querySelector('form')
const result = document.getElementById('result')

form.addEventListener('submit', function(event) {
  
    event.preventDefault()
    // Prevent the form from submitting and refreshing the page

    // Taking the values after submit button is clicked. 
    const weight = parseFloat(document.getElementById('weight').value)
    const height = parseFloat(document.getElementById('height').value)

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        result.textContent = 'Please enter valid positive numbers for weight and height.'
        return
    }

    const bmi = weight / (height * height)
    result.textContent = `Your BMI is ${bmi.toFixed(2)}`

})
