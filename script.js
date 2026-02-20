// Ikarus Studio - Main JavaScript File

// Handle button clicks
document.addEventListener('DOMContentLoaded', function() {
  const shopButton = document.querySelector('.hero button');
  
  if (shopButton) {
    shopButton.addEventListener('click', function() {
      alert('Welcome to Ikarus Studio! Our shop is coming soon.');
    });
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
