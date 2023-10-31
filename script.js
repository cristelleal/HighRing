window.onload = () => {
  
// Hamburger menu

function toggleMenu() {
  const navbar = document.querySelector('.navbar');
  const burger = document.querySelector('.burger');
  const navSection = document.querySelector('.section-header');

  burger.addEventListener('click', (e) => {
    e.preventDefault(); 
    
    navbar.classList.toggle('show-nav');

    if (navbar.classList.contains('show-nav')) {
      navSection.style.backgroundColor = '#fff';
      document.body.style.overflow = 'hidden'; 
    } else {
      navSection.style.backgroundColor = '#ffffff3e';
      document.body.style.overflow = ''; 
    }
  });
}

toggleMenu();

// Navbar section appearance
  
const navSection = document.querySelector('.section-header');
let heightSection = navSection.clientHeight;

window.addEventListener('scroll', () => {

  if (window.scrollY > heightSection) {
    navSection.classList.add('scroll');
  } else {
    navSection.classList.remove('scroll');
  }

  if (window.location.href.includes('contact.html')) {

    if (window.scrollY < heightSection) {
      navSection.style.backgroundColor = '#f5f5f5';
      navSection.classList.remove('scroll');
    } else {
      navSection.classList.add('scroll');
      navSection.style.backgroundColor = 'transparent';
    } 
  }
});
    
window.addEventListener('scroll', () => {
  let height = document.documentElement.scrollHeight - window.innerHeight;
  let position = window.scrollY;
  let width = document.documentElement.clientWidth;
  
  let progressBar = position / height * width;
  
  document.getElementById('progress').style.width = progressBar + 'px';
});

  
// Slider at construction page
  
if (document.querySelector('.section-brands')) {
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
  
  if (window.location.pathname === "/consulting.html") {
    const slider = document.querySelector('.slider');
    
    slider.style.minHeight = '19rem';
  };
  
// Scroll top button homepage

if (window.location.href.includes('index.html')) {
  const arrow = document.querySelector('.arrow-up-btn');

  window.addEventListener('scroll', () => {
    if (window.innerWidth >= 765 && window.scrollY > 0) {
      arrow.style.display = 'block'; 
      arrow.classList.add('show'); 
    } else {
      arrow.classList.remove('show'); 
    }
  });
  
  arrow.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      right: 0,
      behavior: 'smooth',
    });
  });
}
}

// Authentification

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
