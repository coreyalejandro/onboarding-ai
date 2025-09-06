// Module 6 - Slide 4: When to Use Which
// Enhanced animation sequence for columns and criteria

document.addEventListener('DOMContentLoaded', function() {
    const mlColumn = document.querySelector('.ml-column');
    const nlColumn = document.querySelector('.nl-column');
    const decisionBanner = document.getElementById('decisionBanner');

    function animateColumns() {
        // Animate ML column first
        setTimeout(() => {
            if (mlColumn) {
                mlColumn.classList.add('show');
            }
        }, 2000);

        // Animate NL column second
        setTimeout(() => {
            if (nlColumn) {
                nlColumn.classList.add('show');
            }
        }, 2500);
    }

    function animateCriteria() {
        const criteriaItems = document.querySelectorAll('.criteria-list li');
        criteriaItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('active');
            }, 3000 + (index * 200));
        });
    }

    function animateBanner() {
        setTimeout(() => {
            if (decisionBanner) {
                decisionBanner.classList.add('show');
            }
        }, 5000);
    }

    function startAnimation() {
        animateColumns();
        animateCriteria();
        animateBanner();
    }

    // Start the animation sequence
    startAnimation();
});