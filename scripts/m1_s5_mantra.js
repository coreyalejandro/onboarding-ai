// Module 1 - Slide 5: One Source. One System. One Notebook
// Animation sequence for the mantra display

document.addEventListener('DOMContentLoaded', function() {
    const lines = [
        { id: 'line1', delay: 1000 },
        { id: 'line2', delay: 2500 },
        { id: 'line3', delay: 4000 }
    ];

    function showLine(lineId) {
        const lineElement = document.getElementById(lineId);
        if (lineElement) {
            lineElement.classList.add('show');
        }
    }

    function startAnimation() {
        lines.forEach((line) => {
            setTimeout(() => {
                showLine(line.id);
            }, line.delay);
        });
    }

    // Start the animation sequence
    startAnimation();
});
