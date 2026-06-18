// const container = document.getElementById("container");
// const imagens = document.querySelectorAll(".img");
// let indice = 0;

// function getLarguraSlide() {
//   return window.innerWidth;
// }

// function avancarAutomatico() {
//   indice++;

//   if (indice >= imagens.length) {
//     indice = 0;
//     container.style.transition = "none";
//     container.style.transform = "translateX(0)";
//     void container.offsetWidth;
//     container.style.transition = "transform 0.5s ease";
//     return;
//   }

//   container.style.transform = `translateX(-${indice * getLarguraSlide()}px)`;
// }

// setInterval(avancarAutomatico, 1500);

// window.addEventListener("resize", () => {
//   container.style.transform = `translateX(-${indice * getLarguraSlide()}px)`;
// });