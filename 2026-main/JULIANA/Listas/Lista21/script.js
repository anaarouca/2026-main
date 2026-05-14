// 1.2.3 -----------------------------------
let texto = document.getElementById("texto")
let botao = document.getElementById("botao")
let remover = document.getElementById("remover")
let alternar = document.getElementById("alternar")

botao.addEventListener("click", function(){
    texto.classList.add("ativo")
})
remover.addEventListener("click", function(){
     texto.classList.remove("ativo")
})   
alternar.addEventListener("click", function(){
     texto.classList.toggle("ativo")
}) 

// 4--------------------------------------------
let texto2 = document.getElementById("texto2")
let botao2 = document.getElementById("botao2")
botao2.addEventListener("click", function(){
    texto2.classList.add("destaque")
})

// 5-------------------------------------------
let texto3 = document.getElementById("texto3")
let botao3 = document.getElementById("botao3")
botao3.addEventListener("click", function(){
    texto3.classList.toggle("grande")
})


// 6--------------------------------------------
let texto4 = document.getElementById("texto4")
let botao4 = document.getElementById("botao4")
botao4.addEventListener("click", function(){
    texto4.classList.toggle("escondido")
})


// 7--------------------------------------------
let texto5 = document.getElementById("texto5")
texto5.addEventListener("mouseover", function() {
    texto5.classList.add("hover")
})
texto5.addEventListener("mouseout", function() {
    texto5.classList.remove("hover")
})

// 8---------------------------------------------
let botao5 = document.getElementById("botao5")
botao5.addEventListener("click", function(){
    botao5.classList.add("botao")
})

// 9---------------------------------------------
let itens = document.querySelectorAll(".item")
itens.forEach(function(item) {
  item.addEventListener("click", function() {
  item.classList.add("selecionado")
})
})

// 10--------------------------------------------
let botao6 = document.getElementById("botao6")
botao6.addEventListener("click", function(){
    corpo.classList.toggle("dark")
})

// 11---------------------------------------------
let botao7 = document.getElementById("botao7")
let menu = document.getElementById("menu")
botao7.addEventListener("click", function(){
    menu.classList.toggle("mostrar")
})

// 12---------------------------------------------
let caixa = document.getElementById("caixa")
caixa.addEventListener("click", function() {
    caixa.classList.toggle("cores")
})
caixa.addEventListener("mouseover", function() {
    caixa.classList.add("borda")
})

caixa.addEventListener("mouseout", function() {
    caixa.classList.remove("borda")
})

// 13---------------------------------------------
let caixa2 = document.getElementById("caixa2")
let btnVermelho = document.getElementById("btnVermelho")
let btnAzul = document.getElementById("btnAzul")
let btnVerde = document.getElementById("btnVerde")
function limparCores() {
    caixa2.classList.remove("vermelho")
    caixa2.classList.remove("azul")
    caixa2.classList.remove("verde")
}
btnVermelho.addEventListener("click", function() {
    limparCores()
    caixa2.classList.add("vermelho")
})
btnAzul.addEventListener("click", function() {
    limparCores()
    caixa2.classList.add("azul")
})
btnVerde.addEventListener("click", function() {
    limparCores()
    caixa2.classList.add("verde")
})