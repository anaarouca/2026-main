// Operadores Aritméticos

let numero1 = 5
let numero2 = 7
let soma = numero1 + numero2
let subtracao = numero1 - numero2
let divisao = numero1 / numero2
let multiplicacao = numero1 * numero2
let modulo = numero1 % numero2 // resto da divisão

console.log("A soma é: " + soma)
console.log("A subtração é: " + subtracao)
console.log("A multiplicação é: " + multiplicacao)
console.log("A divisão é: " , divisao)
console.log (`O resto é: ${modulo}`) // concatenação igual a virgula e +

// incremento e decremento
let contador = 10
contador++ // +1
console.log(contador)
contador-- //= -1
console.log(contador)
contador +=5 // 15
contador -=2 // 13

//-----------------------

let salario = Number(prompt("Qual o seu salário?"))  //garantir que o que o usuario digitar vai ser um numero (nao da pra fazer conta com texto)
let total = salario + 100
console.log(total)


/*um grupo de amigos foi a um restaurante, no final eles decidiram dividir a conta. Faça um programa que peça a quantidade de amigos e o valor da conta e mostre quanto cada um deve pagar*/
console.log("-----------------------------")
let pessoas = Number(prompt("Qual a quantidade de pessoas?"))
let conta = Number(prompt("Qual o total de conta?"))
let pagar = conta / pessoas
console.log("O total a ser pago por cada pessoa é:",pagar)

/*Um grupo de três amigos quer juntos comprar uma
pizza, cada um irá contribuir com uma quantia de
valor. Faça um programa que receba quanto cada
amigo irá contribuir e mostre quanto eles tem
juntos*/
console.log("-----------------------------")
let amigo1 = Number(prompt("Amigo 1:"))
let amigo2 = Number(prompt("Amigo 2:"))
let amigo3 = Number(prompt("Amigo 3:"))
let totalSomado = amigo1 + amigo2 + amigo3
console.log("O total para a compra da pizza é:",totalSomado)


/* Uma loja de doces vende produtos em grande quantidade.
Faça um programa que peca a quantidade do produto
comprado, o valor unitário e mostre quanto o cliente vai
pagar.*/
console.log("-----------------------------")
let quantidade = Number(prompt("Quantidade de produtos:"))
let valorUnitario = Number(prompt("Valor unitário:"))
let precoFinal = quantidade * valorUnitario
console.log("O total a ser pago é: ",precoFinal)