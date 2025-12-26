/* ======================
   THEME TOGGLE
====================== */
const themeBtn = document.getElementById("themeBtn");
const root = document.body;

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        const isDark = root.dataset.theme === "dark";
        root.dataset.theme = isDark ? "light" : "dark";
        themeBtn.textContent = isDark ? "Dark" : "Light";
        themeBtn.setAttribute("aria-pressed", String(!isDark));
        localStorage.setItem("theme", root.dataset.theme);
    });
}

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    root.dataset.theme = savedTheme;
    themeBtn.textContent = savedTheme === "dark" ? "Light" : "Dark";
    themeBtn.setAttribute("aria-pressed", savedTheme === "dark");
}

/* ======================
   MOBILE NAVIGATION
====================== */
const navToggle = document.getElementById("navToggle");
const menu = document.getElementById("menu");

navToggle?.addEventListener("click", () => {
    const open = menu.classList.toggle("show");
    navToggle.setAttribute("aria-expanded", String(open));
});

document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !navToggle.contains(e.target)) {
        menu.classList.remove("show");
        navToggle.setAttribute("aria-expanded", "false");
    }
});

/* ======================
   SMOOTH SCROLL + ACTIVE LINK
====================== */
const header = document.querySelector(".site-header");
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");

navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href");
        if (!targetId.startsWith("#")) return;

        e.preventDefault();
        const target = document.querySelector(targetId);
        if (!target) return;

        menu.classList.remove("show");
        navToggle.setAttribute("aria-expanded", "false");

        navLinks.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");

        window.scrollTo({
            top: target.offsetTop - header.offsetHeight,
            behavior: "smooth",
        });
    });
});

function updateActiveLink() {
    const scrollPos = window.scrollY + header.offsetHeight + 100;

    sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.id;

        if (scrollPos >= top && scrollPos < top + height) {
            navLinks.forEach((l) => {
                l.classList.toggle("active", l.getAttribute("href") === `#${id}`);
            });
        }
    });
}

window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);

/* ======================
   HERO COUNTERS
====================== */
document.querySelectorAll(".num").forEach((el) => {
    const target = Number(el.dataset.target) || 0;
    let current = 0;
    const step = Math.ceil(target / 60);

    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            el.textContent = target;
            clearInterval(timer);
        } else {
            el.textContent = current;
        }
    }, 16);
});

/* ======================
   REVEAL ANIMATIONS
====================== */
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px" }
);

document
    .querySelectorAll(".proj, .hero-copy, .hero-visual, .join-section")
    .forEach((el) => {
        el.style.opacity = 0;
        el.style.transform = "translateY(20px)";
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(el);
    });

/* ======================
   HEADER SCROLL EFFECT
====================== */
window.addEventListener("scroll", () => {
    header.style.backdropFilter =
        window.scrollY > 50 ? "blur(10px)" : "blur(6px)";
    header.style.boxShadow =
        window.scrollY > 50 ? "0 4px 20px rgba(0,0,0,0.1)" : "none";
});

/* ======================
   FOOTER YEAR
====================== */
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

/* ======================
   REDUCED MOTION
====================== */
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".blob-path").forEach((n) => (n.style.animation = "none"));
    document.querySelectorAll(".scroll-indicator").forEach((n) => (n.style.display = "none"));
}
// Video sound toggle
const video = document.getElementById("msdcVideo");
const soundBtn = document.getElementById("soundToggle");

if (video && soundBtn) {
    soundBtn.addEventListener("click", () => {
        video.muted = !video.muted;
        soundBtn.textContent = video.muted ? "🔇" : "🔊";
    });
}
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    if (!nav) return;
    nav.classList.toggle("navbar-scrolled", window.scrollY > 20);
});
/* ================= TEAM DATA (from constants.tsx) ================= */

const MEMBERS = [
    {
        id: 'maumita',
        name: 'Prof. Dr. Maumita Chakraborty',
        role: 'Faculty Coordinator',
        subTitle: 'HOD of CST, CSIT, CS, NW',
        linkedin: 'https://www.linkedin.com/in/maumita-chakraborty-3522aa27a/',
        imageUrl: './assets/maumita.png',
        tier: 'faculty'
    },
    {
        id: 'subhalaxmi',
        name: 'Prof. Subhalaxmi Chakraborty',
        role: 'Faculty Coordinator',
        subTitle: 'Asst. HOD of CST, CSIT, CS, NW',
        linkedin: 'https://www.linkedin.com/in/dr-subhalaxmi-chakraborty-a6a13b138/',
        imageUrl: './assets/subhalaxmi.png',
        tier: 'faculty'
    },
    {
        id: 'snehasish',
        name: 'Snehasish Das',
        role: 'President',
        linkedin: 'https://www.linkedin.com/in/snehasishxofficial/',
        imageUrl: './assets/snehasish.png',
        tier: 'executive'
    },
    {
        id: 'dipanjali',
        name: 'Dipanjali Dutta',
        role: 'Vice President',
        linkedin: 'https://www.linkedin.com/in/dipanjali-dutta-b04b40336',
        imageUrl: './assets/dipanjali.png',
        tier: 'executive'
    },
    {
        id: 'praneet',
        name: 'Praneet Singh',
        role: 'Secretary',
        linkedin: 'https://www.linkedin.com/in/praneet-singh-aa38b828a',
        imageUrl: './assets/praneet.png',
        tier: 'core'
    },
    {
        id: 'priyanshu',
        name: 'Priyanshu Mitra',
        role: 'Joint Secretary',
        linkedin: 'https://www.linkedin.com/in/priyanshu-mitra-068a36348/',
        imageUrl: './assets/priyanshu.png',
        tier: 'core'
    },
    {
        id: 'soumalika',
        name: 'Soumalika Chakraborty',
        role: 'HR & Operations Manager',
        linkedin: 'https://www.linkedin.com/in/soumalika-chakraborty-1a01061b5/',
        imageUrl: './assets/soumalika.png',
        tier: 'leads'
    },
    {
        id: 'ujan',
        name: 'Ujan Sarkar',
        role: 'Treasurer & Event Manager',
        linkedin: 'https://www.linkedin.com/in/ujan-sarkar',
        imageUrl: './assets/ujan.png',
        tier: 'leads'
    },
    {
        id: 'devi',
        name: 'Devi Prasad Chakraborty',
        role: 'Technical Lead',
        linkedin: 'https://www.linkedin.com/in/devi-prasad-chakraborty/',
        imageUrl: './assets/devi.png',
        tier: 'leads'
    },
    {
        id: 'subhamita',
        name: 'Subhamita Adhikari',
        role: 'Branding & Designing Lead',
        linkedin: 'https://www.linkedin.com/in/subhamita-adhikari-a14b00273',
        imageUrl: './assets/subhamita.png',
        tier: 'leads'
    },
    {
        id: 'salmoli',
        name: 'Salmoli Kangsabanik',
        role: 'Content Lead',
        linkedin: 'https://www.linkedin.com/in/salmoli-kangsabanik-06289b334',
        imageUrl: './assets/salmoli.png',
        tier: 'leads'
    },
    {
        id: 'anamika',
        name: 'Anamika Mallick',
        role: 'Student Operations Lead',
        linkedin: 'https://www.linkedin.com/in/anamika-m-01a1a8279',
        imageUrl: './assets/anamika.png',
        tier: 'leads'
    },
    {
        id: 'pratistha',
        name: 'Pratistha Achary',
        role: 'Social Media Lead',
        linkedin: 'https://www.linkedin.com/in/pratistha-acharya-891917372',
        imageUrl: './assets/pratistha.png',
        tier: 'leads'
    }
];

/* ================= CARD TEMPLATE (from MemberCard.tsx) ================= */

function createMemberCard(member) {
    return `
    <div class="team-card-pop">
      <img src="${member.imageUrl}" alt="${member.name}" loading="lazy">

      ${member.linkedin
            ? `
        <a
          href="${member.linkedin}"
          target="_blank"
          class="li-bubble"
          aria-label="LinkedIn profile of ${member.name}"
        >
          <i class="fab fa-linkedin-in"></i>
        </a>
      `
            : ""
        }

      <div class="team-info">
        <h4>${member.name}</h4>
        <span>${member.role}</span>
        ${member.subTitle ? `<span>${member.subTitle}</span>` : ""}
      </div>
    </div>
  `;
}

/* ================= RENDER LOGIC (from App.tsx) ================= */

function renderTeam() {
    const grids = {
        faculty: document.getElementById('faculty-grid'),
        executive: document.getElementById('executive-grid'),
        core: document.getElementById('core-grid'),
        leads: document.getElementById('leads-grid')
    };

    Object.values(grids).forEach(grid => grid && (grid.innerHTML = ''));

    MEMBERS.forEach(member => {
        const grid = grids[member.tier];
        if (grid) {
            grid.insertAdjacentHTML('beforeend', createMemberCard(member));
        }
    });
}

document.addEventListener('DOMContentLoaded', renderTeam);
const logo = document.getElementById("msdcLogo");

function updateLogo(theme) {
  if (theme === "dark") {
    logo.src = "./assets/icon45.jpg";
  } else {
    logo.src = "./assets/icon46.jpg";
  }
}

// On page load
updateLogo(document.body.getAttribute("data-theme") || "light");

// When theme button clicked
document.getElementById("themeBtn").addEventListener("click", () => {
  const current = document.body.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.body.setAttribute("data-theme", next);
  updateLogo(next);
});
