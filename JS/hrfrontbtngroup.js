const btnGroup = document.querySelectorAll(".mockup .btn-group .btn");
console.log(btnGroup);
btnGroup.forEach((btn) => {
  btn.addEventListener("click", () => {
    btnGroup.forEach((b) => {
      b.classList.remove("first");
    });
    btn.classList.add("first");
  });
});
