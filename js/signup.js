document.addEventListener('DOMContentLoaded', () => {
    const joinButton = document.getElementById('joinButton');
    const selectedRole = document.getElementById('selectedRole');
    const form = document.getElementById('joinForm');

    // Update button text based on selected role
    form.addEventListener('change', () => {
        const userType = document.querySelector('input[name="userType"]:checked').value;
        selectedRole.textContent = userType;  // Change the text inside the button to the selected role
    });

    // Handle form submission and redirect
    joinButton.addEventListener('click', () => {
        const userType = document.querySelector('input[name="userType"]:checked').value;

        // Redirect based on the selected role
        if (userType === 'Client') {
            window.location.href = 'signupclient.html';  // Replace with your Client page URL
        } else if (userType === 'Freelancer') {
            window.location.href = 'signupfreelancer.html';  // Replace with your Freelancer page URL
        }
    });
});
