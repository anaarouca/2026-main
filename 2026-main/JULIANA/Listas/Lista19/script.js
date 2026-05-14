// 1--------------------------------------------
function converter(){
    let texto = document.getElementById("texto").value
    let mn = document.getElementById("mn")
    let letras = document.getElementById("letras")
    mn.innerText = texto.toLocaleLowerCase()
}

// 2--------------------------------------------
function contarLetras(){
     let texto2 = document.getElementById("texto2").value
let quantidadeLetras = document.getElementById("quantidadeLetras")
quantidadeLetras.innerText = texto2.length
}

// 3----------------------------------------------
function parte(){
    let palavra = document.getElementById("palavra").value
    let final = document.getElementById("final")
    final.innerText = palavra[palavra.length-1]   
}

// 4---------------------------------------------
function quatroLetras(){
    let palavra2 = document.getElementById("palavra2").value
     let resultado2 = document.getElementById("resultado2")
    let quatroLetras = palavra2.slice(0,4)
    resultado2.innerText = quatroLetras
}

// 5--------------------------------------------
function ultimas(){
    let textoFinal = document.getElementById("textoFinal").value
    let ultimasLetras = document.getElementById("ultimasLetras")
    ultimasLetras.innerText = textoFinal[textoFinal.length-3] + textoFinal[textoFinal.length-2] + textoFinal[textoFinal.length-1]
}


// 6---------------------------------------------
function nomeCompleto(){
    let nome = document.getElementById("nome").value
    let sobrenome = document.getElementById("sobrenome").value
    let nomeCompleto = document.getElementById("nomeCompleto")
    juntos.innerText = nome +" " + sobrenome
}

// 7----------------------------------------------
function primeiraLetra(){
    let nome2 = document.getElementById("nome2").value
     let resultado3 = document.getElementById("resultado3")
    let primeiraLetra = nome2.slice(0,1)
    resultado3.innerText = "A primeira letra do seu nome é: " + primeiraLetra
}

// 8---------------------------------------------
function bemVindo(){
    let nome3 = document.getElementById("nome3").value
    let maiusculo = nome3.toLocaleUpperCase()
    mensagem.innerText = "Olá, " + maiusculo + "! Seja bem-vinda ao sistema."
}

// 9---------------------------------------------
function verificar(){
    let nome4 = document.getElementById("nome4").value
    if(nome4.length <= 5){
    contagem.innerText = "Nome curto"
    } else {
    contagem.innerText = "Nome longo"
    }
}