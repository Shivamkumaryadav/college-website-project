const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-link");
const close_nav = document.querySelector(".close-nav");

hamburger.addEventListener("click", () => {
    navMenu.style.display = "flex";
});

close_nav.addEventListener("click", () => {
    navMenu.style.display = "none";
});






