// 1
function trocar() {
  document.getElementById("texto1").innerText = "Tudo bem?"
}

// 2
function mostrar2() {
  let valor = document.getElementById("input2").value
  document.getElementById("saida2").innerText = valor
}

// 3
let contador = document.getElementById("contador")
let btn = document.getElementById("btnContar")
let contagem = 0

btn.addEventListener("click", function() {
  contagem++
  contador.innerText = contagem
})

// 4
function esconder() {
  document.getElementById("texto4").style.display = "none"
}

// 5
let input5 = document.getElementById("input5")
let saida5 = document.getElementById("saida5")

input5.addEventListener("input", function() {
  saida5.innerText = input5.value
})

// 6
let input6 = document.getElementById("input6")
let saida6 = document.getElementById("saida6")

input6.addEventListener("input", function() {
  saida6.innerText = input6.value.toUpperCase()
})

// 7
let input7 = document.getElementById("input7")
let saida7 = document.getElementById("saida7")

input7.addEventListener("input", function() {
  saida7.innerText = "Você digitou " + input7.value.length + " caracteres"
})

// 8
let input8 = document.getElementById("input8")
let saida8 = document.getElementById("saida8")

input8.addEventListener("input", function() {
  if (input8.value.length < 5) {
    saida8.innerText = "Texto muito curto"
  } else {
    saida8.innerText = "Texto válido"
  }
})

// 9
let cor = document.getElementById("cor")

cor.addEventListener("mouseover", function() {
  cor.style.color = "red"
})

cor.addEventListener("mouseout", function() {
  cor.style.color = "black"
})

// 10
let botao = document.getElementById("botao")
let msg = document.getElementById("msg")

botao.addEventListener("mouseover", function() {
  msg.style.display = "block"
})

botao.addEventListener("mouseout", function() {
  msg.style.display = "none"
})

// 11
let surpresa = document.getElementById("surpresa")

surpresa.addEventListener("mouseover", function() {
  surpresa.innerText = "Surpresa "
})

// 12
let campo = document.getElementById("campo")
let saida12 = document.getElementById("saida12")

campo.addEventListener("input", function() {
  saida12.innerText = campo.value
})

campo.addEventListener("mouseover", function() {
  saida12.style.color = "blue"
})

function limpar() {
  campo.value = ""
  saida12.innerText = ""
}
