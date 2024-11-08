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

document.getElementById('download-resume').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior

    const url = './assets/resume.pdf'; // Resume path
    const a = document.createElement('a'); // Create a temporary <a> element
    a.href = url;
    a.target = '_blank'; // Open in new tab
    a.download = 'VaibhavGiri_Resume.pdf'; // Download with specified filename
    document.body.appendChild(a); // Append to body to make it part of the DOM
    a.click(); // Programmatically click to trigger download
    document.body.removeChild(a); // Remove it after the download
});
