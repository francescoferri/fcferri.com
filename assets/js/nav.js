const mobileButtonOpen = document.getElementById("mobile-menu-open");
const mobileButtonClose = document.getElementById("mobile-menu-close");
var lastScroll,
    currentScrollTop = 0,
    navContainer = document.querySelector(".nav-container"),
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
window.onscroll = function () {
    var navHeight = navContainer.clientHeight;
    currentScrollTop = document.documentElement.scrollTop;

    if (
        lastScroll < currentScrollTop &&
        currentScrollTop > navHeight + navHeight
    ) {
        document.querySelector(".nav-container").style.top =
            "-" + navHeight + "px";
        nav.classList.remove("mobile-menu-active");
    } else if (
        lastScroll - currentScrollTop > 2 &&
        !(currentScrollTop <= navHeight)
    ) {
        document.querySelector(".nav-container").style.top = "0px";
        nav.classList.remove("mobile-menu-active");
    }
    lastScroll = currentScrollTop;
};
