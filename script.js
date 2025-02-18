
// PRE-LOADER

let preloaderDiv = document.querySelector("[data-preloader-div]");

window.addEventListener ("load", () => {
    preloaderDiv.classList.add("remove");
});


const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length ; i <len; i++) {
        elements[i].addEventListener(eventType, callback);
    };
};

// NAVBAR

const navbar = document.querySelector("[data-navbar]");
const navTooglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toogleNav = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements(navTooglers, "click", toogleNav);

// HEADER

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function() {
    header.classList[window.scrollY > 100 ? "add" : "remove"]("active");
});

