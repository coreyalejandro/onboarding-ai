// Module 4 - Slide 3: Failing Golden → Fix → Re-run
// Animation sequence for the evaluation cycle

document.addEventListener('DOMContentLoaded', function() {
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const step3 = document.getElementById('step3');
    const arrow1 = document.getElementById('arrow1');
    const arrow2 = document.getElementById('arrow2');
    const cycleSummary = document.getElementById('cycleSummary');
    const fixItems = document.querySelectorAll('.fix-item');

    function startAnimation() {
        // Show step 1 (Fail)
        setTimeout(() => {
            if (step1) {
                step1.classList.add('show');
            }
        }, 2000);

        // Show arrow 1
        setTimeout(() => {
            if (arrow1) {
                arrow1.classList.add('show');
            }
        }, 2500);

        // Show step 2 (Investigate & Fix)
        setTimeout(() => {
            if (step2) {
                step2.classList.add('show');
            }
        }, 3000);

        // Animate fix items
        setTimeout(() => {
            fixItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('show');
                }, 3500 + (index * 300));
            });
        }, 3500);

        // Show arrow 2
        setTimeout(() => {
            if (arrow2) {
                arrow2.classList.add('show');
            }
        }, 5000);

        // Show step 3 (Pass)
        setTimeout(() => {
            if (step3) {
                step3.classList.add('show');
            }
        }, 5500);

        // Show cycle summary
        setTimeout(() => {
            if (cycleSummary) {
                cycleSummary.classList.add('show');
            }
        }, 6500);
    }

    // Start the animation sequence
    startAnimation();
});
