document.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 150) {  // Adjust the offset as needed
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === currentSection) {
      link.classList.add('active');
    }
  });
});

function scrollToSection(event, target) {
  event.preventDefault();
  const navbar = document.querySelector('.navbar');
  const navbarHeight = navbar.offsetHeight;
  const element = document.querySelector(target);
  const y = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
  window.scrollTo({ top: y, behavior: 'smooth' });
}
