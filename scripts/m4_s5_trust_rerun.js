// Module 4 - Slide 5: Trust What You Can Re-run
// Animation sequence showing the evaluation loop

document.addEventListener('DOMContentLoaded', function() {
    const testStep = document.getElementById('testStep');
    const agentStep = document.getElementById('agentStep');
    const resultStep = document.getElementById('resultStep');
    const arrow1 = document.getElementById('arrow1');
    const arrow2 = document.getElementById('arrow2');
    const arrow3 = document.getElementById('arrow3');
    const stabilityIndicator = document.getElementById('stabilityIndicator');
    const trustMessage = document.getElementById('trustMessage');
    const unpredictabilityOverlay = document.getElementById('unpredictabilityOverlay');

    function startAnimation() {
        // Show test step
        setTimeout(() => {
            if (testStep) {
                testStep.classList.add('show');
            }
        }, 2000);

        // Show arrow 1
        setTimeout(() => {
            if (arrow1) {
                arrow1.classList.add('show');
            }
        }, 2500);

        // Show agent step
        setTimeout(() => {
            if (agentStep) {
                agentStep.classList.add('show');
            }
        }, 3000);

        // Show arrow 2
        setTimeout(() => {
            if (arrow2) {
                arrow2.classList.add('show');
            }
        }, 3500);

        // Show result step
        setTimeout(() => {
            if (resultStep) {
                resultStep.classList.add('show');
            }
        }, 4000);

        // Show arrow 3 (loop back)
        setTimeout(() => {
            if (arrow3) {
                arrow3.classList.add('show');
            }
        }, 4500);

        // Show stability indicator
        setTimeout(() => {
            if (stabilityIndicator) {
                stabilityIndicator.classList.add('show');
            }
        }, 5000);

        // Start loop animation
        setTimeout(() => {
            startLoopAnimation();
        }, 6000);

        // Show trust message
        setTimeout(() => {
            if (trustMessage) {
                trustMessage.classList.add('show');
            }
        }, 8000);

        // Show unpredictability overlay briefly
        setTimeout(() => {
            if (unpredictabilityOverlay) {
                unpredictabilityOverlay.classList.add('show');
            }
        }, 10000);

        // Hide unpredictability overlay
        setTimeout(() => {
            if (unpredictabilityOverlay) {
                unpredictabilityOverlay.classList.remove('show');
            }
        }, 12000);
    }

    function startLoopAnimation() {
        const steps = [testStep, agentStep, resultStep];
        
        function animateLoop() {
            steps.forEach((step, index) => {
                if (step) {
                    setTimeout(() => {
                        step.classList.add('looping');
                        setTimeout(() => {
                            step.classList.remove('looping');
                        }, 2000);
                    }, index * 700);
                }
            });
        }

        // Run the loop animation a few times
        animateLoop();
        setTimeout(animateLoop, 3000);
        setTimeout(animateLoop, 6000);
    }

    // Start the animation sequence
    startAnimation();
});
