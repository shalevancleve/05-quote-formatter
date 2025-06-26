// Get the form and result elements from the page
const form = document.getElementById('form'); // const is used because we don't want to reassign form
const result = document.getElementById('result'); // const is used because we don't want to reassign result

// Add an event listener to the form for when it is submitted
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Stop the page from reloading

  // Get the values from the input fields
  var noun = document.getElementById('noun').value;
  var verb = document.getElementById('verb').value;
  var adjective = document.getElementById('adjective').value;

  // Create the sentence using template literals for easier formatting
  var sentence = `${verb}ing ${adjective} ${noun} is the real test of character. #LifeRules`;

  // Capitalize the first letter of the sentence
  sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

  // Show the sentence in the result paragraph
  result.textContent = sentence;
});
