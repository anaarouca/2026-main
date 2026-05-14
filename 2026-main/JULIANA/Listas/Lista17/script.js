//1 ------------------------------
let titulo = document.getElementById("titulo")
function mudarTexto(){
    titulo.innerText = "Aprendendo DOM com JavaScript"
}
//2 --------------------------------------
let mensagem = document.getElementById("mensagem")
function saudacao() {
    let nome = document.getElementById("nome").value
    mensagem.innerText = "Bem-vindo ao sistema, "+ nome
}

//3 ---------------------------------------------
let titulo2 = document.getElementById("titulo2")
function mudarTexto2(){
    titulo2.innerText = "Manipulando HTML com JavaScript"
}

//4-----------------------------------------------
let mensagem2 = document.getElementById("mensagem2")
function saudacao2() {
    let nome2 = document.getElementById("nome2").value
    if(nome2 == 0){
        mensagem2.innerText = "Digite um nome primeiro! "
    }else{
    mensagem2.innerText = "Olá "+ nome2
}
}

//5----------------------------------------------
function modoEscuro() {
    if(body.style.backgroundColor == "black"){
    body.style.background = "white"
}else{
    body.style.background = "black"
}
}

//6----------------------------------------------
let situacao = document.getElementById("situacao")
function verificarNota() {
    let nota = document.getElementById("nota").value
    if(nota >= 7){
        situacao.innerText = "Aluno aprovado"
    }else{
    situacao.innerText = "Aluno reprovado"
}
}

//7-----------------------------------------------
function surpresa(){
    mensagemSurpresa.innerText = "Você encontrou a mensagem secreta!"
}

//8-----------------------------------------------
let titulo3 = document.getElementById("titulo3")
function mudarCor(){
   titulo3.style.color = "red"
   titulo3.style.fontWeight = "bold"
}

//9-----------------------------------------------
let resultado = document.getElementById("resultado")
function contarCaracteres() {
    let texto = document.getElementById("textoInput").value
    let quantidade = texto.length

    resultado.innerText = "Você digitou " + quantidade + " caracteres"
}

//10----------------------------------------------
let titulo4 = document.getElementById("titulo4")
function mudarCor2(){
    titulo4.style.color = "#59a5be"
}

//11----------------------------------------------------
const texto = document.getElementById("texto")
function sumir() {
    if (texto.style.display == "none"){
        texto.style.display = "block"
    } else {
        texto.style.display = "none"
    }
} 

// 12------------------------------------------------------
let resultadoMeses = document.getElementById("resultadoMeses")

function calcularMeses() {
    let idade = document.getElementById("idadeMeses").value
    let meses = idade * 12
    resultadoMeses.innerText = "Você já viveu " + meses + " meses"
}

// 13-----------------------------------------------------
let resultadoIdade = document.getElementById("resultadoIdade")

function verificarIdade() {
    let idade = document.getElementById("idadeMaioridade").value
    if (idade >= 18) {
        resultadoIdade.innerText = "Você é maior de idade"
    } else {
        resultadoIdade.innerText = "Você é menor de idade"
    }
}