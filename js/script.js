const list = document.querySelector(".header-list");

document.querySelector("#hamburger").onclick = () => {
  list.classList.toggle("active");
};

const menu = document.querySelector("#hamburger");

document.addEventListener("click", function (e) {
  if (!list.contains(e.target) && !menu.contains(e.target)) {
    list.classList.remove("active");
  }
});
