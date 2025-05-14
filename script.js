// Event listener for the check button
document.getElementById('check-btn').addEventListener('click', function() {
    // Get user input and trim any extra spaces
    const userInput = document.getElementById('user-input').value.trim();
    const resultDiv = document.getElementById('results-div');

    // Check if input is empty
    if (!userInput) {
        alert('Please provide a phone number');
        return;
    }

    // Updated regex to validate US phone numbers (including international formats with + or 00)
    const validUSPhoneRegex = /^(00|\+)?1? ?(\(\d{3}\)|\d{3})([ .-])?\d{3}([ .-])?\d{4}( ext\.?\d+| x\d+)?$/;

    // Check if the user input matches the updated regex
    if (validUSPhoneRegex.test(userInput)) {
        resultDiv.textContent = `Valid US number: ${userInput}`;
    } else {
        resultDiv.textContent = `Invalid US number: ${userInput}`;
    }
});

// Clear button functionality
document.getElementById('clear-btn').addEventListener('click', function() {
    // Clear the results and input field
    document.getElementById('results-div').textContent = '';
    document.getElementById('user-input').value = '';
});
