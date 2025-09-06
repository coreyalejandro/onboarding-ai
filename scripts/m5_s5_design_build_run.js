        document.addEventListener('DOMContentLoaded', function() {
            // Show words sequentially
            const words = [
                { id: 'design', delay: 1000 },
                { id: 'build', delay: 2000 },
                { id: 'run', delay: 3000 }
            ];
            
            words.forEach((word, index) => {
                setTimeout(() => {
                    const element = document.getElementById(word.id);
                    if (element) {
                        element.classList.add('show');
                    }
                }, word.delay);
            });
            
            // Show cycle arrow
            setTimeout(() => {
                const cycleArrow = document.getElementById('cycleArrow');
                if (cycleArrow) {
                    cycleArrow.classList.add('show');
                }
            }, 4500);
            
            // Show final message
            setTimeout(() => {
                const finalMessage = document.getElementById('finalMessage');
                if (finalMessage) {
                    finalMessage.classList.add('show');
                }
            }, 5500);
            
            // Add click interaction to replay animation
            document.addEventListener('click', function() {
                // Reset all elements
                const allElements = document.querySelectorAll('.show');
                allElements.forEach(element => {
                    element.classList.remove('show');
                });
                
                // Restart animation after a brief delay
                setTimeout(() => {
                    // Show words sequentially
                    words.forEach((word, index) => {
                        setTimeout(() => {
                            const element = document.getElementById(word.id);
                            if (element) {
                                element.classList.add('show');
                            }
                        }, 100 + (index * 1000));
                    });
                    
                    // Show cycle arrow
                    setTimeout(() => {
                        const cycleArrow = document.getElementById('cycleArrow');
                        if (cycleArrow) {
                            cycleArrow.classList.add('show');
                        }
                    }, 3600);
                    
                    // Show final message
                    setTimeout(() => {
                        const finalMessage = document.getElementById('finalMessage');
                        if (finalMessage) {
                            finalMessage.classList.add('show');
                        }
                    }, 4600);
                }, 200);
            });
        });
