// Template JavaScript for new slides
// Copy this file when creating new slide JavaScript files

document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('mainContent');
    const secondaryContent = document.getElementById('secondaryContent');

    function startAnimation() {
        // Show main content
        setTimeout(() => {
            if (mainContent) {
                mainContent.classList.add('show');
            }
        }, 2000);

        // Show secondary content
        setTimeout(() => {
            if (secondaryContent) {
                secondaryContent.classList.add('show');
            }
        }, 2500);
    }

    // Start the animation sequence
    startAnimation();
});
