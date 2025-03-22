const btnMenu = document.querySelector(".fa-bars");
const menu = document.querySelector(".contentBurguer");
const fundo = document.querySelector(".fundoOpaco");

btnMenu.addEventListener("click", () => {
  btnMenu.classList.toggle("fa-bars");
  btnMenu.classList.toggle("fa-xmark");
  if (menu.style.display === "none") {
    menu.style.display = "block";
    fundo.style.display = "block";
  } else {
    menu.style.display = "none";
    fundo.style.display = "none";
  }
});
