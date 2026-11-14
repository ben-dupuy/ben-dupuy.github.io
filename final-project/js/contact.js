// Shows a confirmation message when the contact form is submitted.
const form = document.querySelector('.contact-form');
const message = document.querySelector('#form-message');

form.addEventListener('submit', function (event) {
  // Stop the page from reloading (the form has no real backend yet).
  event.preventDefault();

  const name = form.elements.name.value.trim();
  message.textContent = 'Thanks, ' + name + '! Your message was sent. I\'ll get back to you within a day.';
  message.hidden = false;

  form.reset();
});
