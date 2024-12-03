// Get the mobile menu button and navigation menu
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

// Add event listener to the mobile menu button
mobileMenuButton.addEventListener('click', () => {
  // Toggle the mobile navigation menu
  mobileMenu.classList.toggle('hidden');
});

// Example JavaScript for smooth scrolling to a section
document.querySelector('a[href="#"]').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#target-section').scrollIntoView({ behavior: 'smooth' });
  });


