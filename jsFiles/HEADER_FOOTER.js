import { loadComponent } from "./include.js";

loadComponent("#header", "HEADER_FOOTER/HEADER.html", () => {
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        mobileMenu.classList.toggle("open");
    });
});

loadComponent("#footer", "HEADER_FOOTER/FOOTER.html");

const section = document.querySelector('.definitionOfAlcohol');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            section.classList.add('show');
        }
    });
});

observer.observe(section);
