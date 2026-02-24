// This function runs once the page is fully loaded
window.onload = function() {

    // --- 1. SMOOTH SCROLLING ---
    // Look for all links in the navigation bar
    const links = document.querySelectorAll('nav a');

    for (const link of links) {
        link.addEventListener('click', function(event) {
            
            // Get the ID from the href (like "#about")
            const targetId = this.getAttribute('href');
            
            // Only scroll if the link starts with #
            if (targetId.startsWith("#")) {
                event.preventDefault(); // Stop the instant jump

                // Find the section we want to go to
                const section = document.querySelector(targetId);
                
                if (section) {
                    // Smoothly slide to that section
                    section.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    }

    // --- 2. BUTTON CLICKS ---
    // Make the hero buttons work (optional but nice)
    const projectBtn = document.querySelector('.btn');
    if(projectBtn) {
        projectBtn.onclick = function() {
            document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
        };
    }
};