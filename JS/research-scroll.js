document.addEventListener("DOMContentLoaded", function() {
  // Common variables
  const toTopButton = document.querySelector(".totopcon");
  const introSection = document.querySelector(".mockup");
  const transSection = document.querySelector(".trans");
  const footer = document.querySelector("footer");

  // "To Top" button functionality
  if (toTopButton && introSection && transSection && footer) {
    toTopButton.addEventListener("click", function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener("scroll", function() {
      const transSectionBottom = transSection.getBoundingClientRect().bottom;
      const footerTop = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (window.scrollY > 100) {
        toTopButton.classList.add("show");
      } else {
        toTopButton.classList.remove("show");
      }

      if (footerTop < windowHeight) {
        toTopButton.classList.add("at-bottom");
      } else {
        toTopButton.classList.remove("at-bottom");
      }
    });
  }

  // Smooth scroll for anchor link
  const introLink = document.querySelector('.tointro .applink[href="#introo"]');
  if (introLink) {
    introLink.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});