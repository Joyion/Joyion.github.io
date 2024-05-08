const navLinks = document.querySelector(".nav-links")
const burgerIcon = document.querySelector(".burger-icon");

function openNavBar() {

    burgerIcon.addEventListener("click", () => {
        console.log("Clicking");
        navLinks.classList.toggle("nav-active");

    })

}

openNavBar();