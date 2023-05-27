// DOM LOADING

window.onload = () => {
  
// MENU HAMBURGER 
  
function toggleMenu() {
  const navbar = document.querySelector('.navbar');
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.ui-section-header');

  burger.addEventListener('click', (e) => {
    navbar.classList.toggle('show-nav');

    if (navbar.classList.contains('show-nav')) {
      nav.style.backgroundColor = '#fff';
    } else {
      nav.style.backgroundColor = '#ffffff3e';
    }
  });
}

toggleMenu();


  
// NAVBAR SCROLL TRANSFORMATION
  
const nav = document.querySelector('.ui-section-header');
let heightSection = nav.clientHeight;

window.addEventListener('scroll', () => {
  if (window.scrollY > heightSection) {
    nav.classList.add('scroll');
  } else {
    nav.classList.remove('scroll');
  }

  if (window.location.href.includes('contact.html')) {

    if (window.scrollY < heightSection) {
      nav.style.backgroundColor = '#f5f5f5';
      nav.classList.remove('scroll');
    } else {
      nav.classList.add('scroll');
      nav.style.backgroundColor = 'transparent';
    } 
  }
});
  
// PROGRESS BAR
  
  window.addEventListener('scroll', () => {
    let height = document.documentElement.scrollHeight - window.innerHeight;
    let position = window.scrollY;
    let width = document.documentElement.clientWidth;
  
    let progress = position / height * width;
  
    document.getElementById('progress').style.width = progress + 'px';
  })

// SLIDER @CONSTRUCTION PAGE

  if (document.querySelector('.ui-section-brands')) {
    const beforeBtn = document.querySelector('.before');
    const afterBtn = document.querySelector('.after');
    const slideContents = document.querySelectorAll('.slide-content');

    let currentIndex = 0; 

    function showSlide(index) {
    
      slideContents.forEach(function(content) {
        content.style.display = 'none';
      });

      slideContents[index].style.display = 'block';
    }

    showSlide(currentIndex);

    beforeBtn.addEventListener('click', function() {
      currentIndex--; 

      if (currentIndex < 0) {
        currentIndex = slideContents.length - 1;
      }

    showSlide(currentIndex); 
    });

    afterBtn.addEventListener('click', function() {
      currentIndex++; 
      
      if (currentIndex >= slideContents.length) {
        currentIndex = 0;
      }

    showSlide(currentIndex); 
    });
}
 


}

