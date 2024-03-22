function scrollToSection(sectionID) {
    const section = document.querySelector(sectionID);
    if(section) {
        section.scrollIntoView({ behavior: 'smooth'});
    }
}

document.querySelector('a[href="#about-me"]').addEventListener('click', function (e) {
    e.preventDefault();
    scrollToSection('#about-me');
});

document.querySelector('a[href="#projects"]').addEventListener('click', function (e) {
    e.preventDefault();
    scrollToSection('#projects');
});

document.querySelector('a[href="#contact"]').addEventListener('click', function (e) {
    e.preventDefault();
    scrollToSection('#contact');
});



// fade in main card animation
window.addEventListener('scroll', () => {
    const card = document.getElementById('main-project-card');
    
    // Calculate the position of the card relative to the viewport
    const rect = card.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
    // If the top of the card is within the viewport, fade it in
    if (rect.top <= windowHeight) {
      card.style.opacity = 1;
    }
  });
  