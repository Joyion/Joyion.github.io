// function change navabar on scroll.

function navbarOpen() {
    const nav = document.querySelector(".nav")

    nav.addEventListener("click", () => {

        nav.classList.toggle("nav-active")
    })
};

navbarOpen();