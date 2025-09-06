// Module 3 - Slide 4: Upgrade Plan -- From Hobby to Professional
// Animation sequence for the 5-step upgrade process

document.addEventListener('DOMContentLoaded', function() {
    const steps = [
        { id: 'step1', delay: 2000, exampleDelay: 3000 },
        { id: 'step2', delay: 4000, exampleDelay: 5000 },
        { id: 'step3', delay: 6000, exampleDelay: 7000 },
        { id: 'step4', delay: 8000, exampleDelay: 9000 },
        { id: 'step5', delay: 10000, exampleDelay: 11000 }
    ];

    let currentStepIndex = 0;

    function animateStep(stepId, exampleDelay) {
        const stepElement = document.getElementById(stepId);
        const exampleIds = {
            'step1': 'specExample',
            'step2': 'testsExample', 
            'step3': 'loggingExample',
            'step4': 'guardrailsExample',
            'step5': 'docsExample'
        };
        const exampleElement = document.getElementById(exampleIds[stepId]);
        const statusElement = document.getElementById(stepId + 'Status');

        // Animate step in
        setTimeout(() => {
            stepElement.classList.add('animate-in');
        }, 500);

        // Show example after delay
        setTimeout(() => {
            if (exampleElement) {
                exampleElement.classList.add('show');
            }
        }, exampleDelay);

        // Mark as upgraded after showing example
        setTimeout(() => {
            stepElement.classList.add('completed');
            if (statusElement) {
                statusElement.textContent = 'Upgraded';
                statusElement.classList.add('upgraded');
            }
        }, exampleDelay + 1500);
    }

    function showSummary() {
        setTimeout(() => {
            const summaryPanel = document.getElementById('summaryPanel');
            summaryPanel.classList.add('show');
        }, 12000);
    }

    // Start the animation sequence
    function startAnimation() {
        steps.forEach((step, index) => {
            setTimeout(() => {
                animateStep(step.id, step.exampleDelay - step.delay);
            }, step.delay);
        });

        showSummary();
    }

    // Initialize the animation
    startAnimation();

    // Add click handlers for manual progression (optional)
    steps.forEach((step, index) => {
        const stepElement = document.getElementById(step.id);
        stepElement.addEventListener('click', () => {
            // Skip to this step if clicked
            if (index > currentStepIndex) {
                // Animate all previous steps quickly
                for (let i = 0; i <= index; i++) {
                    const prevStep = steps[i];
                    const prevStepElement = document.getElementById(prevStep.id);
                    const exampleIds = {
                        'step1': 'specExample',
                        'step2': 'testsExample', 
                        'step3': 'loggingExample',
                        'step4': 'guardrailsExample',
                        'step5': 'docsExample'
                    };
                    const prevExampleElement = document.getElementById(exampleIds[prevStep.id]);
                    const prevStatusElement = document.getElementById(prevStep.id + 'Status');
                    
                    prevStepElement.classList.add('animate-in');
                    if (prevExampleElement) {
                        prevExampleElement.classList.add('show');
                    }
                    prevStepElement.classList.add('completed');
                    if (prevStatusElement) {
                        prevStatusElement.textContent = 'Upgraded';
                        prevStatusElement.classList.add('upgraded');
                    }
                }
                currentStepIndex = index;
            }
        });
    });
});
