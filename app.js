function changeBg() {
    let navbar = document.querySelector(".nav")
    let scrollValue = window.scrollY
    if (scrollValue < 100) {
        navbar.classList.remove("nav2");
    } else {
        navbar.classList.add("nav2")
    }
}

window.addEventListener("scroll", changeBg)