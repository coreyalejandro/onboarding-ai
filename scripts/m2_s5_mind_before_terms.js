// Animation sequence
        setTimeout(() => {
            // Show Path A
            document.getElementById('pathA').classList.add('show');
            document.getElementById('confusionMess').classList.add('show');
        }, 4000);

        setTimeout(() => {
            // Show Path B
            document.getElementById('pathB').classList.add('show');
            document.getElementById('clarityLine').classList.add('show');
        }, 6000);

        setTimeout(() => {
            // Emphasize Path B
            document.getElementById('emphasisGlow').classList.add('show');
        }, 8000);

        setTimeout(() => {
            // Fade out Path A (confusing path)
            document.getElementById('pathA').classList.add('fade-out');
            document.getElementById('confusionMess').classList.add('fade-out');
        }, 10000);

        setTimeout(() => {
            // Show mantra
            document.getElementById('mantraContainer').classList.add('show');
        }, 12000);
