console.log("-------------------------")
console.log("1-")
/* 1 */
function soma(num1) {
    let dobro = num1 *2
    console.log("O dobro é:",dobro)
}
let num1 = Number(prompt("1- Informe um número"))
soma(num1)

console.log("-------------------------")
console.log("2-")
/* 2 */
function calcularArea (base,altura) {
    let area = base * altura
    console.log("A área do retângulo é:",area)
}
let base = Number(prompt("2- Informe a base"))
let altura = Number(prompt("Informe a altura"))
calcularArea(base,altura)

console.log("-------------------------")
console.log("3-")
/* 3 */
function converterParaFahrenheit(celsius) {
    let temp = celsius * 1.8 + 32
    console.log("A tempetura em Fahrenheit é:",temp)
}
let celsius = Number(prompt("3- Informe a temperatura em Celsius"))
converterParaFahrenheit(celsius)

console.log("-------------------------")
console.log("4-")
/* 4 */
function verificarNota (nota) {
    if(nota >= 7) {
       console.log("Aprovado")
    } else if (nota >= 5 && nota < 7) {
        console.log("Recuperação")
    }else{
        console.log("Reprovado")
    }

}
let nota = Number(prompt("4- Informe a nota"))
verificarNota (nota)

console.log("-------------------------")
console.log("5-")
/* 5 */
function verificarNumero(num4) {
    if(num4 > 0) {
       console.log("Positivo")
    } else if (num4 < 0) {
        console.log("Negativo")
    }else{
        console.log("Zero")
    }

}
let num4 = Number(prompt("5- Informe o número"))
verificarNumero(num4)

console.log("-------------------------")
console.log("6-")
/* 6 */
function contarPares(num5) {
  let aux = 0
do {
    console.log(aux)
    aux+=2
} while 
     (aux < num5)
    
}
let num5 = Number(prompt("6- Informe o número"))
contarPares(num5)

console.log("-------------------------")
console.log("7-")
/* 7 */
function somarIntervalo(num6, num7) {
    let soma = 0
    for (let i = num6; i <= num7; i++) {
        soma = soma + i
    }
    console.log("A soma do intervalo é:", soma)
}
let num6 = Number(prompt("7- Informe o primeiro número"))
let num7 = Number(prompt("Informe o segundo número"))
somarIntervalo(num6, num7)

console.log("-------------------------")
console.log("8-")
/* 8 */
function repetirNome(nome, num8) {
    let i = 1
    do {
        console.log(nome)
        i++
    } while (i <= num8)
}
let nome = prompt("8- Informe o nome")
let num8 = Number(prompt("Informe a quantidade"))
repetirNome(nome, num8)

console.log("-------------------------")
console.log("9-")
/* 9 */
function tabuada (num9) {
let numero = 1
while(numero <= 10){
    let tabuada = num9 * numero
 console.log(num9,"x" , numero , " = " , tabuada)
  numero++
    }
}
let num9 = Number(prompt("9- Informe número"))
tabuada(num9)

console.log("-------------------------")
console.log("10-")
/* 10 */
function contagemPersonalizada(num10) {
for (let i = num10; i >= 0; i--) {
 if (i % 2 != 0) {
 console.log(i)
  }
 }
}
let num10 = Number(prompt("10- Informe um número"))
contagemPersonalizada(num10)

console.log("-------------------------")
console.log("11-")
/* 11 */
function mediaAluno(nota4, nota5,nota6) {
let media = (nota4 + nota5 + nota6) / 3

if(media >= 7){
    console.log("Aprovado")
} else if (media >5 && media <7){
    console.log("Recuperação")
}else{
    console.log("Reprovado")
}

}
let nota4 = Number(prompt("11- Informe a primeira nota"))
let nota5 = Number(prompt("Informe a segunda nota"))
let nota6 = Number(prompt("Informe a terceira nota"))
mediaAluno(nota4, nota5,nota6)