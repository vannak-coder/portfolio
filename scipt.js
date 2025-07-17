// --- Smooth Scrolling for Navigation Links ---
// Select all anchor links in the nav that point to an ID on the same page
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default instant jump

        const targetId = this.getAttribute('href'); // Get the target section's ID (e.g., "#about")
        const targetElement = document.querySelector(targetId); // Find the actual HTML element

        if (targetElement) {
            // Use scrollIntoView for smooth scrolling
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// --- Responsive Navigation Toggle (Hamburger Menu) ---
const navToggle = document.querySelector('.nav-toggle'); // Select the hamburger button
const navLinks = document.querySelector('.nav-links'); // Select the <ul> element that holds the nav links

// Check if both elements exist to prevent errors if HTML structure changes
if (navToggle && navLinks) {
    // Add a click event listener to the hamburger button
    navToggle.addEventListener('click', () => {
        // Toggle the 'active' class on the nav links list
        // CSS rules will define how '.nav-links.active' looks (e.g., display: flex)
        navLinks.classList.toggle('active');
    });

    // Optional: Close the mobile menu when a navigation link is clicked
    // This provides a better user experience on touch devices
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            // If the menu is currently active (open), remove the 'active' class to close it
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });
}
