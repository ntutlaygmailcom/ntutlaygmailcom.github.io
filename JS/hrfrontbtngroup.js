const btnGroup = document.querySelectorAll(".mockup .btn-group .btn");
console.log(btnGroup);
const situationgroup = document.querySelectorAll(".situation");
console.log(situationgroup);
btnGroup.forEach((btn) => {
  btn.addEventListener("click", () => {
    btnGroup.forEach((b) => {
      b.classList.remove("first");
    });
    const name = btn.dataset.name;
    situationgroup.forEach((situation) => {
      situation.classList.remove("active");
      if (situation.dataset.name === name) {
        situation.classList.add("active");
      }
    });
    console.log(btn.dataset.name);
    btn.classList.add("first");
  });
});
