
document.addEventListener("DOMContentLoaded", function() {
  // Common variables
  const toTopButton = document.querySelector(".totopcon");
  const introSection = document.querySelector(".intro");
  const transSection = document.querySelector(".trans");
  const footer = document.querySelector("footer");

  // "To Top" button functionality
  if (toTopButton && introSection && transSection && footer) {
    toTopButton.addEventListener("click", function() {
      introSection.scrollIntoView({ behavior: "smooth" });
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
});
