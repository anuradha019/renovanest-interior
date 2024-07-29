document.addEventListener("DOMContentLoaded", function () {
    const currentYearElement = document.getElementById("currentYear");
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;

    // Add smooth scrolling to header on scroll
    const header = document.querySelector(".header");
    let lastScrollY = window.scrollY;
    document.addEventListener("scroll", function () {
        if (window.scrollY > lastScrollY && window.scrollY > 200) {
            // Scrolling down
            header.classList.add("scrolled");
        } else {
            // Scrolling up
            header.classList.remove("scrolled");
        }
        lastScrollY = window.scrollY;
    });
});
