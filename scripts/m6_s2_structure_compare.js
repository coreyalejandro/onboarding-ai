// Module 6 - Slide 2: Structure — Natural vs Anthropic Framework
// Enhanced animation sequence for framework items and examples

document.addEventListener('DOMContentLoaded', function() {
    const structureItems = Array.from(document.querySelectorAll('.structure-list li'));
    const frameworkItems = Array.from(document.querySelectorAll('.fw-item'));
    const exampleBoxes = Array.from(document.querySelectorAll('.example-box'));

    function animateStructureItems() {
        structureItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('active');
            }, 2000 + (index * 300));
        });
    }

    function animateFrameworkItems() {
        frameworkItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('active');
            }, 3500 + (index * 200));
        });
    }

    function animateExampleBoxes() {
        exampleBoxes.forEach((box, index) => {
            setTimeout(() => {
                box.classList.add('show');
            }, 6000 + (index * 500));
        });
    }

    function startAnimation() {
        animateStructureItems();
        animateFrameworkItems();
        animateExampleBoxes();
    }

    // Start the animation sequence
    startAnimation();
});
