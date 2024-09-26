const navLinks = document.querySelector(".nav-links .link")
const burgerIcon = document.querySelector(".burger-icon");
const sections = document.querySelectorAll('.main-section');
const navLinkSection = document.querySelector(".nav-links");

const aLinks = document.querySelectorAll(".nav-links a");
function openNavBar() {

    burgerIcon.addEventListener("click", () => {
        navLinkSection.classList.toggle("nav-closed")
    })

}

let observerOptions = {
    root: null,
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0,
}


const observerCallback = ((entries) => {
    entries.forEach((entry) => {
        // console.log(entry.target);
        let elem = entry.target;
        if (entry.isIntersecting) {

            const linkId = entry.target.id;


            aLinks.forEach((l) => {
                if ((l.getAttribute("href")) == "#" + linkId) {
                    l.classList.add("active-link");


                } else {
                    l.classList.remove('active-link');

                }


            })
        } {

        }
    })


})

const observer = new IntersectionObserver(observerCallback, observerOptions);



sections.forEach(section => {
    observer.observe(section);
});



openNavBar();