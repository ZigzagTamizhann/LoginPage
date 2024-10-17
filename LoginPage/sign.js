// Select elements from the DOM
const signupForm = document.querySelector("form.signup");

// Event listener for form submission to save email and password
signupForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get the values from the input fields
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Validate that password and confirm password match
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    // Save the email and password to localStorage
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    // Provide feedback to the user
    alert("Signup successful! You can now log in.");

    // Redirect to the login page
    window.location.href = "index.html";
});
