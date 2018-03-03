var toggleMenuButton = document.querySelector(".header__menu-box");
var body = document.querySelector("body");

toggleMenuButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  body.classList.toggle("show-menu");
});
