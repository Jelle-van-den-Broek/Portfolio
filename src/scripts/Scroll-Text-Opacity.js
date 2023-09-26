document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the "Name" div
    var nameDiv = document.querySelector('#Header #Container #Name');
    var testDiv = document.querySelector('#Nav-Bar #Container #Name-Buttons #Name');

    // Define the scroll threshold at which opacity reaches its lowest value
    var scrollThreshold = 100; // Adjust this value as needed

    // Define the lowest opacity value
    var lowestNameOpacity = 0; // Adjust this value as needed
    var lowestTestOpacity = 0;   // Start with the lowest opacity

    // Add a scroll event listener to the window
    window.addEventListener("scroll", function () {
        // Calculate the current scroll position
        var scrollPosition = window.scrollY;

        // Calculate the opacity for the "Name" div based on the scroll position and threshold
        var nameOpacity = 1 - Math.min(scrollPosition / scrollThreshold, 1);
        nameOpacity = Math.max(nameOpacity, lowestNameOpacity);

        // Calculate the opacity for the "test" div based on the scroll position
        var testOpacity = scrollPosition / scrollThreshold;
        testOpacity = Math.min(testOpacity, 1); // Ensure opacity doesn't exceed 1

        // Apply the calculated opacities to the "Name" and "test" divs
        nameDiv.style.opacity = nameOpacity;
        testDiv.style.opacity = testOpacity;
    });
});
