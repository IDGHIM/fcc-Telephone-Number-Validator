document.getElementById('check-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value.trim();
    const resultDiv = document.getElementById('results-div');

    if (!userInput) {
        alert('Please provide a phone number');
        return;
    }

    const validUSPhoneRegex = /^1? ?(\(\d{3}\)|\d{3})( |-|)?\d{3}( |-|)?\d{4}$/;

    if (validUSPhoneRegex.test(userInput)) {
        resultDiv.textContent = `Valid US number: ${userInput}`;
    } else {
        resultDiv.textContent = `Invalid US number: ${userInput}`;
    }
});

// Clear button functionality
document.getElementById('clear-btn').addEventListener('click', function() {
    document.getElementById('results-div').textContent = '';
    document.getElementById('user-input').value = '';
});
