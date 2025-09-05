const mappings = [
            {
                delay: 3000,
                label: 'planningLabel',
                part: 'agentHead',
                line: 'lineBrain',
                description: 'Planning — that\'s the brain'
            },
            {
                delay: 4800,
                label: 'memoryLabel', 
                part: 'agentHeart',
                line: 'lineMemory',
                description: 'Memory — the heart'
            },
            {
                delay: 6600,
                label: 'inputsLabel',
                part: 'agentEyes', 
                line: 'lineInputs',
                description: 'Inputs — the eyes and ears'
            },
            {
                delay: 8400,
                label: 'toolsLabel',
                part: 'agentArms',
                line: 'lineTools', 
                description: 'Tools — the hands'
            },
            {
                delay: 10200,
                label: 'outputsLabel',
                part: 'agentMouth',
                line: 'lineOutputs',
                description: 'Outputs — the mouth'
            },
            {
                delay: 12000,
                label: 'guardrailsLabel',
                part: 'agentLegs',
                line: 'lineGuardrails',
                description: 'Guardrails — the skin'
            }
        ];

        // Show labels and animate parts
        mappings.forEach(mapping => {
            setTimeout(() => {
                // Show label and line
                document.getElementById(mapping.label).classList.add('show');
                document.getElementById(mapping.line).classList.add('show');
                
                // Activate label and part
                setTimeout(() => {
                    document.getElementById(mapping.label).classList.add('active');
                    document.getElementById(mapping.part).classList.add('active');
                }, 300);

                // Deactivate after highlighting
                setTimeout(() => {
                    document.getElementById(mapping.label).classList.remove('active');
                    document.getElementById(mapping.part).classList.remove('active');
                }, 1500);

            }, mapping.delay);
        });

        // Show holistic view
        setTimeout(() => {
            const allParts = document.querySelectorAll('.holistic-glow');
            allParts.forEach(part => {
                part.classList.add('active');
            });
        }, 14000);

        // Show bottom caption
        setTimeout(() => {
            document.getElementById('bottomCaption').classList.add('show');
        }, 15000);
