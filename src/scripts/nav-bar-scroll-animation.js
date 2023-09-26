// Get a reference to the navbar element
const navbar = document.getElementById('Nav-Bar');

// Function to handle scroll event
function handleScroll() {
    // Get the current scroll position
    const scrollPosition = window.scrollY;

    // Check if the navbar touches the top
    if (scrollPosition === 0) {
        document.querySelector("#Nav-Bar #Container").style.borderRadius = "25px";
    } else {
        document.querySelector("#Nav-Bar #Container").style.borderTopLeftRadius = "0px";
        document.querySelector("#Nav-Bar #Container").style.borderTopRightRadius = "0px";
    }
}

// Add an event listener to the window's scroll event
window.addEventListener('scroll', handleScroll);
