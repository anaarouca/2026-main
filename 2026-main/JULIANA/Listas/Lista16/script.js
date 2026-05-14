console.log("-------------------------")
console.log("1-")
/* 1 */
let dobro = (numero8) => { 
    return numero8 * 2
}
let numero8 = Number(prompt("1- Informe o número"))
console.log(dobro(numero8))


console.log("-------------------------")
console.log("2-")
/* 2 */
let somar = (numero6, numero7) => { 
    return numero6 + numero7
}
let numero6 = Number(prompt("2- Informe o primeiro número"))
let numero7 = Number(prompt("Informe o segundo número"))
console.log(somar(numero6,numero7))


console.log("-------------------------")
console.log("3-")
/* 3 */
let quadrado = (numero5) => {
        return numero5 * numero5
}
let numero5 = Number(prompt("3- Informe o  número"))
console.log(quadrado(numero5))


console.log("-------------------------")
console.log("4-")
/* 4 */
let sucessor = (numero4) => {
        return numero4 + 1
}
let numero4 = Number(prompt("4- Informe o  número"))
console.log(sucessor(numero4))


console.log("-------------------------")
console.log("5-")
/* 5 */
let maiorNumero = (numero2, numero3) => {
    if(numero2 >  numero3){
        return "O primeiro número é maior"
    } else {
        return "O segundo número é maior"
    }
}
let numero2 = Number(prompt("5- Informe o primeiro número"))
let numero3 = Number(prompt("Informe o segundo número"))
console.log(maiorNumero(numero2, numero3))


console.log("-------------------------")
console.log("6-")
/* 6 */
let parOuImpar = (num) =>{
    let aux = num % 2
    if (aux == 0) { // num % 2 == 0
        return "Par"
    } else{
        return "Ímpar"
    }
}
let num = Number(prompt("6- Qual o número?"))
console.log(parOuImpar(num))

console.log("-------------------------")
console.log("7-")
/* 7 */
let verificarNumero = (numero) => {
    if(numero <  0){
        return "Negativo"
    }else if (numero >  0){
        return "Positivo"
    } else {
        return "Zero"
    }
}
let numero = Number(prompt("7- Qual o número?"))
console.log(verificarNumero(numero))

console.log("-------------------------")
console.log("8-")
/* 8 */
let media  = (num2, num3, num4) =>{
    let med = (num2 + num3 + num4) / 3 
        return med
}
let num2 = Number(prompt("8- Informe a primeira nota"))
let num3 = Number(prompt("Informe a segunda nota"))
let num4 = Number(prompt("Informe a terceira nota"))
console.log(media (num2, num3,num4))

console.log("-------------------------")
console.log("9-")
/* 9 */
let calcularDesconto = (precoProduto) =>{
    let calculoDesconto = precoProduto -(precoProduto * 0.2)
        return calculoDesconto
}
let precoProduto = Number(prompt("9- Informe o preço do produto"))
console.log(calcularDesconto(precoProduto))

console.log("-------------------------")
console.log("10-")
/* 10 */
let verificarAprovacao = (nota1, nota2) => {
    let media = (nota1 + nota2) / 2
    if(media <=  7){
        return "Aprovado"
    }else if (media >= 5 && media < 7){
        return "Recuperação"
    } else {
        return "Reprovado"
    }
}
let nota1 = Number(prompt("10- Informe a primeira nota"))
let nota2 = Number(prompt("Informe a segunda nota"))
console.log(verificarAprovacao(nota1, nota2))