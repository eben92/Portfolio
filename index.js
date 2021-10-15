// on scroll
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () =>
  window.scroll({ top: 0, behavior: "smooth" })
);
