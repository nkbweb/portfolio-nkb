const texts = [
    "Electronics Engineer",
    "Embedded Systems Developer",
    "Robotics Enthusiast",
    "IoT Developer",
    "VLSI Designer",
    "Telecommunication Specialist",
    "Hardware/Software Developer",
    "Signal Processing Engineer",
    "Control Systems Engineer"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function type() {
    if (isDeleting) {
        currentText = texts[index].substring(0, charIndex - 1);
        charIndex--;
    } else {
        currentText = texts[index].substring(0, charIndex + 1);
        charIndex++;
    }

    document.querySelector(".title").textContent = currentText;

    // Adjust typing speed
    let typingSpeed = isDeleting ? 50 : 150;

    if (!isDeleting && charIndex === texts[index].length) {
        // Pause before deleting
        typingSpeed = 500;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length; // Move to the next text
        typingSpeed = 10; // Instant start of the next word
    }

    setTimeout(type, typingSpeed);
}

// Start the typing effect
type();



const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// script.js

// Get the toggle button and body element
const toggleButton = document.getElementById('toggleButton');
const body = document.body;
const icon = document.getElementById('icon');

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode'); // Toggle the dark-mode class on body

    // Change icon based on the current mode
    if (body.classList.contains('dark-mode')) {
        icon.innerHTML = '<i class="far fa-lightbulb"></i>'; // Moon icon for dark mode
    } else {
        icon.innerHTML = '<i class="far fa-moon"></i>'; // Sun icon for light mode
    }
});



document.addEventListener("DOMContentLoaded", function () {
    const lazyElements = document.querySelectorAll("[data-lazy]");
    
    // Create an intersection observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio >= 0.15) {
                // Element is at least 20% in view, fade it in
                entry.target.classList.add("lazy-loaded");
            } else if (entry.intersectionRatio === 0) {
                // Element is completely out of view, fade it out
                entry.target.classList.remove("lazy-loaded");
            }
        });
    }, {
        threshold: [0.0, 0.15]  // Trigger at 0% (completely out of view) and 20% in view
    });

    // Observe each lazy element
    lazyElements.forEach(element => {
        observer.observe(element);
    });
});





document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("[data-nav-link]");
    const contentSections = document.querySelectorAll(".content-section");

    // Function to show the specified section and hide others
    function showSection(sectionId) {
        // Hide all sections
        contentSections.forEach(section => {
            section.classList.remove("active"); // Remove active class
            section.style.display = "none"; // Hide the section immediately
        });

        // Show the selected section after a slight delay to allow the fade-out effect
        const targetSection = document.getElementById(sectionId);
        targetSection.style.display = "block"; // Show the section
        requestAnimationFrame(() => {
            targetSection.classList.add("active"); // Add active class to fade in
        });

        // Scroll to the top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Remove active class from all links and add to the current link
        navLinks.forEach(item => item.classList.remove("active"));
        navLinks.forEach(item => {
            if (item.getAttribute("data-nav-link") === sectionId) {
                item.classList.add("active");
            }
        });
    }

    // Event listener for each navbar link
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            const targetSection = this.getAttribute("data-nav-link");
            showSection(targetSection); // Call the function to show the section
        });
    });

    // Show the "About" section by default
    showSection('about');
});




document.addEventListener("DOMContentLoaded", function () {
    const cover = document.querySelector(".cover");
    const scrollIndicator = document.createElement("div");
    scrollIndicator.className = "scroll-indicator-inner"; // Create the inner indicator
    scrollIndicator.style.width = "20px"; // Set a fixed width for the indicator
    document.querySelector(".scroll-indicator").appendChild(scrollIndicator); // Append it to the scroll-indicator

    cover.addEventListener("scroll", function () {
        const scrollLeft = cover.scrollLeft; // Current scroll position
        const scrollWidth = cover.scrollWidth; // Total scrollable width
        const clientWidth = cover.clientWidth; // Visible width of the cover

        // Calculate 75% of the total scrollable width
        const maxScroll = scrollWidth - clientWidth; 

        // Calculate the position of the scroll indicator, constrained within the slider
        const indicatorPosition = (scrollLeft / maxScroll) * (document.querySelector(".scroll-indicator").clientWidth - 20); // Adjust for fixed width of 20px

        // Update the position of the scroll indicator, ensuring it stays within bounds
        scrollIndicator.style.transform = `translateX(${Math.max(0, Math.min(indicatorPosition, document.querySelector(".scroll-indicator").clientWidth - 20))}px)`;
    });
});
