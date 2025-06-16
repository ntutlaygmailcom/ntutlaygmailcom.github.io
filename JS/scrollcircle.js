import { scroll } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";
const container = document.querySelector(".hrmainsolution");
scroll(
  (Progress) => {
    container.style.setProperty("--progress", Progress);
  },
  { target: container }
);
