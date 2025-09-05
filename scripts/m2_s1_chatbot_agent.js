// Animation sequence
        setTimeout(() => {
            // Activate agent steps one by one
            document.getElementById('step1').classList.add('active');
        }, 2000);

        setTimeout(() => {
            document.getElementById('step2').classList.add('active');
            // Highlight planner
            document.getElementById('step2').classList.add('highlighted');
        }, 2800);

        setTimeout(() => {
            document.getElementById('step2').classList.remove('highlighted');
            document.getElementById('step3').classList.add('active');
            // Highlight tools
            document.getElementById('step3').classList.add('highlighted');
        }, 4000);

        setTimeout(() => {
            document.getElementById('step3').classList.remove('highlighted');
            document.getElementById('step4').classList.add('active');
            // Highlight memory
            document.getElementById('step4').classList.add('highlighted');
        }, 5200);

        setTimeout(() => {
            document.getElementById('step4').classList.remove('highlighted');
            document.getElementById('step5').classList.add('active');
        }, 6400);

        // Show red X overlay on chatbot side
        setTimeout(() => {
            document.getElementById('redXOverlay').classList.add('show');
        }, 8000);
