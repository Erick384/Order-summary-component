let element = document.querySelector('.two');
let detail = document.querySelector('#change');

detail.addEventListener('click', function() {
  // Update the detail text
  element.textContent = 'No other Plan!';
});

let payment = document.querySelector('.button');
let bottom = document.querySelector('.bottom')
payment.addEventListener('click', function(){
    bottom.textContent = 'Order Placed Successfully!!'
}
)