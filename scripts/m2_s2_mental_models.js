// Animation sequence
        const sequence = [
            // Teacher-Student metaphor
            { delay: 2000, action: () => {
                document.getElementById('teacher').classList.add('active');
                document.getElementById('teacherLabel').classList.add('show');
            }},
            { delay: 3500, action: () => {
                document.getElementById('student').classList.add('active');
                document.getElementById('studentLabel').classList.add('show');
            }},
            { delay: 4500, action: () => {
                document.getElementById('assignmentsLabel').classList.add('show');
            }},
            { delay: 5500, action: () => {
                document.getElementById('gradesLabel').classList.add('show');
            }},

            // Agent anatomy - Brain/Planner
            { delay: 7000, action: () => {
                document.getElementById('agentHead').classList.add('active');
                document.getElementById('brainLabel').classList.add('show');
                setTimeout(() => document.getElementById('brainLabel').classList.add('highlight'), 200);
            }},
            
            // Eyes/Inputs
            { delay: 8200, action: () => {
                document.getElementById('brainLabel').classList.remove('highlight');
                document.getElementById('eyesLabel').classList.add('show');
                setTimeout(() => document.getElementById('eyesLabel').classList.add('highlight'), 200);
            }},
            
            // Mouth/Output
            { delay: 9400, action: () => {
                document.getElementById('eyesLabel').classList.remove('highlight');
                document.getElementById('mouthLabel').classList.add('show');
                setTimeout(() => document.getElementById('mouthLabel').classList.add('highlight'), 200);
            }},
            
            // Hands/Tools
            { delay: 10600, action: () => {
                document.getElementById('mouthLabel').classList.remove('highlight');
                document.getElementById('agentArms').classList.add('active');
                document.getElementById('handsLabel').classList.add('show');
                setTimeout(() => document.getElementById('handsLabel').classList.add('highlight'), 200);
            }},
            
            // Memory/Heart
            { delay: 11800, action: () => {
                document.getElementById('handsLabel').classList.remove('highlight');
                document.getElementById('memoryLabel').classList.add('show');
                setTimeout(() => document.getElementById('memoryLabel').classList.add('highlight'), 200);
            }},
            
            // Skin/Guardrails
            { delay: 13000, action: () => {
                document.getElementById('memoryLabel').classList.remove('highlight');
                document.getElementById('agentLegs').classList.add('active');
                document.getElementById('skinLabel').classList.add('show');
                setTimeout(() => document.getElementById('skinLabel').classList.add('highlight'), 200);
            }},

            // Final fade
            { delay: 15000, action: () => {
                document.getElementById('skinLabel').classList.remove('highlight');
                document.getElementById('leftLens').classList.add('faded');
                document.getElementById('rightLens').classList.add('faded');
            }}
        ];

        sequence.forEach(item => {
            setTimeout(item.action, item.delay);
        });
