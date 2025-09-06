// Module 4 - Slide 4: Write Your First Golden Test Case
// Animation sequence with timer for writing test

document.addEventListener('DOMContentLoaded', function() {
    const templateSection = document.querySelector('.template-section');
    const exampleSection = document.querySelector('.example-section');
    const blankSection = document.querySelector('.blank-section');
    const timerSection = document.getElementById('timerSection');
    const timerProgress = document.getElementById('timerProgress');

    function startAnimation() {
        // Show template section
        setTimeout(() => {
            if (templateSection) {
                templateSection.classList.add('show');
            }
        }, 2000);

        // Show example section
        setTimeout(() => {
            if (exampleSection) {
                exampleSection.classList.add('show');
            }
        }, 2500);

        // Show blank section
        setTimeout(() => {
            if (blankSection) {
                blankSection.classList.add('show');
            }
        }, 3000);

        // Show timer section
        setTimeout(() => {
            if (timerSection) {
                timerSection.classList.add('show');
            }
        }, 3500);

        // Start timer animation
        setTimeout(() => {
            startTimer();
        }, 4000);
    }

    function startTimer() {
        if (!timerProgress) return;
        
        const duration = 30000; // 30 seconds
        const startTime = Date.now();
        
        function updateTimer() {
            const elapsed = Date.now() - startTime;
            const progress = Math.min((elapsed / duration) * 100, 100);
            
            timerProgress.style.width = progress + '%';
            
            if (progress < 100) {
                requestAnimationFrame(updateTimer);
            } else {
                // Timer completed
                timerProgress.style.background = 'linear-gradient(90deg, #e74c3c 0%, #c0392b 100%)';
            }
        }
        
        updateTimer();
    }

    // Start the animation sequence
    startAnimation();
});
