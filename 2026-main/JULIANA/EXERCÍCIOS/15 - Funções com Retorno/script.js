//Declarativa
function somar(){
    let num1 = 2
    let num2 = 5
    let soma = num1 + num2
    console.log(soma)
    
}
somar()
//com parametro
console.log("----------------------------")
function soma2(num3, num4){
    let som2 = num3 + num4
    console.log(som2)
}
num3 = 2
num4 = 5
soma2(num3,num4)

//com retorno
function soma3(num5, num6) {
let somar3 = num5 + num6
return somar3
}
let num5 = 2
let num6 = 5
let resultado = soma3(num5, num6)
console.log(resultado)
console.log("----------------------------")
console.log("----------------------------")

//Dobro
function dobro(numero) {
let aux = numero * 2
return aux //console. log(aux)
}
// let numero = Number(prompt("Escolha um número") )
// let mostrar = dobro(numero)
// console.log(mostrar)

//situação do aluno 
function aprovacao(nota1, nota2) {
let media = (nota1 + nota2) / 2
if(media >= 7) {
    return "Aprovado"
 } else { 
    return "Reprovado"
   }
}
let nota1 = Number(prompt("Qual a 1 nota"))
let nota2 = Number(prompt("Qual a 2 nota"))
let situacao = aprovacao(nota1, nota2)
console.log(situacao)

//Maior número
function maior(n1, n2){
    if(n1 > n2) {
return n1 + " é maior que " + n2
 } else if (n2 > n1) {
return n2 + " é maior que " + n1
 } else {
return "São iguais"
 }
}
// let n1 = Number (prompt("Informe o 1º número") )
// let n2 = Number(prompt("Informe o 2º numero") )
// let auxiliar = maior(n1,n2)
// console.log(auxiliar)

//Peça um número para o usuário e mostre o triplo dele
function numero(num2) {
let triplo = num2 * 3 
return triplo
}
let num2 = Number(prompt("Qual o número?"))
let aux1 = numero(num2)
console.log(aux1)

//Uma escola faz uma competição de quem consegue pensar na maior palavra já criada. Faça uma função que pede uma palavra para o usuário, conte quantas letras ela tem, se tiver mais de 10, diga "uau", senao, diga "tem palavras maiores"
 function contar(palavra) {
    if(palavra.length > 10) {
     return "uau"
  } else {
     return "tem palavras maiores"
   }
}
let palavra = prompt("Diga uma palavra")
let letras = contar(palavra)
console. log(letras)
 