document.addEventListener('DOMContentLoaded', function () {
    const viewDivAbout = document.querySelector('#About #Container #Text-Container #text #about');
    const slideInDivAboutText = document.querySelector('#About #Container #Text-Container #text #about #text');
    const slideInDivAboutImg = document.querySelector('#About #Container #Text-Container #text #about #img');

    const viewDivJourney = document.querySelector('#About #Container #Text-Container #text #journey');
    const slideInDivJourneyText = document.querySelector('#About #Container #Text-Container #text #journey #text');
    const slideInDivJourneyImg = document.querySelector('#About #Container #Text-Container #text #journey #img');

    const viewDivWhy = document.querySelector('#About #Container #Text-Container #text #why');
    const slideInDivWhyText = document.querySelector('#About #Container #Text-Container #text #why #text');
    const slideInDivWhyImg = document.querySelector('#About #Container #Text-Container #text #why #img');

    let hasAnimatedAbout = false; // Flag to track if animation has occurred
    let hasAnimatedJourney = false; // Flag to track if animation has occurred
    let hasAnimatedWhy = false; // Flag to track if animation has occurred

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        if (isInViewport(viewDivAbout) && !hasAnimatedAbout) {
            slideInDivAboutText.style.left = '0%';
            slideInDivAboutImg.style.right = '0%';
            hasAnimatedAbout = true; // Set the flag to true once animation occurs
        }else if (isInViewport(viewDivWhy) && !hasAnimatedWhy) {
            slideInDivWhyText.style.left = '0%';
            slideInDivWhyImg.style.right = '0%';
            hasAnimatedWhy = true; // Set the flag to true once animation occurs
        }else if (isInViewport(viewDivJourney) && !hasAnimatedJourney) {
            slideInDivJourneyText.style.right = '0%';
            slideInDivJourneyImg.style.left = '0%';
            hasAnimatedJourney = true; // Set the flag to true once animation occurs
        }
    }

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Trigger the animation on page load (if the element is initially in view)
    handleScroll();
});
