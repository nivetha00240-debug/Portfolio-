
// Mobile Menu

const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", function() {

    navLinks.classList.toggle("active");

    const icon = menuIcon.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.replace("fa-bars", "fa-times");
    } else {
        icon.classList.replace("fa-times", "fa-bars");
    }

});

// Close menu after clicking a link

const links = document.querySelectorAll(".nav-links a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

        const icon = menuIcon.querySelector("i");

        icon.classList.replace("fa-times", "fa-bars");

    });

});

// Automatic Current Year

document.getElementById("year").textContent =
    new Date().getFullYear();

