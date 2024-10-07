// Notification toggle

function toggleMenu() {
    var navLinks = document.querySelector('.nav-links');
    if (navLinks !== null) {
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.backgroundColor = '#435261'; 
            navLinks.style.height = '175px';
            navLinks.style.width = '150px';
            navLinks.style.padding = '0px';
        }
    } else {
        console.error("Element with class 'nav-links' not found.");
    }
}

// Contact form

    document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // You can perform form validation or AJAX request here if needed

    // Show the success message
    document.getElementById('successMessage').style.display = 'block';

    // Optionally, you can clear the form fields after successful submission
    document.getElementById('contactForm').reset();
});
