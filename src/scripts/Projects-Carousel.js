document.addEventListener('DOMContentLoaded', function () {
    var cardsContainer = document.getElementById("cardsContainer");
    var carouselContainer = document.getElementById("CarouselContainer");
    var cards = document.querySelectorAll("#cardsContainer #Card");

    function loadJSON() {
        fetch('/src/json/Projects.json')
            .then(response => response.json())
            .then(jsonData => {
                // Loop through the JSON data and create HTML elements for each item
                jsonData.forEach(function (item) {
                    // Create a new card element
                    var card = document.createElement("div");
                    card.id = "Card"; // You may want to add a CSS class for styling

                    // Create an image element for the "thumb" part
                    var thumb = document.createElement("div");
                    thumb.id = "thumb"; // Apply the CSS class for the thumb
                    thumb.style.backgroundImage = 'url("' + item.thumb + '")'; // Set the background image

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

                    // Create an anchor element with target="_blank" for the GitHub link
                    var githubLink = document.createElement("a");
                    githubLink.href = item.github;
                    githubLink.textContent = "GitHub";
                    githubLink.target = "_blank";

                    // Append the GitHub link to the GitHub div
                    github.appendChild(githubLink);

                    // Append the elements to the card
                    card.appendChild(thumb);
                    card.appendChild(title);
                    card.appendChild(description);
                    card.appendChild(year);
                    card.appendChild(github);

                    // Append the card to the container
                    cardsContainer.appendChild(card);
                });
            })
            .catch(error => console.error('Error loading JSON:', error));
    }

    function showCard(index) {
        cardsContainer.style.transform = `translateX(-${index * cardWidth}px)`;
    }

    function nextCard() {
        currentIndex = (currentIndex + 1) % cards.length;
        showCard(currentIndex);
    }

    function prevCard() {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        showCard(currentIndex);
    }

    // Call the loadJSON function to load and populate the data
    loadJSON();

    // Handle next and previous button clicks (you can add buttons for this)
    // Example:
    document.getElementById("nextButton").addEventListener("click", nextCard);
    document.getElementById("prevButton").addEventListener("click", prevCard);
});
