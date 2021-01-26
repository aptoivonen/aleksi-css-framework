const togglers = document.querySelectorAll("[data-toggle='collapse']");
togglers.forEach((toggler) => {
  const targetString = toggler.dataset.target;
  if (targetString) {
    const target = document.querySelector(targetString);
    if (target) {
      toggler.addEventListener("click", () => {
        // console.log("height before:" + target.clientHeight);
        target.classList.toggle("show");
        // console.log("height after:" + target.clientHeight);
        target.style.height = `${target.clientHeight}px`;
        target.addEventListener("transitionend", () => {
          target.style = "";
        });
      });
    }
  }
});
