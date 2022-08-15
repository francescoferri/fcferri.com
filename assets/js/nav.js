const mobileButtonOpen = document.getElementById("mobile-menu-open");
const mobileButtonClose = document.getElementById("mobile-menu-close");
nav = document.querySelector("nav");

mobileButtonOpen.addEventListener("click", () => {
    nav.classList.add("mobile-menu-active");
});

mobileButtonClose.addEventListener("click", () => {
    nav.classList.remove("mobile-menu-active");
});

document.querySelectorAll(".nav-menu-item").forEach((item) => {
    item.addEventListener("click", (event) => {
        nav.classList.remove("mobile-menu-active");
    });
});

// show nav on scroll up
var lastScroll,
    currentScrollTop = 0,
    navContainer = document.querySelector(".nav-container");

window.onscroll = function () {
    var navHeigth = navContainer.clientHeight;
    currentScrollTop = document.documentElement.scrollTop;

    if (
        lastScroll < currentScrollTop &&
        currentScrollTop > navHeigth + navHeigth
    ) {
        document.querySelector(".nav-container").style.top =
            "-" + navHeigth + "px";
        nav.classList.remove("mobile-menu-active");
    } else if (
        lastScroll - currentScrollTop > 2 &&
        !(currentScrollTop <= navHeigth)
    ) {
        document.querySelector(".nav-container").style.top = "0px";
        nav.classList.remove("mobile-menu-active");
    }
    lastScroll = currentScrollTop;
};
