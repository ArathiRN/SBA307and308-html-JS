document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
    // Here you can add code to handle form submission,
    // such as sending the data to a server.
});

function navigateToSection(page, sectionId) {
    window.location.href = `${page}#${sectionId}`;
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const address = document.getElementById('address').value;

    if (!firstName || !lastName || !email || !phone || !dob || !gender || !address) {
        alert('Please fill out all fields.');
        return;
    }

    if (!/^\d{10}$/.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }

    alert('Registration successful!');
});
document.querySelector('h1').addEventListener('click', function() {
    alert('You clicked the heading!');
});
/*
function navigateToSection(page, sectionId) {
    window.location.href = `${page}#${sectionId}`;
}
*/