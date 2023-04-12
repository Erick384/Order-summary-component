let element = document.querySelector(".two");
let detail = document.querySelector("#change");

let payment = document.querySelector(".button");
let bottom = document.querySelector(".bottom");
payment.addEventListener("click", function () {
  bottom.textContent = "Order Placed Successfully!!";
});

let options = document.querySelector("#my-options");
let optionDivs = options.querySelectorAll(".option");
let output = document.querySelector("#output");

detail.addEventListener("click", function () {
  // Show the options
  options.style.display = "block";
  // Add event listener to each option div
  optionDivs.forEach(function (optionDiv) {
    optionDiv.addEventListener("click", function () {
      // Choose the selected option
      output.innerHTML = optionDiv.innerHTML;
      // Hide the options
      options.style.display = "none";
    });
  });
});
