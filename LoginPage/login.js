// Select elements from the DOM
const loginForm = document.querySelector("form.login");

// Event listener for form submission to validate email and password
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get the values from the input fields
    const enteredEmail = document.getElementById("login-email").value;
    const enteredPassword = document.getElementById("login-password").value;

    // Retrieve saved email and password from localStorage
    const savedEmail = localStorage.getItem('userEmail');
    const savedPassword = localStorage.getItem('userPassword');

    // Check if entered email and password match the saved ones
    if (enteredEmail === savedEmail && enteredPassword === savedPassword) {
        // Redirect to YouTube if the credentials match
        window.location.href = "D:/Project/PONG_GAME/game/index.html";
    } else {
        // Show an error message if the credentials don't match
        alert("Invalid email or password. Please try again.");
    }
});
