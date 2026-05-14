// 1----------------------------------------------
let resultadoArredondado = document.getElementById("resultadoArredondado")

function arredondar() {
    let numeroDecimal = document.getElementById("numeroDecimal").value
    resultadoArredondado.innerText = "O número arredondado é: " + (Math.round(numeroDecimal))
}

// 2---------------------------------------------
let resultadoArredondado2 = document.getElementById("resultadoArredondado2")
function arredondarParaBaixo() {
    let numeroDecimal2 = document.getElementById("numeroDecimal2").value
    resultadoArredondado2.innerText = "O número arredondado para baixo é: " + (Math.floor(numeroDecimal2))
}

//3-----------------------------------------------
let resultadoArredondado3 = document.getElementById("resultadoArredondado3")
function arredondarParaCima() {
    let numeroDecimal3 = document.getElementById("numeroDecimal3").value
    resultadoArredondado3.innerText = "O número arredondado para cima é: " + (Math.ceil(numeroDecimal3))
}


// 4----------------------------------------------
let resultadoRaiz = document.getElementById("resultadoRaiz")
function raizQuadrada() {
    let numero = document.getElementById("numero").value
    resultadoRaiz.innerText = "A raiz desse número é: " + (Math.sqrt(numero))
}


// 5----------------------------------------------
let resultadoPotencia = document.getElementById("resultadoPotencia")
function calcularPotencia() {
    let base = document.getElementById("base").value
    let expoente = document.getElementById("expoente").value
    resultadoPotencia.innerText = "O resultado da potência é: " + (Math.pow(base, expoente))
}


// 6------------------------------------------------

let resultadoMaiorValor = document.getElementById("resultadoMaiorValor")
function maiorValor() {
    let numero2 = document.getElementById("numero2").value
    let numero3 = document.getElementById("numero3").value
    let numero4 = document.getElementById("numero4").value
    resultadoMaiorValor.innerText = "O maior número é: " + (Math.max(numero2, numero3, numero4))
}

// 7----------------------------------------------------
let resultadoMaior = document.getElementById("resultadoMenorValor")
function menorValor() {
    let numero5 = document.getElementById("numero5").value
    let numero6 = document.getElementById("numero6").value
    let numero7 = document.getElementById("numero7").value
    resultadoMenorValor.innerText = "O menor número é: " + (Math.min(numero5, numero6, numero7))
}

// 8-------------------------------------------------
let resultadoSorteio = document.getElementById("resultadoSorteio")
function sortearNumero() {
    let numero = Math.round(Math.random() * 10)
    resultadoSorteio.innerText = "O  número sorteado é: " + numero
}

// 9--------------------------------------------------
let resultadoSorteio2 = document.getElementById("resultadoSorteio2")
function lancarDado() {
    let numero2 = Math.round(Math.random() * 6 + 1)
    resultadoSorteio2.innerText = "O  número sorteado é: " + numero2
}
