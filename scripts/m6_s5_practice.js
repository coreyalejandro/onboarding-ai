// Module 6 - Slide 5: Practice the Framework
// Enhanced animation sequence with timer

document.addEventListener('DOMContentLoaded', function() {
    const leftPanel = document.querySelector('.practice-panel.left');
    const rightPanel = document.querySelector('.practice-panel.right');
    const nlText = document.getElementById('nlText');
    const frameworkTemplate = document.getElementById('frameworkTemplate');
    const timerContainer = document.getElementById('timerContainer');
    const timerProgress = document.getElementById('timerProgress');

    function animatePanels() {
        // Animate left panel first
        setTimeout(() => {
            if (leftPanel) {
                leftPanel.classList.add('show');
            }
        }, 2000);

        // Animate right panel second
        setTimeout(() => {
            if (rightPanel) {
                rightPanel.classList.add('show');
            }
        }, 2500);
    }

    function animateContent() {
        // Animate NL text
        setTimeout(() => {
            if (nlText) {
                nlText.classList.add('show');
            }
        }, 3000);

        // Animate framework template
        setTimeout(() => {
            if (frameworkTemplate) {
                frameworkTemplate.classList.add('show');
            }
        }, 3500);
    }

    function animateTimer() {
        setTimeout(() => {
            if (timerContainer) {
                timerContainer.classList.add('show');
            }
        }, 4000);

        // Start timer progress
        setTimeout(() => {
            if (timerProgress) {
                let progress = 0;
                const interval = setInterval(() => {
                    progress += 2;
                    timerProgress.style.width = progress + '%';
                    
                    if (progress >= 100) {
                        clearInterval(interval);
                    }
                }, 100);
            }
        }, 4500);
    }

    function startAnimation() {
        animatePanels();
        animateContent();
        animateTimer();
    }

    // Start the animation sequence
    startAnimation();
});