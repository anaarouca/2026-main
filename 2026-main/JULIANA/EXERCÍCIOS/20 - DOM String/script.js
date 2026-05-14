//DOM - String
let nome = "Juliana"
let maiuscula = nome.toLocaleUpperCase()
let minuscula = nome.toLocaleLowerCase()

console.log(maiuscula)
console.log(minuscula)
console.log(nome[2])

//----------------------------------------------
function mostrar(){
    let texto = document.getElementById("texto").value
    let mn = document.getElementById("mn")
    let ms = document.getElementById("ms")
    let letras = document.getElementById("letras")

    ms.innerText = texto.toLocaleUpperCase()
    mn.innerText = texto.toLocaleLowerCase()
    letras.innerText = texto.length
    // length conta quantas letras tem
    let texto2 = document.getElementById("texto")
    texto2.value = ""
// apaga o que esta escrito no input
}
//-----------------------------------------------
function parte(){
    let palavra = document.getElementById("palavra").value
     let resultado = document.getElementById("resultado")
                   // slice(inicio,fim)
    let parte = palavra.slice(0,3)
    resultado.innerText = parte


    let final = document.getElementById("final")
    let letra = texto.length
    // S E N A I 
    // 0 1 2 3 4    
    // LENGTH = 5
    final.innerText = palavra[palavra.length-1]   
}

/* Crie dois inputs cada um pedindo uma palavra
para o usuário, crie um botao "juntar" que mostra
as duas palavras juntas em um p */
function juntar(){
    let palavra1 = document.getElementById("palavra1").value
    let palavra2 = document.getElementById("palavra2").value
    let juntas = document.getElementById("juntas")
    juntas.innerText = palavra1 +" " + palavra2
}
