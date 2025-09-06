// Module 4 - Slide 2: Golden Tests, Fixtures, and Version Pinning
// Animation sequence for the three components

document.addEventListener('DOMContentLoaded', function() {
    const goldenTests = document.getElementById('goldenTests');
    const fixtures = document.getElementById('fixtures');
    const versionPinning = document.getElementById('versionPinning');
    const guaranteeBanner = document.getElementById('guaranteeBanner');

    function startAnimation() {
        // Animate sections sequentially
        setTimeout(() => {
            if (goldenTests) {
                goldenTests.classList.add('show');
            }
        }, 2000);

        setTimeout(() => {
            if (fixtures) {
                fixtures.classList.add('show');
            }
        }, 2500);

        setTimeout(() => {
            if (versionPinning) {
                versionPinning.classList.add('show');
            }
        }, 3000);

        // Show guarantee banner after all sections
        setTimeout(() => {
            if (guaranteeBanner) {
                guaranteeBanner.classList.add('show');
            }
        }, 4000);
    }

    // Start the animation sequence
    startAnimation();
});
