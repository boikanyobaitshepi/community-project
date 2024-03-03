document.addEventListener('DOMContentLoaded', function () {
    // DOMContentLoaded event ensures that the DOM is fully loaded before executing JavaScript

    // Select the button element by its id
    var button = document.getElementById('myButton');

    // Add a click event listener to the button
    button.addEventListener('click', function () {
        // Log a message to the console when the button is clicked
        console.log('Button clicked!');
    });
});
