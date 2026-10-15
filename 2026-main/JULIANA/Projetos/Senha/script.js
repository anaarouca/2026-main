// console.log(Math.random())
// let letras = "abcdefghijklmnopqrstuvwxyz"
// let aleatorio = Math.floor(Math.random() * letras.length)
// console.log(letras[aleatorio]) // uma letra aleatória


// ----------------------------------------------------------------
let maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let minusculas = "abcdefghijklmnopqrstuvwxyz"
let numeros = "0123456789"
let simbolos = "!@#$%()&*_"

function gerarSenha(tamanho, banco) {
    let senha = ""
    for (let i = 0; i < tamanho; i++) {
        let aleatorio = Math.floor(Math.random() * banco.length)
        senha += banco[aleatorio]
    }
    return senha
}
console.log(gerarSenha(12, maiusculas + minusculas + numeros))

let tamanho = document.getElementById("tamanho")
let gerar = document.getElementById("gerar")
let resultado = document.getElementById("resultado")

gerar.addEventListener("click", function () {
    let tamanhoInput = Number(tamanho.value)
    let banco = montarBanco()
    if (banco == "") {
        alert("Selecione pelo menos um tipo de caractere")
        return
    }
    let senha = gerarSenha(tamanhoInput, banco)
    resultado.innerText = senha
})

let checkMaiusculas = document.getElementById("maiusculas")
let checkMinusculas = document.getElementById("minusculas")
let checkNumeros = document.getElementById("numeros")
let checkSimbolos = document.getElementById("simbolos")

function montarBanco() {
    let banco = ""
    if (checkMaiusculas.checked) {
        banco += maiusculas
    }
    if (checkMinusculas.checked) {
        banco += minusculas
    }
    if (checkNumeros.checked) {
        banco += numeros
    }
    if (checkSimbolos.checked) {
        banco += simbolos
    }
    return banco
}

let copiar = document.getElementById("copiar")
copiar.addEventListener("click", async function () {
    let senhaAtual = resultado.textContent
    if(senhaAtual == "") {
        alert("Nenhuma senha gerada")
        return
    }
    await navigator.clipboard.writeText(senhaAtual)
    //    navegador.copie.oTextoEscrito(senhaAtual)
    copiar.innerText = "Copiado!"
    setTimeout(function () {
        copiar.innerText = "Copiar"
    }, 2000)
})