let currentStep = 1;

        function showStep(stepNumber) {
            // Hide all steps
            document.querySelectorAll('.step').forEach(step => {
                step.classList.remove('active');
            });
            
            // Show current step
            document.getElementById(`step${stepNumber}`).classList.add('active');
            
            // Update progress dots
            document.querySelectorAll('.progress-dot').forEach((dot, index) => {
                if (index < stepNumber) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        // Step 1: Tool selection animation
        setTimeout(() => {
            document.getElementById('notion').classList.add('selected');
        }, 2000);

        // Step 2: Move to SST setup
        setTimeout(() => {
            currentStep = 2;
            showStep(currentStep);
        }, 4000);

        // Step 3: Move to structure building
        setTimeout(() => {
            currentStep = 3;
            showStep(currentStep);
            
            // Animate structure items
            setTimeout(() => document.getElementById('structure1').classList.add('building'), 500);
            setTimeout(() => document.getElementById('structure2').classList.add('building'), 1000);
            setTimeout(() => document.getElementById('structure3').classList.add('building'), 1500);
            setTimeout(() => document.getElementById('structure4').classList.add('building'), 2000);
        }, 7000);
