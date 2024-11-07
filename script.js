// Smooth scroll for navbar links with offset for sticky header
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetSection = document.querySelector(this.getAttribute('href'));
        
        // Scroll to the target section with offset
        window.scrollTo({
            top: targetSection.offsetTop - 60, // Adjust for the height of the fixed navbar
            behavior: 'smooth'
        });
    });
});

// Resume download functionality
document.getElementById('download-resume').addEventListener('click', function() {
    window.open('resume.pdf', '_blank');
});
