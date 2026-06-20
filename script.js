const text = "Python Full Stack Developer";
let i = 0;

function type() {
    const el = document.getElementById("typing");

    if (!el) return; // FIX 1: safety check

    if (i < text.length) {
        el.textContent = text.substring(0, i + 1);
        i++;
        setTimeout(type, 120);
    }
}

document.addEventListener("DOMContentLoaded", function () {

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    function updateActiveMenu() {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop - 150) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateActiveMenu);

    // run once on load
    updateActiveMenu();

});

document.addEventListener("DOMContentLoaded", function () {

    const el = document.getElementById("typing");

    if (el) {
        el.textContent = "";
        i = 0;
        type();
    }

    // FIX 2: safe check for button
    const contactBtn = document.getElementById("contactBtn");

    if (contactBtn) {
        contactBtn.addEventListener("click", function () {
            window.location.href =
            "mailto:bhuvaneshwarinagarajan3@gmail.com?subject=Portfolio%20Contact&body=Hi";
        });
    }

});

// FIX 3: safer confirm function
function confirmOpen(platform){
    return window.confirm("Open " + platform + " profile?");
}