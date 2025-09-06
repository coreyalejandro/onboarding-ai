// Module 4 - Slide 1: Same Input, Different Output = Chaos
// Animation sequence showing non-deterministic behavior

document.addEventListener('DOMContentLoaded', function() {
    const run1 = document.getElementById('run1');
    const run2 = document.getElementById('run2');
    const chaosOverlay = document.getElementById('chaosOverlay');
    const highlightDifferences = document.getElementById('highlightDifferences');
    const output1 = document.getElementById('output1');
    const output2 = document.getElementById('output2');

    function startAnimation() {
        // Show both runs
        setTimeout(() => {
            if (run1) {
                run1.classList.add('show');
            }
        }, 2000);

        setTimeout(() => {
            if (run2) {
                run2.classList.add('show');
            }
        }, 2500);

        // Add shake effect to show chaos
        setTimeout(() => {
            if (run1) {
                run1.classList.add('chaos-shake');
            }
            if (run2) {
                run2.classList.add('chaos-shake');
            }
        }, 3500);

        // Show highlight differences
        setTimeout(() => {
            if (highlightDifferences) {
                highlightDifferences.classList.add('show');
            }
            
            // Animate individual arrows
            const arrows = document.querySelectorAll('.diff-arrow');
            arrows.forEach((arrow, index) => {
                setTimeout(() => {
                    arrow.classList.add('show');
                }, 4000 + (index * 200));
            });
        }, 4000);

        // Show chaos overlay
        setTimeout(() => {
            if (chaosOverlay) {
                chaosOverlay.classList.add('show');
            }
        }, 5000);

        // Highlight differences in text
        setTimeout(() => {
            if (output1 && output2) {
                // Add subtle highlighting to show differences
                output1.style.background = 'linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%)';
                output2.style.background = 'linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%)';
            }
        }, 4500);
    }

    // Start the animation sequence
    startAnimation();
});
