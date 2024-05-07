// function change navabar on scroll.

function navbarOpen() {
    const nav = document.querySelector(".navbar")
    const iconMark = document.querySelector(".fa-xmark");
    const iconBars = document.querySelector(".fa-bars");
    const burger = document.querySelector(".burger-bar");
    const burgerIcons = document.querySelector(".burger-icon i");
    const linkbar = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links a");

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active")
        if (burgerIcons.classList.contains("fa-bars")) {
            burgerIcons.classList.remove("fa-bars");
            burgerIcons.classList.add("fa-xmark");
            linkbar.classList.remove("nav-links-active");

        } else {
            burgerIcons.classList.remove("fa-xmark");
            burgerIcons.classList.add("fa-bars");
            linkbar.classList.add("nav-links-active");
        }
    })
};




let sections = document.querySelectorAll("section")
// window.onscroll((e) => {

//     sections.forEach((section) => {
//         let top = window.scrollY;
//         const sectionTop = section.offsetTop;
//         let height = section.offsetHeight;
//         let id = section.getAttribute("id");
//         if (top >= sectionTop && top <= (sectionTop + height)) {
//             // links.forEach((l) => {
//             //     l.classList.remove("active-link")
//             // })

//         }
//     });

// })




navbarOpen();