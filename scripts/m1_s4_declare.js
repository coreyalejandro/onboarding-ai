async function typeText(element, text, speed = 80) {
            return new Promise((resolve) => {
                element.classList.add('typing');
                let i = 0;
                
                function type() {
                    if (i < text.length) {
                        element.textContent += text.charAt(i);
                        i++;
                        setTimeout(type, speed);
                    } else {
                        setTimeout(() => {
                            resolve();
                        }, 500);
                    }
                }
                type();
            });
        }

        async function animateForm() {
            // Wait for note to slide in
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Type in title field
            const titleField = document.getElementById('titleField');
            await typeText(titleField, 'Anthropic Agent Design Docs', 60);

            // Wait a bit
            await new Promise(resolve => setTimeout(resolve, 800));

            // Type in link field
            const linkField = document.getElementById('linkField');
            await typeText(linkField, 'https://docs.anthropic.com/claude/docs/creating-an-agent', 40);

            // Wait a bit
            await new Promise(resolve => setTimeout(resolve, 800));

            // Type in pledge field
            const pledgeField = document.getElementById('pledgeField');
            await typeText(pledgeField, 'I will not consult other sources during this module unless explicitly assigned.', 50);

            // Show lock icon
            setTimeout(() => {
                document.getElementById('lockIcon').classList.add('show');
            }, 500);

            // Show pin animation
            setTimeout(() => {
                document.getElementById('pinAnimation').classList.add('show');
            }, 1000);

            // Show lower banner
            setTimeout(() => {
                document.getElementById('lowerBanner').classList.add('show');
            }, 2000);
        }

        // Start animation
        animateForm();
