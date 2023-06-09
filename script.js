/* ----------- MOVING TITLE ANIMATION ----------- */

window.addEventListener("scroll", () => {
    const titles = document.querySelectorAll(".moving-title");
    titles.forEach((title) => {
        if (title.dataset.direction == "forwards") {
            title.style.transform = `translateX(${
                (window.scrollY / window.innerHeight) * 50
            }%)`;
        } else {
            title.style.transform = `translateX(${
                (window.scrollY / window.innerHeight) * -50
            }%)`;
        }
    });
});

/* ----------- SECTIONS DEFINITION ----------- */

const sections = document.querySelectorAll(".images");

/* ----------- TEXT APPEAR FUNCTIONALITY ----------- */

const text = document.querySelectorAll(".text");
const sourceButton = document.querySelectorAll(".source-code");

let t = 0.5;
let rm = "14%";

let query390 = window.matchMedia("(min-width: 390px)");
let query820 = window.matchMedia("(min-width: 820px)");
let query1024 = window.matchMedia("(min-width: 1024px)");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            text.forEach((elmt) => {
                elmt.classList.toggle("text-reveal", entry.isIntersecting);
            });
            sourceButton.forEach((btn) => {
                btn.parentElement.classList.toggle(
                    "button-reveal",
                    entry.isIntersecting
                );
                btn.classList.toggle("btn-text-appear", entry.isIntersecting);
            });
        });
    },
    { threshold: t, rootMargin: rm }
);

sections.forEach((s) => {
    observer.observe(s);
});

/* ----------- PARALLAX ANIMATION ON SCROLL ----------- */

let multiplier = 1;
let delay = 200;

if (query390.matches) {
    multiplier = 2.3;
}
if (query390.matches || query820.matches) {
    delay = 0;
}
if (query1024.matches) {
    multiplier = 1;
    delay = 200;
}

window.addEventListener("scroll", () => {
    const target = document.querySelectorAll(".parallax");
    for (elmt of target) {
        if (isInViewportParallax(elmt.parentElement)) {
            elmt.style.transition = `transform ${delay}ms ease-out`;
            let pos = (window.scrollY / 3) * (elmt.dataset.rate * multiplier);
            elmt.style.transform = `translate(0px, ${pos}px)`;
        }
    }
});

/* ----------- CHECK IF ELEMENT IS IN VIEWPORT ----------- */

function isInViewportParallax(elem) {
    let y = elem.getBoundingClientRect().top;
    let hw = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
    );
    let h = elem.clientHeight;
    return y < hw && y + h > 0;
}

function isInViewportText(elem) {
    let y = elem.getBoundingClientRect().top;
    let hw = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
    );
    let h = elem.clientHeight;
    return y < hw / 2 && (y + h) / hw > 0;
}

/* ----------- CHANGE THE TEXT ON LEFT DEPENDING ON PROJECT ----------- */

window.addEventListener("scroll", () => {
    const number = document.querySelector(".proj-num");
    const title = document.querySelector(".proj-title");
    const subtitle = document.querySelector(".proj-subtitle");
    const description = document.querySelector(".proj-description");
    const button = document.querySelector(".source-code");

    // PROJECT 02
    if (isInViewportText(sections.item(0))) {
        number.innerHTML = "01";
        title.innerHTML = "Cellular Geolocator";
        subtitle.innerHTML = "Data Structure Design&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;Java";
        description.innerHTML =
            "Software emulation of geographical data clusters and nearest neighbor " +
            "calculations. <br />Cellular devices and cell towers plotted in a kd-tree" +
            " then prioritized with a maxheap.";
        button.href =
            "https://github.com/gibsonmurray/CMSC420-Data-Structures/tree/011f7c4d49a62809dc7862fcf51d2b17b60060d6/Project%203%20-%20Clustering%20and%20Farthest%20First%20KD%20Tree/cmsc420_s23";
        button.innerHTML = "Source Code";
    }

    // PROJECT 01
    if (isInViewportText(sections.item(1))) {
        number.innerHTML = "02";
        title.innerHTML = "AI Image Generator";
        subtitle.innerHTML =
            "Asynchronous Program&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;JavaScript";
        description.innerHTML =
            "Fullstack application with Node.js, Express, OpenAI, and MongoDB. " +
            "Login fetching and hashing." +
            "<br>Front-end features interaction and loading animations.";
        button.href = "https://cerise-scorpion-tux.cyclic.app/";
        button.innerHTML = "Demo";
    }

    // PROJECT 03
    if (isInViewportText(sections.item(2))) {
        number.innerHTML = "03";
        title.innerHTML = "MicroCaml";
        subtitle.innerHTML =
            "Compiler&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;OCaml";
        description.innerHTML =
            "A bootstrapped OCaml compiler with a top level REPL(mutop)." +
            "<br>Constructed with a lexer, recursive descent parser," +
            " and an interpreter.";
        button.href =
            "https://github.com/gibsonmurray/CMSC330-Programming-Langs/tree/main/project4a";
        button.innerHTML = "Source Code";
    }
    // PROJECT 04
    if (isInViewportText(sections.item(3))) {
        number.innerHTML = "04";
        title.innerHTML = "C to Assembly";
        subtitle.innerHTML =
            "Project&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;C & MIPS ASM";
        description.innerHTML =
            "A series of projects written in low-level assembly." +
            "<br>Translating C code into MIPS with the same" +
            " semantic properties.";
        button.href =
            "https://github.com/gibsonmurray/CMSC216-Computer-Systems/tree/main/project09";
        button.innerHTML = "Source Code";
    }
    // CODEPENS
    if (isInViewportText(sections.item(4))) {
        number.innerHTML = "05";
        title.innerHTML = "Codepens";
        subtitle.innerHTML =
            "Front-End Development&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;HTML CSS & JS";
        description.innerHTML =
            "A collection of my work, enhancing my skills in web animation & design." +
            "<br>Most of these projects were prototypes for this site" +
            " but I chose a different design.";
        button.href = "https://codepen.io/gibsonmurray";
        button.innerHTML = "View Profile";
    }
});
