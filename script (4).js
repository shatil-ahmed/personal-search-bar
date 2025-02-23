// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor behavior

            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 50, // Adjust for better visibility
                behavior: 'smooth'
            });
        });
    });

    // Handle form submission for the search bar
    const searchForm = document.querySelector('form');
    searchForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission

        const query = document.getElementById('search-bar').value;

        if (query) {
            alert("You are about to search for: " + query);
        } else {
            alert("Please enter a search term.");
        }
    });

    // Dynamic greeting based on the time of day
    const greetingElement = document.createElement('p');
    document.querySelector('header').appendChild(greetingElement);

    function displayGreeting() {
        const hours = new Date().getHours();
        let greetingMessage;

        if (hours >= 5 && hours < 12) {
            greetingMessage = "Good Morning!";
        } else if (hours >= 12 && hours < 18) {
            greetingMessage = "Good Afternoon!";
        } else {
            greetingMessage = "Good Evening!";
        }

        greetingElement.textContent = greetingMessage;
    }

    displayGreeting();
});
