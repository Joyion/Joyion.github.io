const navLinks = document.querySelector(".nav-links");
const burgerIcon = document.querySelector(".burger-icon");


function onNavBurgerClick() {
    burgerIcon.addEventListener("click", (event) => {
        console.log("clicking");
        navLinks.classList.toggle("nav-active");

    })
};


onNavBurgerClick();