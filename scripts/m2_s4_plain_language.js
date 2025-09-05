// Animation sequence
        setTimeout(() => {
            // Show highlight box
            document.getElementById('highlightBox').classList.add('active');
            
            // Show example text
            document.getElementById('exampleText').classList.add('show');
        }, 3500);

        // Show sentences one by one
        setTimeout(() => {
            document.getElementById('sentence1').classList.add('show');
        }, 4000);

        setTimeout(() => {
            document.getElementById('sentence2').classList.add('show');
        }, 5500);

        setTimeout(() => {
            document.getElementById('sentence3').classList.add('show');
        }, 7000);

        // Fade out example and show blank prompt
        setTimeout(() => {
            document.getElementById('exampleText').classList.add('fade-out');
            document.getElementById('highlightBox').classList.remove('active');
            
            setTimeout(() => {
                document.getElementById('exampleText').style.display = 'none';
                document.getElementById('blankPrompt').classList.add('show');
                document.getElementById('highlightBox').classList.add('active');
            }, 800);
        }, 9000);

        // Show timer and caption
        setTimeout(() => {
            document.getElementById('timerContainer').classList.add('show');
            document.getElementById('bottomCaption').classList.add('show');
            
            // Start timer
            setTimeout(() => {
                document.getElementById('timerProgress').classList.add('active');
            }, 500);
        }, 10000);
