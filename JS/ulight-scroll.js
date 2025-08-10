
document.addEventListener("DOMContentLoaded", function() {
  // Common variables
  const toTopButton = document.querySelector(".totopcon");
  const sections = document.querySelectorAll(".snap-section");
  const introSection = document.querySelector(".intro");
  const transSection = document.querySelector(".trans");
  const footer = document.querySelector("footer");

  let currentSection = 0;
  let isScrolling = false;
  let isToTopScrolling = false;

  // "To Top" button functionality
  if (toTopButton && introSection && transSection && footer) {
    toTopButton.addEventListener("click", function() {
      isToTopScrolling = true;
      introSection.scrollIntoView({ behavior: "smooth" });

      // Reset smooth scrolling after "to top" is complete
      setTimeout(() => {
        isToTopScrolling = false;
        currentSection = 0; // Reset to the first section
      }, 800); // Should match the smooth scroll duration
    });

    window.addEventListener("scroll", function() {
      const transSectionBottom = transSection.getBoundingClientRect().bottom;
      const footerTop = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (transSectionBottom < windowHeight) {
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

  // Smooth scrolling functionality
  let wheelTimeout;
  window.addEventListener("wheel", function(e) {
    if (isScrolling || isToTopScrolling) return;

    clearTimeout(wheelTimeout);
    wheelTimeout = setTimeout(function() {
      const direction = e.deltaY > 0 ? 1 : -1;

      if (direction === 1) {
        if (currentSection < sections.length - 1) {
          currentSection++;
        }
      } else {
        if (currentSection > 0) {
          currentSection--;
        }
      }

      scrollToSection(currentSection);
    }, 50); // Debounce time
  });

  function scrollToSection(index) {
    isScrolling = true;
    const section = sections[index];
    const top = section.offsetTop;

    window.scrollTo({
      top: top,
      behavior: "smooth"
    });

    setTimeout(() => {
      isScrolling = false;
    }, 1000); // timeout to prevent rapid scrolling
  }
});
