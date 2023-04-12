let element = document.querySelector('.two');
let detail = document.querySelector('.two');

element.addEventListener('click', function() {
  // Update the detail text
  detail.textContent = 'New detail!';
});