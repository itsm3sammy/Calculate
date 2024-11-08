// Add event listener to toggle between dark and light mode
document.querySelector('.switch .input').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
});

// Function to clear the calculator display
function clearDisplay() {
    document.getElementById('display').value = '0';
}

// Function to append values to the calculator display
function appendToDisplay(value) {
    let display = document.getElementById('display');
    
    // Replace the default 0 with the new value, or append the new value
    if (display.value === '0') {
        display.value = value;
    } else {
        display.value += value;
    }
}

// Function to delete the last character from the display
function deleteLast() {
    let display = document.getElementById('display');
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = '0';
    }
}

// Function to calculate the expression
function calculate() {
    let display = document.getElementById('display');
    let expression = display.value;

    try {
        // Handle square root operation
        if (expression.includes('sqrt')) {
            expression = expression.replace('sqrt(', 'Math.sqrt(');
        }

        // Handle power (square) operation
        if (expression.includes('^2')) {
            expression = expression.replace('^2', '**2');
        }

        // Evaluate the expression
        let result = eval(expression);

        // Check for division by zero or invalid result
        if (result === Infinity || isNaN(result)) {
            alert("Invalid Calculation (e.g., Division by zero)");
            clearDisplay();
        } else {
            display.value = result;
        }
    } catch (error) {
        alert('Invalid Calculation!');
        clearDisplay();
    }
}
