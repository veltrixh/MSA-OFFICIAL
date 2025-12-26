/* ======================
   THEME TOGGLE
====================== */
/* ======================
   THEME TOGGLE (TAILWIND + OLD NAVBAR)
====================== */
const themeBtn = document.getElementById("themeBtn");
const html = document.documentElement;
const body = document.body;

function applyTheme(theme) {
    // Tailwind dark mode
    html.classList.toggle("dark", theme === "dark");

    // Old navbar.css support
    body.dataset.theme = theme;

    // Button UI
    if (themeBtn) {
        themeBtn.textContent = theme === "dark" ? "☀️" : "🌙";
        themeBtn.setAttribute("aria-pressed", String(theme === "dark"));
        themeBtn.title =
            theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
    }

    localStorage.setItem("theme", theme);
}

// Init theme on load
const savedTheme =
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

applyTheme(savedTheme);

// Toggle on click
if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        const newTheme = html.classList.contains("dark") ? "light" : "dark";
        applyTheme(newTheme);
    });
}

/* ======================
   NAVBAR ACTIVE LINK
====================== */
// Ensure Contact link stays active on this page
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-menu a");
    navLinks.forEach((link) => {
        link.classList.remove("active");
        // Set active on Contact link for this page
        if (link.getAttribute("href") === "./contact.html") {
            link.classList.add("active");
        }
    });
});

/* ======================
   FORM HANDLING
====================== */
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all required fields");
            return;
        }

        console.log("Form submitted:", { name, email, message });
        alert("Thank you for your message! We'll get back to you soon.");
        contactForm.reset();
    });
}

/* ======================
   YEAR UPDATE
====================== */
/* ======================
   YEAR UPDATE (SAFE)
====================== */
const yearEl = document.getElementById("year");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

