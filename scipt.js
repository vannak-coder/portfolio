// --- 1. Smooth Scrolling for Navigation Links ---
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


// --- 2. Responsive Navigation Toggle (Hamburger Menu) ---
const navToggle = document.querySelector('.nav-toggle'); // Select the hamburger button
const navLinks = document.querySelector('.nav-links'); // Select the <ul> element that holds the nav links

// Check if both elements exist to prevent errors if HTML structure changes
if (navToggle && navLinks) {
    // Add a click event listener to the hamburger button
    navToggle.addEventListener('click', () => {
        // Toggle the 'active' class on the nav links list
        // CSS rules will define how '.nav-links.active' looks (e.g., display: flex)
        navLinks.classList.toggle('active');
        // Optional: Toggle aria-expanded for accessibility
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
        navToggle.setAttribute('aria-expanded', !isExpanded);
    });

    // Optional: Close the mobile menu when a navigation link is clicked
    // This provides a better user experience on touch devices
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            // If the menu is currently active (open), remove the 'active' class to close it
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false'); // Reset aria-expanded
            }
        });
    });
}


// --- 3. Dark/Light Theme Toggle ---
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body; // Reference to the <body> element

// Function to set the theme based on preference
function setTheme(isDark) {
    if (isDark) {
        body.classList.add('dark-theme');
        // Show sun icon, hide moon icon
        themeToggleBtn.querySelector('.fa-moon').style.display = 'none';
        themeToggleBtn.querySelector('.fa-sun').style.display = 'inline-block';
        localStorage.setItem('theme', 'dark'); // Save preference
    } else {
        body.classList.remove('dark-theme');
        // Show moon icon, hide sun icon
        themeToggleBtn.querySelector('.fa-moon').style.display = 'inline-block';
        themeToggleBtn.querySelector('.fa-sun').style.display = 'none';
        localStorage.setItem('theme', 'light'); // Save preference
    }
}

// Check for saved theme preference on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    // If a theme is saved, apply it. Otherwise, default to light.
    if (savedTheme === 'dark') {
        setTheme(true);
    } else {
        setTheme(false); // Handles 'light' or no saved preference
    }
});

// Event listener for the theme toggle button
if (themeToggleBtn) { // Check if button exists
    themeToggleBtn.addEventListener('click', () => {
        // Toggle the theme: if body has dark-theme, switch to light; otherwise, switch to dark
        const currentThemeIsDark = body.classList.contains('dark-theme');
        setTheme(!currentThemeIsDark);
    });
}
