const heroImg = document.querySelector('.hero-image')
const transformImg = document.querySelector('.transform-image')
const standOutImg = document.querySelector('.standout-image')
const graphicImg = document.querySelector('.graphic')
const photographyImg = document.querySelector('.photography')
const navbar = document.querySelector('nav')
const hamburger = document.querySelector('#hamburger-menu')
function checkMediaQuery() {
    // If the inner width of the window is greater then 768px
    if (window.innerWidth > 720) {
      // Then log this message to the console
      console.log('Media Query Matched!')
      heroImg.src = "./images/desktop/image-header.jpg"
      transformImg.src = "./images/desktop/image-transform.jpg"
      standOutImg.src = "./images/desktop/image-stand-out.jpg"
      graphicImg.src = "./images/desktop/image-graphic-design.jpg"
      photographyImg.src = "./images/desktop/image-photography.jpg"
    }else if (window.innerWidth < 720){
        heroImg.src = "./images/mobile/image-header.jpg"
        transformImg.src = "./images/mobile/image-transform.jpg"
        standOutImg.src = "./images/mobile/image-stand-out.jpg"
        graphicImg.src ="./images/mobile/image-graphic-design.jpg"
        photographyImg.src = "./images/mobile/image-photography.jpg"

    }
  }
  const showNavbar = () => {
    navbar.classList.toggle("block");
  }
  // Add a listener for when the window resizes
  window.addEventListener('resize',checkMediaQuery)
  checkMediaQuery();

  hamburger.addEventListener('click',showNavbar)

  
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);