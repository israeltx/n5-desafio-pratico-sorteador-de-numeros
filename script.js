// Toggle Button
const toogle_button = document.getElementById('toogle-button')
const toogle_span = document.getElementById('toogle-span')
const h1 = document.querySelector('h1')

// Draw Form
const form = document.querySelector('form')
const sortear_button = document.getElementById('sortear-button')
const button_arrow = document.getElementById('button-arrow')

// Inputs values
const numbers_qty = document.getElementById('numeros')
const from_number = document.getElementById('de')
const to_number = document.getElementById('ate')

// numbers_qty.addEventListener('on')

// LAYOUT
// Swap h1 classes
window.addEventListener('load', (event) => {
  if (window.innerWidth > 390) {
    h1.classList.remove('display-medium')
    h1.classList.add('display-large')
  }
})



// ANIMATION
// Add animtaion to the button's arrow icon
sortear_button.addEventListener('mouseover', () => {
  button_arrow.classList.add('arrow-bounce')
})

// Remove animation to the button's arrow icon
sortear_button.addEventListener('mouseout', () => {
  button_arrow.classList.remove('arrow-bouce')
})

// Check if the numbers quantity is greater than 0
function checkNumbersQuantityInput() {
  if (Number(numbers_qty.value) === 0) {
    return alert('Insira um valor maior que 0 e numérico')
  }
}


// FUNCTIONALITY
// Set toogle button's function and animation
toogle_button.addEventListener('click', (event) => {
  event.preventDefault()
  toogle_button.classList.toggle('toogle-button-is-on')
  toogle_span.classList.toggle('toogle-button-is-on')
})

// Generate a radom number between to values and a x amount of times
function getRandomNumbers(min, max) {
  // Get values from inputs range
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Sortear button's functionality
sortear_button.addEventListener('click', (event) => {
  event.preventDefault()

  // Check if the numbers quantity input is greater than 0
  checkNumbersQuantityInput()

  // Generate the amount of numbers specified in the "numeros" field
  let numbers = []
  for (let i = 0; i < numbers_qty.value; i++) {
    numbers.push(getRandomNumbers(Number(from_number.value), Number(to_number.value)))
    console.log('number');
  }

  
  console.log(numbers_qty.value, from_number.value, to_number.value, numbers);
  
})