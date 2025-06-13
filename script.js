// Toggle Button
const toogle_button = document.getElementById('toogle-button')
const toogle_span = document.getElementById('toogle-span')
const h1 = document.querySelector('h1')

// Draw Form
const form = document.querySelector('form')
const sortear_button = document.getElementById('sortear-button')
const button_arrow = document.getElementById('button-arrow')



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

// Remove animtaion to the button's arrow icon
sortear_button.addEventListener('mouseout', () => {
  button_arrow.classList.remove('arrow-bouce')
})



// FUNCTIONALITY
// Set toogle button's function and animation
toogle_button.addEventListener('click', (event) => {
  event.preventDefault()
  toogle_button.classList.toggle('toogle-button-is-on')
  toogle_span.classList.toggle('toogle-button-is-on')
})

// Generate a radom number between to values and a x amount of times
function getRandomNumbers(min, max, qty = 1) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Sortear button's functionality
sortear_button.addEventListener('click', (event) => {
  event.preventDefault()
  const randomNumber = getRandomNumbers(1, 20)
  console.log(randomNumber);
})