// Toggle Button
const toogle_button_wrapper = document.getElementsByClassName('toogle-button-wrapper')
const toogle_button = document.getElementById('toogle-button')
const toogle_span = document.getElementById('toogle-span')
const h1 = document.querySelector('h1')

// Draw Form
const fieldset = document.querySelector('fieldset')
const header = document.querySelector('#content-form header')
const form = document.querySelector('form')
const sortear_button = document.getElementById('sortear-button')
const sortear_button_p = document.querySelector('#sortear-button p')
const button_arrow = document.getElementById('button-arrow')

// Inputs values
const numbers_qty = document.getElementById('numeros')
const from_number = document.getElementById('de')
const to_number = document.getElementById('ate')

// Drawn Numbers Area
const draw_numbers_wrapper = document.getElementById('draw-numbers-wrapper')


// FUNCTIONALITY
// Functions

let numberOfDrawnNumbersIterations = 0

// Swap #content-form header's content when drawing a number
function swapHeader() {
  header.innerHTML = `
    <h2 class="label-large reveal">Resultado do sorteio:</h2>
    <p class="overline reveal">${numberOfDrawnNumbersIterations}º Resultado</p>
    <br>
  `
  // Hide toogle button
  toogle_button_wrapper[0].remove()
  // Hide form
  fieldset.remove()
}
// Check if the numbers quantity is greater than 0
function checkNumbersQuantityInput() {
  return Number(numbers_qty.value) === 0 ? true : false
}
function swapButton() {
  // Change buttons inner p apperance
  // sortear_button.innerText = 'Sortear novamente'
  sortear_button_p.innerText = 'Sortear novamente'
  // Change button's img
  button_arrow.attributes[0].textContent = 'assets/icons/draw.svg'
  // Remove previous animation
  button_arrow.classList.remove('arrow-bounce')
  // Apply styling class for layout and animation
  button_arrow.classList.add('sortear-novamente')
}
// Check if the toogle button is on for non-repetitive numbrers
function getToogleButtonState() {
  return toogle_button.classList.contains('toogle-button-is-on') ? true : false
}
// Generate a radom number between two values
function getRandomNumbers(min, max) {
  // Get values from inputs range
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Generate X amount of random numbers
function getXAmountOfRandomNumbers() {
  
  // Check if the toggle button enabled
  const isToggleButtonOn = getToogleButtonState();

  // Generate the amount of numbers specified in the "numeros" field
  // Store the values
  let numbers = []
  // Loop according to the quantity specified
  for (let i = 0; i < numbers_qty.value; i++) {
    // Generate a new number
    let newNumber = getRandomNumbers(Number(from_number.value), Number(to_number.value))
    // Check if the toggle button is enabled
    if (isToggleButtonOn) {
      // Check if the number is already been used
      if (numbers.includes(newNumber)) {
        // Reduce 1 iteration since it was not valid
        i--
        // Go to the next iteration
        continue
      } else {
        // Add non-repetitive number
        numbers.push(newNumber)
      }
    } else {
      // Toggle button not enabled, add any number in the range
      numbers.push(newNumber)
    }
  }
  // Add to the global count of iterations
  numberOfDrawnNumbersIterations++
  return numbers  
}
// Add generated number to the grid
function addDrawnNumber(drawnNumbersArray) {
  const numbers = drawnNumbersArray

  // Clear grid from previous numbers
  draw_numbers_wrapper.innerHTML = ''

  for (let i = 0; i < numbers.length; i++) {
    // Create new p element
    let p = document.createElement('p')
    // Apply class to p
    p.classList.add('new-number')
    // Add the drawn number to the new p
    p.innerHTML = numbers[i]
    draw_numbers_wrapper.append(p)
  }
}



// EVENT LISTENERS

// ANIMATION
// Add animtaion to the button's arrow icon
sortear_button.addEventListener('mouseover', () => {
  // Check the button's inner text for appropriate animation
  if (sortear_button.innerText === 'SORTEAR') {
    // Apply "sortear" animation
    button_arrow.classList.add('arrow-bounce')
  } else {
    // Apply "sortear nonvamente animation"
    button_arrow.classList.add('sortear-novamente')
  }
})
// Remove animation to the button's arrow icon
sortear_button.addEventListener('mouseout', () => {
  button_arrow.classList.remove('arrow-bouce')
})

// Swap h1 classes for desktop screens
window.addEventListener('load', () => {
  if (window.innerWidth > 390) {
    h1.classList.remove('display-medium')
    h1.classList.add('display-large')
  }
})

// Set toogle button's function and animation
toogle_button.addEventListener('click', (event) => {
  event.preventDefault()
  toogle_button.classList.toggle('toogle-button-is-on')
  toogle_span.classList.toggle('toogle-button-is-on')
})

// Sortear button's functionality
sortear_button.addEventListener('click', (event) => {
  // Prevent the page from refreshing
  event.preventDefault()

  // Check if the numbers quantity input is greater than 0
  if (checkNumbersQuantityInput()) {
    return alert('Insira um valor maior que 0 e numérico')
  }

  if (sortear_button_p.innerText === 'SORTEAR' || sortear_button_p.innerText === 'SORTEAR NOVAMENTE') {
      addDrawnNumber(getXAmountOfRandomNumbers())
  }
  // Swap the header for new text when drawing
  swapHeader();
  // Swap button's inner text and icon
  swapButton();
})