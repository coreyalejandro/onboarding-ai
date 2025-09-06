// Module 6 - Slide 3: Examples — NL vs ML-Friendly
// Enhanced animation sequence for example panels and caption

document.addEventListener('DOMContentLoaded', function() {
    const nlPanel = document.getElementById('nlPanel');
    const mlPanel = document.getElementById('mlPanel');
    const bottomCaption = document.getElementById('bottomCaption');

    function animatePanels() {
        // Animate NL panel first
        setTimeout(() => {
            if (nlPanel) {
                nlPanel.classList.add('show');
            }
        }, 2000);

        // Animate ML panel second
        setTimeout(() => {
            if (mlPanel) {
                mlPanel.classList.add('show');
            }
        }, 2500);
    }

    function animateCodeBlocks() {
        const codeBlocks = document.querySelectorAll('.code-block');
        codeBlocks.forEach((block, index) => {
            setTimeout(() => {
                block.classList.add('show');
            }, 3000 + (index * 500));
        });
    }

    function animateCaption() {
        setTimeout(() => {
            if (bottomCaption) {
                bottomCaption.classList.add('show');
            }
        }, 5000);
    }

    function startAnimation() {
        animatePanels();
        animateCodeBlocks();
        animateCaption();
    }

    // Start the animation sequence
    startAnimation();
});
