// Toggle Button
const toogle_button = document.getElementById('toogle-button')
const toogle_span = document.getElementById('toogle-span')
const h1 = document.querySelector('h1')



// Draw Form
const form = document.querySelector('form')
const sortear_button = document.getElementById('sortear-button')
const button_arrow = document.getElementById('button-arrow')

// Set toogle button's function
toogle_button.addEventListener('click', (event) => {
  event.preventDefault()
  toogle_button.classList.toggle('toogle-button-is-on')
  toogle_span.classList.toggle('toogle-button-is-on')
})

// Add animtaion to the button's arrow icon
sortear_button.addEventListener('mouseover', () => {
  button_arrow.classList.add('arrow-bounce')
})

// Remove animtaion to the button's arrow icon
sortear_button.addEventListener('mouseout', () => {
  button_arrow.classList.remove('arrow-bouce')
})

// Sortear button's functionality
sortear_button.addEventListener('click', (event) => {
  event.preventDefault()
})