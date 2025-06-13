const form = document.querySelector('form')
const toogle_button = document.getElementById('toogle-button')
const toogle_span = document.getElementById('toogle-span')

toogle_button.addEventListener('click', (event) => {
  event.preventDefault()
  toogle_button.classList.toggle('toogle-button-is-on')
  toogle_span.classList.toggle('toogle-button-is-on')
})

