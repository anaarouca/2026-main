<<<<<<< HEAD
// CARROSSEL
 const container = document.getElementById("container");
    const imagens = document.querySelectorAll(".img");
    let indice = 0;
    let fim = imagens.length - 1;

    function avancarAutomatico() {
      indice++;
      if (indice >= imagens.length) {
        indice = 0;
        // container.style.transform = `translateX(${2000}px)`;
        container.style.paddingLeft = "0px";
      }
    
      if (indice > 3) {
        // container.style.transform = `translateX(-${indice * 100}px)`;
        container.style.paddingLeft = "0px";
      }else{
        container.style.transform = `translateX(-${indice * 400}px)`;
    
        

      }
    }
    setInterval(avancarAutomatico, 1500);



// CONTADOR
let numero = 0;

let intervalo = setInterval(function() {
    numero += 1;
    document.getElementById("contador").innerText = numero
    if (numero >= 2000) {
        clearInterval(intervalo)
    }
}, 8)



// FAQ
let perguntas = document.querySelectorAll(".pergunta")

perguntas.forEach(function(pergunta) {
    pergunta.addEventListener("click", function() {
        let resposta = pergunta.nextElementSibling

        if (resposta.style.display === "block") {
            resposta.style.display = "none"
        } else {
            resposta.style.display = "block"
        }

})
})
=======
// CARROSSEL
 const container = document.getElementById("container");
    const imagens = document.querySelectorAll(".img");
    let indice = 0;
    let fim = imagens.length - 1;

    function avancarAutomatico() {
      indice++;
      if (indice >= imagens.length) {
        indice = 0;
        // container.style.transform = `translateX(${2000}px)`;
        container.style.paddingLeft = "0px";
      }
    
      if (indice > 3) {
        // container.style.transform = `translateX(-${indice * 100}px)`;
        container.style.paddingLeft = "0px";
      }else{
        container.style.transform = `translateX(-${indice * 400}px)`;
    
        

      }
    }
    setInterval(avancarAutomatico, 1500);



// CONTADOR
let numero = 0;

let intervalo = setInterval(function() {
    numero += 1;
    document.getElementById("contador").innerText = numero
    if (numero >= 2000) {
        clearInterval(intervalo)
    }
}, 8)



// FAQ
let perguntas = document.querySelectorAll(".pergunta")

perguntas.forEach(function(pergunta) {
    pergunta.addEventListener("click", function() {
        let resposta = pergunta.nextElementSibling

        if (resposta.style.display === "block") {
            resposta.style.display = "none"
        } else {
            resposta.style.display = "block"
        }

})
})
>>>>>>> 80708f25bbd3027cd94183eec243edc89d9f929f
