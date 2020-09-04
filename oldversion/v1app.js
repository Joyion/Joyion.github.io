
function navslide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".navlink");
    const navlinks = document.querySelectorAll(".navlink li");

    burger.addEventListener("click", function(){
        
        nav.classList.toggle("nav-active");

        navlinks.forEach(function(link, index){
            if(link.style.animation){
                link.style.animation = "";
            }
            else {
            const secs = index / 4 + 0.5;
              link.style.animation = "navLinkFade 0.5s ease forwards " + secs + "s";  
            }
            
        });
   

    })

}

function titleSlide() {
  const titles = document.querySelectorAll(".title p");
  const polygon = document.querySelector(".polygon");
  const mylife = document.querySelector(".myLife");
  const skills = document.querySelector(".skills");
  
 titles[0].style.animation = "slideleft 2s ease forwards";
 titles[1].style.animation = "slideright 2s ease forwards";
 polygon.style.animation = "slideright 2s ease forwards";
 mylife.style.animation = "visible 2s ease forwards ";
 skills.style.animation = "visible 2s ease forwards ";
 

}

function links() {

  const links = document.querySelectorAll(".navlink a");

  links.forEach(function(link){
    console.log(link)
    
    
    link.addEventListener("click", function(){

      links[0].classList.remove('activelink');
      links[1].classList.remove('activelink');

      const navlinks = document.querySelectorAll(".navlink li");
      const nav = document.querySelector(".navlink");
      nav.classList.remove("nav-active");
      link.classList.toggle("activelink");



      if (window.innerWidth <= 991.98)
      {
            navlinks.forEach(function(link, index){
            if(link.style.animation){
                link.style.animation = "";
            }
            else {
            const secs = index / 4 + 0.5;
              link.style.animation = "navLinkFade 0.5s ease forwards " + secs + "s";  
            }
            
        });
      }

    });


  });


}


navslide();
titleSlide();
links();
