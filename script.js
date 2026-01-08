// I have given the comments for understanding purpose
// Get the input box element where numbers and results will appear
let input = document.getElementById('inputbox');

// Get all the button elements (numbers, operators, AC, DEL, =)
let buttons = document.querySelectorAll('button');

// This variable will store the user's input as a string
let string = "";

// Convert the list of buttons into an array so we can loop through them easily
let arr = Array.from(buttons);

// Go through each button one by one
arr.forEach(button => {

    // Add a "click" event listener to each button
    button.addEventListener('click', (e) => {

        // If the "=" button is clicked
        if (e.target.innerHTML == '=') {
            // Use eval() to calculate the math expression stored in 'string'
            string = eval(string);
            // Show the result in the input box
            input.value = string;
        }

        // If the "AC" (All Clear) button is clicked
        else if (e.target.innerHTML == 'AC') {
            // Clear everything (reset the string and the display)
            string = "";
            input.value = string;
        }

        // If the "DEL" (Delete) button is clicked
        else if (e.target.innerHTML == 'DEL') {
            // Remove the last character from the string
            string = string.substring(0, string.length - 1);
            input.value = string;
        }

        // For all other buttons (numbers and operators)
        else {
            // Add the clicked button's text to the end of 'string'
            string += e.target.innerHTML;
            // Update the input box to show what the user typed
            input.value = string;
        }
    });
});
