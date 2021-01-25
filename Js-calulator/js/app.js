// Display error message
function displayError(message) {
  document.querySelector(".results").style.display = "none";
  document.querySelector(".error").innerHTML = message;
  document.querySelector(".error").style.display = "block";
}

// Display results
function displayResult(results) {
  document.querySelector(".error").style.display = "none";
  document.querySelector("#results").innerHTML = results;
  document.querySelector(".results").style.display = "block";
}

// Reset
document.querySelector("#reset").addEventListener("click", function () {
  document.querySelector("form").reset();
  document.querySelector(".error").style.display = "none";
  document.querySelector(".results").style.display = "none";
});

// Form
document.querySelector("form").addEventListener("submit", function (event) {
  // Block the sending of the form
  event.preventDefault();

  // Data recovery
  let number1 = parseInt(document.querySelector("#number1").value);
  let number2 = parseInt(document.querySelector("#number2").value);
  let selectedValue = document.querySelector("#operation").selectedOptions[0]
    .value;

  // Error: inputs are not numbers
  if (isNaN(number1) || isNaN(number2)) {
    displayError("Error : enter a number");
    return;
  }

  // Error : unauthorized opération
  let operationsPermitted = ["+", "-", "*", "/"];
  if (!operationsPermitted.includes(selectedValue)) {
    displayError("Error : unauthorized opération");
    return;
  }

  // Calcul
  let results = 0;
  switch (selectedValue) {
    case "+":
      results = number1 + number2;
      break;
    case "-":
      results = number1 - number2;
      break;
    case "*":
      results = number1 * number2;
      break;
    case "/":
      if (number2 == 0) {
        displayError("Error : dividing by zero");
        return;
      }
      results = number1 / number2;
      break;
  }
  displayResult(results);
});
