// DOM LOADING

window.onload = () => {
  
// MENU HAMBURGER 
  
  function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');

    burger.addEventListener('click', (e) => {
      navbar.classList.toggle('show-nav');
    });
  }
  toggleMenu();

  const navbarLinks = document.querySelectorAll('.navbar a');
  navbarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const navbar = document.querySelector('.navbar');
      navbar.classList.toggle('show-nav');
    });
  });
  
// NAVBAR SCROLL TRANSFORMATION
  
  const nav = document.querySelector('.ui-section-header');
  let heightSection = nav.clientHeight;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > heightSection ){
      nav.classList.add('scroll');  
    } else {
      nav.classList.remove('scroll');
    }
  })
  
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

