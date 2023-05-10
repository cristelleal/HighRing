// MENU HAMBURGER 

// Sélectionner les élément du menu
function toggleMenu () {  
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');
    // Fonction pour afficer le contenu du menu
    burger.addEventListener('click', (e) => {    
      navbar.classList.toggle('show-nav');
    });    
    // Animation
    const navbarLinks = document.querySelectorAll('.navbar a');
    navbarLinks.forEach(link => {
      link.addEventListener('click', (e) => {    
        navbar.classList.toggle('show-nav');
      }); 
    })
     
  }
toggleMenu();

// SLIDER CONSTRUCTION PAGE

// Attendre que le DOM soit chargé
document.addEventListener("DOMContentLoaded", function(event) {
  // Sélectionner les éléments du slider
  var slider = document.querySelector(".slider");
  var beforeBtn = slider.querySelector(".before");
  var afterBtn = slider.querySelector(".after");
  var slideContents = slider.querySelectorAll(".slide-content");

  var currentIndex = 0; // Index du contenu actuel

  // Fonction pour afficher le contenu du slider à l'index spécifié
  function showSlide(index) {
    // Masquer tous les contenus
    slideContents.forEach(function(content) {
      content.style.display = "none";
    });

    // Afficher le contenu à l'index spécifié
    slideContents[index].style.display = "block";
  }

  // Afficher le premier contenu au chargement de la page
  showSlide(currentIndex);

  // Gérer le clic sur le bouton précédent
  beforeBtn.addEventListener("click", function() {
    currentIndex--; // Décrémenter l'index

    // Vérifier les limites de l'index
    if (currentIndex < 0) {
      currentIndex = slideContents.length - 1;
    }

    showSlide(currentIndex); // Afficher le contenu correspondant
  });

  // Gérer le clic sur le bouton suivant
  afterBtn.addEventListener("click", function() {
    currentIndex++; // Incrémenter l'index

    // Vérifier les limites de l'index
    if (currentIndex >= slideContents.length) {
      currentIndex = 0;
    }

    showSlide(currentIndex); // Afficher le contenu correspondant
  });
});
