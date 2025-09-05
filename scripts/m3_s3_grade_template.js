function highlightConfigLines(startLine, endLine) {
            const lines = document.querySelectorAll('#configContent span');
            for (let i = startLine; i <= endLine && i < lines.length; i++) {
                if (lines[i]) {
                    lines[i].classList.add('highlight');
                }
            }
        }

        function updateChecklistItem(itemId, statusId, status, delay = 0) {
            setTimeout(() => {
                const item = document.getElementById(itemId);
                const statusEl = document.getElementById(statusId);
                
                // Remove old classes
                item.classList.remove('red', 'yellow', 'green');
                statusEl.classList.remove('status-red', 'status-yellow', 'status-green');
                
                // Add new classes
                item.classList.add(status);
                statusEl.classList.add(`status-${status}`);
                
                if (status === 'green') {
                    statusEl.textContent = '✓';
                } else if (status === 'yellow') {
                    statusEl.textContent = '~';
                } else {
                    statusEl.textContent = '✕';
                }
            }, delay);
        }

        // Animation sequence
        setTimeout(() => {
            // Evaluate Spec
            updateChecklistItem('specItem', 'specStatus', 'green', 0);
        }, 3000);

        setTimeout(() => {
            // Evaluate Tests
            updateChecklistItem('testsItem', 'testsStatus', 'green', 0);
        }, 4500);

        setTimeout(() => {
            // Evaluate Observability
            updateChecklistItem('observabilityItem', 'observabilityStatus', 'green', 0);
        }, 6000);

        setTimeout(() => {
            // Evaluate Guardrails
            updateChecklistItem('guardrailsItem', 'guardrailsStatus', 'green', 0);
        }, 7500);

        setTimeout(() => {
            // Show summary
            document.getElementById('summaryPanel').classList.add('show');
        }, 9000);
