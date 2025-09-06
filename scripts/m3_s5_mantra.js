        document.addEventListener('DOMContentLoaded', function() {
            const words = [
                { id: 'spec', delay: 1000 },
                { id: 'test', delay: 2000 },
                { id: 'trace', delay: 3000 },
                { id: 'guardrail', delay: 4000 }
            ];
            
            // Animate each word sequentially
            words.forEach((word, index) => {
                setTimeout(() => {
                    const element = document.getElementById(word.id);
                    if (element) {
                        element.classList.add('show');
                    }
                }, word.delay);
            });
            
            // Show the foundation message after all words are displayed
            setTimeout(() => {
                const foundationMessage = document.getElementById('foundationMessage');
                if (foundationMessage) {
                    foundationMessage.classList.add('show');
                }
            }, 5500); // After all words + 1.5 seconds
            
            // Add click interaction to replay animation
            document.addEventListener('click', function() {
                // Reset all elements
                const allWords = document.querySelectorAll('.mantra-word');
                const foundationMessage = document.getElementById('foundationMessage');
                
                allWords.forEach(word => {
                    word.classList.remove('show');
                });
                
                if (foundationMessage) {
                    foundationMessage.classList.remove('show');
                }
                
                // Restart animation after a brief delay
                setTimeout(() => {
                    words.forEach((word, index) => {
                        setTimeout(() => {
                            const element = document.getElementById(word.id);
                            if (element) {
                                element.classList.add('show');
                            }
                        }, word.delay);
                    });
                    
                    setTimeout(() => {
                        if (foundationMessage) {
                            foundationMessage.classList.add('show');
                        }
                    }, 5500);
                }, 200);
            });
        });
