// Get the form element
const form = document.getElementById('form'); // 'const' is used because the form element does not change

// Add event listener to the form
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting the traditional way

  // Get the values from the input fields
  const noun = document.getElementById('noun').value;
  const verb = document.getElementById('verb').value;
  const adjective = document.getElementById('adjective').value;

  // Create the sentence using template literals
  let sentence = `${verb}ing ${adjective} ${noun} is the real test of character. #LifeRules`;

  // Display the sentence in the result paragraph
  document.getElementById('result').textContent = sentence;
});