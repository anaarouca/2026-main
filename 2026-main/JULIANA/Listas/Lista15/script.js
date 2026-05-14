console.log("-------------------------")
console.log("1-")
/* 1 */
let triplo = function(num1) {
return "O triplo desse número é: " + num1 * 3
}
let num1 = Number(prompt("1- Informe um numero"))
console.log(triplo(num1))

console.log("-------------------------")
console.log("2-")
/* 2 */
let multiplicar = function(num2, num3) {
return num2 * num3
}
let num2 = Number(prompt("2- Informe um número"))
let num3 = Number(prompt("Informe um número"))
console.log(multiplicar(num2,num3))

console.log("-------------------------")
console.log("3-")
/* 3 */
let metade  = function(num4) {
return num4 / 2
}
let num4 = Number(prompt("3- Informe um número"))
console.log(metade (num4))

console.log("-------------------------")
console.log("4-")
/* 4 */
let sucessor = function(num5) {
let antecessor = num5 + 1
return antecessor
}
let num5 = Number(prompt("4- Informe um número"))
console.log(sucessor(num5))

console.log("-------------------------")
console.log("5-")
/* 5 */
let maiorNumero  = function(num6,num7) {
    if(num6 > num7){
        return "O primeiro número é maior"
    }else{
        return "O segundo número é maior"
    }
}
let num6 = Number(prompt("5- Informe um número"))
let num7 = Number(prompt("Informe um número"))
console.log(maiorNumero(num6,num7))

console.log("-------------------------")
console.log("6-")
/* 6 */
let verificarNumero  = function(num8) {
    if(num8 > 0){
        return "Positivo"
    }else if(num8 < 0){
        return "Negativo"
    }else{
        return "Zero"
    }
}
let num8 = Number(prompt("6- Informe o número") )
console.log(verificarNumero(num8))

console.log("-------------------------")
console.log("7-")
/* 7 */
let parImpar = function(numero) {
    if(numero % 2 == 0){
        return "Par"
    }else{
        return "Ímpar"
    }
}
let numero = Number(prompt("7- Informe um número"))
console.log(parImpar(numero))

console.log("-------------------------")
console.log("8-")
/* 8 */
let media = function(n1, n2, n3) {
    return (n1 + n2 + n3) / 3
}
let n1 = Number(prompt("8- Informe o primeiro número"))
let n2 = Number(prompt("Informe o segundo número"))
let n3 = Number(prompt("Informe o terceiro número"))
console.log(media(n1, n2, n3))


console.log("-------------------------")
console.log("9-")
/* 9 */
let calcularDesconto  = function(num9) {
return num9 - (num9 * 0.15)
}
let num9 = Number(prompt("9- Informe o valor") )
console.log(calcularDesconto (num9))

console.log("-------------------------")
console.log("10-")
/* 10 */
let verificarAprovacao  = function(nota1, nota2) {
    let media = (nota1 + nota2) / 2
    if(media >= 7){
        return "Aprovado"
    }else if(media >= 5 && media < 7){
        return "Recuperação"
    }else{
        return "Reprovado"
    }
}
let nota1 = Number(prompt("10- Informe a primeira nota"))
let nota2 = Number(prompt("Informe a segunda nota"))
console.log(verificarAprovacao (nota1, nota2))