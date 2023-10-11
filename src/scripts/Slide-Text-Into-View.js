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

    let hasAnimatedAbout = false;
    let hasAnimatedJourney = false;
    let hasAnimatedWhy = false;

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
            hasAnimatedAbout = true;
        } else if (isInViewport(viewDivWhy) && !hasAnimatedWhy) {
            slideInDivWhyText.style.left = '0%';
            slideInDivWhyImg.style.right = '0%';
            hasAnimatedWhy = true;
        } else if (isInViewport(viewDivJourney) && !hasAnimatedJourney) {
            slideInDivJourneyText.style.right = '0%';
            slideInDivJourneyImg.style.left = '0%';
            hasAnimatedJourney = true;
        }
    }

    window.addEventListener('scroll', handleScroll);

    handleScroll();
});
