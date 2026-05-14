console.log("-------------------------")
console.log("1-")
/* 1 */
let idade = Number(prompt("1- Informe a idade"))
let situacao = idade >= 18? "Maior de idade" : "Menor de idade"

console.log(situacao)

console.log("-------------------------")
console.log("2-")
/* 2 */
let num = Number(prompt("2- Informe o número"))
let sit = num % 2
let situacao2 = sit == 0? "O número é par" : "O número é ímpar"

console.log(situacao2)

console.log("-------------------------")
console.log("3-")
/* 3 */
let nota = Number(prompt("3- Informe a nota"))
let media = nota >= 6? "Aprovado" : "Reprovado"
console.log(media)

console.log("-------------------------")
console.log("4-")
/* 4 */
let saldo = Number(prompt("4- Informe o saldo"))
let situacao3 = saldo > 0? "Saldo positivo" : "Saldo negativo"
console.log(situacao3)


console.log("-------------------------")
console.log("5-")
/* 5 */
let compra = Number(prompt("5- Informe o valor da compra"))
let desconto = compra >= 100? "Você vai receber 10% de desconto" : "Valor normal"
console.log(desconto)

console.log("-------------------------")
console.log("6-")
/* 6 */
let idade2 = Number(prompt("6- Informe a idade"))
let entrada = idade2 >= 18? "Entrada permitida" : "Entrada proibida"
console.log(entrada)

console.log("-------------------------")
console.log("7-")
/* 7 */
let usuario = prompt("7- Informe o usuário")
let usuario2 = usuario == "admin"? "Acesso liberado" : "Acesso negado"
console.log(usuario2)

console.log("-------------------------")
console.log("8-")
/* 8 */
let temp = Number(prompt("8- Qual a temperatura?"))
let clima = temp > 30 ? "Está quente" : "Temperatura normal"
console.log(clima)

console.log("-------------------------")
console.log("9-")
/* 9 */
let num1 = Number(prompt("9- Informe o número"))
let num2 = num1 > 0 ? "Positivo" : "Número negativo ou zero"
console.log(num2)

console.log("-------------------------")
console.log("10-")
/* 10 */
let idade3 = Number(prompt("10- Qual a sua idade?"))
let situacao4 = idade3 < 12 ? "Criança" : idade3 < 18 ? "Adolescente" : idade3 < 60 ? "Adulto" : "Idoso"
console.log(situacao4)

console.log("-------------------------")
console.log("11-")
/* 11 */
let vel = Number(prompt("11- Informe a velocidade"))
let multa = vel > 80? "Multado" : "Dentro do limite"
console.log(multa)

console.log("-------------------------")
console.log("12-")
/* 12 */
let valor = Number(prompt("12- Informe o valor"))
let limite = Number(prompt("Informe o limite do cartão"))
let situacao5 = valor <= limite? "Compra aprovada" : "Compra recusada"
console.log(situacao5)

console.log("-------------------------")
console.log("13-")
/* 13 */
let pontuacao = Number(prompt("13- Informe a pontuação"))
let nivel = pontuacao < 100 ? "Iniciante" : pontuacao < 500 ? "Intermediário" : pontuacao < 1000 ? "Avançado" : "Mestre"
console.log(nivel)

