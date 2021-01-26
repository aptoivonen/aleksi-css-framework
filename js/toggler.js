const togglers = document.querySelectorAll("[data-toggle='collapse']");
togglers.forEach((toggler) => {
  const targetString = toggler.dataset.target;
  if (targetString) {
    const target = document.querySelector(targetString);
    if (target) {
      toggler.addEventListener("click", () => {
        target.classList.toggle("show");
      });
    }
  }
});
