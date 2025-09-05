// Animation sequence
        const steps = [
            { id: 'step1', delay: 2500, upgradeDelay: 4000 },
            { id: 'step2', delay: 4500, upgradeDelay: 6000 },
            { id: 'step3', delay: 6500, upgradeDelay: 8000 },
            { id: 'step4', delay: 8500, upgradeDelay: 10000 },
            { id: 'step5', delay: 10500, upgradeDelay: 12000 }
        ];

        steps.forEach(step => {
            // Activate step
            setTimeout(() => {
                document.getElementById(step.id).classList.add('active');
            }, step.delay);

            // Mark as upgraded
            setTimeout(() => {
                document.getElementById(step.id).classList.add('upgraded');
            }, step.upgradeDelay);
        });
