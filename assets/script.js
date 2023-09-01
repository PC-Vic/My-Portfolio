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
