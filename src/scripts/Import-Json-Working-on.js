// Wrap your JavaScript code in an event listener for the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function () {
    // Get a reference to the container
    var cardsContainer = document.querySelector("#WorkingOn #Container #cardsContainer");

    // Function to load JSON data
    function loadJSON() {
        fetch('../src/json/Working-On.json')
            .then(response => response.json())
            .then(jsonData => {
                // Loop through the JSON data and create HTML elements for each item
                jsonData.forEach(function (item) {
                    // Create a new card element
                    var card = document.createElement("div");
                    card.id = "Card"; // You may want to add a CSS class for styling
                    card.setAttribute("data-tilt", ""); // Add the data-tilt attribute
                    card.setAttribute("data-tilt-max", "25"); // Add the data-tilt attribute
                    card.setAttribute("data-tilt-glare", "0.1"); // Add the data-tilt-glare attribute
                    card.setAttribute("data-tilt-speed", "4000"); // Add the data-tilt-glare attribute

                    // Create an image element for the "thumb" part
                    var thumb = document.createElement("img");
                    thumb.id = "thumb"; // Apply the CSS class for the thumb
                    thumb.srcset = item.thumb; // Set the image source

                    var title = document.createElement("div");
                    title.id = "title";
                    title.textContent = item.title;

                    var description = document.createElement("div");
                    description.id = "description";
                    description.textContent = item.description;

                    var year = document.createElement("div");
                    year.id = "year";
                    year.textContent = item.year;

                    var github = document.createElement("div");
                    github.id = "github";

                    if (item.github === "none") {
                        // If 'github' is "none", create a plain text element
                        var githubText = document.createElement("span");
                        githubText.textContent = "None";
                        github.appendChild(githubText);
                    } else {
                        // Otherwise, create an anchor element with target="_blank" for the GitHub link
                        var githubLink = document.createElement("a");
                        githubLink.href = item.github;
                        githubLink.textContent = "GitHub";
                        githubLink.target = "_blank";
                        github.appendChild(githubLink);
                    }

                    // Append the elements to the card
                    card.appendChild(thumb);
                    card.appendChild(title);
                    card.appendChild(description);
                    card.appendChild(year);
                    card.appendChild(github);

                    // Append the card to the container
                    cardsContainer.appendChild(card);
                });
                VanillaTilt.init(document.querySelectorAll("#WorkingOn #Container #cardsContainer #Card"), {
                    // Your Tilt Settings
                });
            })
            .catch(error => console.error('Error loading JSON:', error));
    }

    // Call the loadJSON function to load and populate the data
    loadJSON();
});