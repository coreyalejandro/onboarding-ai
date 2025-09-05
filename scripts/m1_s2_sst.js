// Animation sequence
        setTimeout(() => {
            // Highlight first item - Official curriculum
            document.getElementById('item1').classList.add('active');
        }, 1500);

        setTimeout(() => {
            // Highlight second item - Weekly Learning Journal
            document.getElementById('item2').classList.add('active');
        }, 3000);

        setTimeout(() => {
            // Highlight third item - Agent Glossary
            document.getElementById('item3').classList.add('active');
        }, 4500);

        setTimeout(() => {
            // Highlight fourth item - Parking Lot
            document.getElementById('item4').classList.add('active');
        }, 6000);

        // Keep all items highlighted after sequence
        setTimeout(() => {
            const items = document.querySelectorAll('.checklist-item');
            items.forEach(item => {
                if (!item.classList.contains('active')) {
                    item.classList.add('active');
                }
            });
        }, 7500);
