document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // Get form data
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (username && email && password) {
        // logic to send this data to your server
        alert('Registration successful!\nUsername: ' + username + '\nEmail: ' + email);
        
        // Reset the form after submission
        document.getElementById('registrationForm').reset();
    } else {
        alert('Please fill in all the fields.');
    }
});
