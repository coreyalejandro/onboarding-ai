// Animation sequence
        setTimeout(() => {
            // Show red X overlay on gambling scene
            document.getElementById('redXOverlay').classList.add('show');
        }, 4000);

        setTimeout(() => {
            // Transition to checklist
            document.getElementById('checklistContainer').classList.add('show');
        }, 6000);

        // Checklist animations
        const items = [
            { delay: 7000, id: 'item1', checkbox: 'checkbox1' },
            { delay: 8000, id: 'item2', checkbox: 'checkbox2' },
            { delay: 9000, id: 'item3', checkbox: 'checkbox3' },
            { delay: 10000, id: 'item4', checkbox: 'checkbox4' }
        ];

        items.forEach(item => {
            setTimeout(() => {
                document.getElementById(item.id).classList.add('active');
                
                setTimeout(() => {
                    document.getElementById(item.checkbox).classList.add('checked');
                }, 300);
            }, item.delay);
        });
