const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navLinks");

// Toggle mobile menu
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Close menu when a link is clicked
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});
document.addEventListener("click", (e) => {
    if (
        !navMenu.contains(e.target) &&
        !menuToggle.contains(e.target)
    ) {
        navMenu.classList.remove("active");
    }
});

//Scroll dynamism feature

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const revealPoint = 120;

    reveals.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - revealPoint) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
