import { scroll } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";
const container = document.querySelector("#hr");
const solutionout = document.querySelector(".solutionout");
scroll(
  (Progress) => {
    solutionout.style.setProperty("--progress", Progress);
  },
  { target: container }
);

const jadge = document.querySelector("#jadge");
scroll(
  (Progress) => {
    solutionout.style.setProperty("--progress_2", Progress);
  },
  { target: jadge }
);

const employee = document.querySelector("#employee");
scroll(
  (Progress) => {
    solutionout.style.setProperty("--progress_3", Progress);
  },
  { target: employee }
);
