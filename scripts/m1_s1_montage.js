let count = 47;
        const counterElement = document.getElementById('count');

        // Counter animation
        const counterInterval = setInterval(() => {
            count += Math.floor(Math.random() * 3) + 1;
            counterElement.textContent = count;
        }, 200);

        // Main sequence
        setTimeout(() => {
            // Stop counter
            clearInterval(counterInterval);
            
            // Freeze everything and desaturate
            const container = document.getElementById('chaosContainer');
            const sources = document.querySelectorAll('.source-item');
            
            container.classList.add('frozen');
            sources.forEach(source => source.classList.add('frozen'));
            
            // Show message overlay
            setTimeout(() => {
                const overlay = document.getElementById('messageOverlay');
                overlay.classList.add('show');
                
                // Add zoom when secondary message appears
                setTimeout(() => {
                    overlay.classList.add('zoom');
                    
                    // Fade out before next slide
                    setTimeout(() => {
                        overlay.classList.add('fade-out');
                    }, 2500);
                    
                }, 1500);
                
            }, 800);
            
        }, 3500);
