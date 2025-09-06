// Module 6 - Slide 1: Machine-Learning-Friendly Prompts — Power and Purpose
// Enhanced animation sequence for benefits and contrast cards

document.addEventListener('DOMContentLoaded', function() {
    const benefits = [
        { id: 'benefit1', delay: 2000 },
        { id: 'benefit2', delay: 2500 },
        { id: 'benefit3', delay: 3000 },
        { id: 'benefit4', delay: 3500 }
    ];

    const cards = [
        { selector: '.nl-card', delay: 4000 },
        { selector: '.ml-card', delay: 4500 }
    ];

    function animateBenefit(benefitId) {
        const element = document.getElementById(benefitId);
        if (element) {
            element.classList.add('active');
        }
    }

    function animateCard(selector) {
        const element = document.querySelector(selector);
        if (element) {
            element.classList.add('show');
        }
    }

    function startAnimation() {
        // Animate benefits sequentially
        benefits.forEach((benefit) => {
            setTimeout(() => {
                animateBenefit(benefit.id);
            }, benefit.delay);
        });

        // Animate cards
        cards.forEach((card) => {
            setTimeout(() => {
                animateCard(card.selector);
            }, card.delay);
        });
    }

    // Start the animation sequence
    startAnimation();
});
