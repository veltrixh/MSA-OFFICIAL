/* =========================
   THEME TOGGLE (SAFE)
========================= */

const toggle = document.getElementById("themeBtn");
const root = document.body;

if (toggle) {
    toggle.addEventListener("click", () => {
        const isDark = root.dataset.theme === "dark";
        root.dataset.theme = isDark ? "light" : "dark";
        toggle.textContent = isDark ? "Dark" : "Light";
        toggle.setAttribute("aria-pressed", String(!isDark));
        localStorage.setItem("theme", root.dataset.theme);
    });
}

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    root.dataset.theme = savedTheme;
    toggle.textContent = savedTheme === "dark" ? "Light" : "Dark";
    toggle.setAttribute("aria-pressed", savedTheme === "dark");
}

/* =====================================================
   MULTI-SLIDER ENGINE (SAFE FOR ALL PAGES)
===================================================== */

document.querySelectorAll(".msdc-slider").forEach((slider) => {

    const track = slider.querySelector(".slider-track");
    const windowEl = slider.querySelector(".slider-window");
    const prev = slider.querySelector(".slider-prev");
    const next = slider.querySelector(".slider-next");
    const progress = slider.querySelector(".slider-progress-fill");

    // ❗ Abort if required elements missing
    if (!track || !windowEl || !prev || !next || !progress) return;

    let index = 0;
    let isDown = false;
    let startX;
    let scrollLeft;
    let maxIndex;

    const gap = 14;
    const itemWidth = 260 + gap;

    function updateMaxIndex() {
        const itemsVisible = Math.floor(windowEl.offsetWidth / itemWidth);
        maxIndex = track.children.length - itemsVisible;
        if (maxIndex < 0) maxIndex = 0;
    }

    function updateSlider() {
        track.style.transform = `translateX(${-index * itemWidth}px)`;
        progress.style.width = maxIndex
            ? `${(index / maxIndex) * 100}%`
            : "0%";
    }

    updateMaxIndex();
    window.addEventListener("resize", () => {
        updateMaxIndex();
        updateSlider();
    });

    /* --- BUTTON CONTROLS --- */
    prev.addEventListener("click", () => {
        if (index > 0) index--;
        updateSlider();
    });

    next.addEventListener("click", () => {
        if (index < maxIndex) index++;
        updateSlider();
    });

    /* --- DRAG TO SCROLL --- */
    windowEl.addEventListener("mousedown", (e) => {
        isDown = true;
        startX = e.pageX - windowEl.offsetLeft;
        scrollLeft = index * itemWidth;
        windowEl.classList.add("active");
    });

    window.addEventListener("mouseup", () => {
        isDown = false;
        windowEl.classList.remove("active");
    });

    windowEl.addEventListener("mouseleave", () => {
        isDown = false;
        windowEl.classList.remove("active");
    });

    windowEl.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();

        const x = e.pageX - windowEl.offsetLeft;
        const walk = (x - startX) * -1;

        let newScroll = scrollLeft + walk;
        index = Math.round(newScroll / itemWidth);

        if (index < 0) index = 0;
        if (index > maxIndex) index = maxIndex;

        updateSlider();
    });
});
