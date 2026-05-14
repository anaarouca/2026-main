console.log("-------------------------")
console.log("1-")
/* 1 */
function dobro(numero) {
let aux = numero * 2
return aux 
}
let numero = Number(prompt("1- Escolha um número") )
let mostrar = dobro(numero)
console.log("O dobro é:",mostrar)

console.log("-------------------------")
console.log("2-")
/* 2 */
function somar (num5, num6) {
let somar3 = num5 + num6
return somar3
}
let num5 = Number(prompt("2- Escolha o primeiro número"))
let num6 = Number(prompt("Escolha o segundo número"))
let resultado = somar(num5, num6)
console.log("A soma desses números é:",resultado)

console.log("-------------------------")
console.log("3-")
/* 3 */
function areaQuadrado (lado1,lado2) {
let area = lado1 * lado2 
return area
}
let lado1 = Number(prompt("3- Informe o primeiro lado"))
let lado2 = Number(prompt("Informe o segundo lado"))
let aux2 = areaQuadrado (lado1,lado2)
console.log("A área do quadrado é:",aux2)

console.log("-------------------------")
console.log("4-")
/* 4 */
function antecessor (num11) {
let antecessor = num11 - 1 
return antecessor
}
let num11 = Number(prompt("4- Informe o número"))
let aux3 = antecessor(num11)
console.log("O antecessor do número é:",aux3)

console.log("-------------------------")
console.log("5-")
/* 5 */
function tamanhoTexto (palavra1, palavra2) {
    if(palavra1.length > palavra2.length) {
     return "A primeira palavra é maior"
  } else {
     return "A segunda palavra é maior"
   }
}
let palavra1 = prompt("5- Diga uma palavra")
let palavra2 = prompt("Diga outra palavra")
let letras = tamanhoTexto (palavra1, palavra2)
console.log(letras)

console.log("-------------------------")
console.log("6-")
/* 6 */
function maiorNumero(num12, num13) {
    if(num12 > num13) {
     return "O primeiro número é maior"
  } else {
     return "O segundo número é maior"
   }
}
let num12 = prompt("6- Diga um número")
let num13 = prompt("Diga outro número")
let qualMaior = maiorNumero(num12, num13)
console.log(qualMaior)

console.log("-------------------------")
console.log("7-")
/* 7 */
function verificarIdade(idade) {
    if(idade >= 18) {
     return "Maior de idade"
  } else {
     return "Menor de idade"
   }
}
let idade = prompt("7- Diga a idade")
let retorno = verificarIdade(idade)
console.log(retorno)

console.log("-------------------------")
console.log("8-")
/* 8 */
function parOuImpar(num14) {
   let aux4 = num14 % 2
    if(aux4 == 0) {
     return "O número é par"
  } else {
     return "O número é ímpar"
   }
}
let num14 = prompt("8- Diga o número")
let revisao = parOuImpar(num14)
console.log(revisao)

console.log("-------------------------")
console.log("9-")
/* 9 */
function media(nota1, nota2,nota3) {
let media = (nota1 + nota2 + nota3) / 3
    return "A média das notas é: "+ media
  
}
let nota1 = Number(prompt("9- Qual a 1 nota?"))
let nota2 = Number(prompt("Qual a 2 nota?"))
let nota3 = Number(prompt("Qual a 3 nota?"))
let situacao = media(nota1, nota2, nota3)
console.log(situacao)

console.log("-------------------------")
console.log("10-")
/* 10 */
function calcularDesconto(preco){
    
 return "O produto com 10% de desconto é: "+ (preco - (preco * 0.1))
}
let preco = Number(prompt("10- Qual o preço do produto?"))
let porcentagem = calcularDesconto(preco)
console.log(porcentagem)