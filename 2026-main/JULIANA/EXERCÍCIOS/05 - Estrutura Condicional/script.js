// Estrutura Condicional 

let nota = 5
if(nota >= 5) {
console.log("Aprovado")
} else {
console.log("Reprovado")

}

console.log("-------------------------")
let idade = Number(prompt("Qual sua idade?"))
if (idade>=18) {
    console.log("Pode tirar a habilitação")
}else{
    console.log("Idade insuficiente")
}

console.log("-------------------------")

let salario = Number (prompt("Qual seu salário?"))
let anos = Number(prompt ("Voce trabalha na empresa a quantos anos?"))

if(salario <= 3000 && anos >= 2) { //&& e = tudo tem que ser verdade
console.log("Você terá um aumento")
} else {
console.log("Ainda não")

}

console.log("-------------------------")
let chuva = true
if(chuva) {
    console.log("Leva guarda-chuva")
} else{
    console.log("Não precisa levar guarda-chuva")
}

console.log("-------------------------")
/*Peça dois números para o usuário e veja se o primeiro
é menor que o segundo, se sim, mostre "o primeiro é
menor", senão, mostre "o segundo é menor ou eles são
iguais*/

let numero = Number (prompt("Informe o primeiro número"))

let numero2 = Number (prompt("Informe o segundo número"))
if(numero < numero2) {
    console.log("O primeiro é menor")
} else{
    console.log("O segundo é menor ou eles são iguais")
}
console.log("-------------------------")

/* Peça um número para o usuário e diga se o número é impar ou par */

let n1 = Number (prompt("Informe o número"))
let aux = n1 % 2
if(aux == 0) { // numero % 2 == 0
    console.log("É par")
} else{
    console.log("É ímpar")
}
console.log("-------------------------")

/* Uma loja da descontos para clientes com base o valor da compra, peça o valor da compra, se ele for maior ou igual a R$250, de R$50 de desconto, e mostre o novo valor que sera pago, senao, mostre apenas "sem desconto"*/

let n2 = Number (prompt("Informe o valor da compra"))
if(n2 >= 250) { 
    let valorNovo = valor - 50
    console.log("Você deverá pagar: ", valorNovo)
} else{
    console.log("Sem desconto")
}
console.log("-------------------------")