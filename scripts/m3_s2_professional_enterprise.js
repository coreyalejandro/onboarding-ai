// Animation sequence
        setTimeout(() => {
            // Show question marks
            const questionMarks = document.querySelectorAll('.question-marks');
            questionMarks.forEach(mark => mark.classList.add('show'));
        }, 3000);

        setTimeout(() => {
            // Dissolve production-ready
            document.getElementById('productionText').classList.add('dissolve');
            document.getElementById('buzzwordLabel').classList.add('fade');
        }, 4500);

        setTimeout(() => {
            // Show professional phase
            document.getElementById('professionalPhase').classList.add('show');
        }, 6000);

        // Show pillars one by one
        const pillars = [
            { id: 'reliabilityPillar', delay: 6800 },
            { id: 'observabilityPillar', delay: 7200 },
            { id: 'securityPillar', delay: 7600 },
            { id: 'performancePillar', delay: 8000 }
        ];

        pillars.forEach(pillar => {
            setTimeout(() => {
                document.getElementById(pillar.id).classList.add('show');
            }, pillar.delay);
        });
