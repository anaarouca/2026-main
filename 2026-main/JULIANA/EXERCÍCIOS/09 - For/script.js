// Laço de Repetição - For
console.log("Bom dia")
console.log("Bom dia")
console.log("Bom dia")
console.log("Bom dia")

let contador= 0

for(let i = 0; i < 4; i++) {
    console.log("Bom dia usando For")
}
console.log("--------------------------------")
for(let i =1; i < 5; i++)
    console.log(i)

console.log("--------------------------------")

// contagem regressiva
for(let i = 10; i >= 1; i -- ) { // --  -1
    console.log(i)
}


console.log("--------------------------------")
//peça 5 valores para o usuário e verifique se é maior que 10 ou não
for(let i = 1; i <= 5; i++) {
let numero = Number(prompt("Informe um numero"))
if (numero > 10) {
      console.log("é maior que 10")
   } else {
      console.log("não é maior que 10")

   }
}

console.log("--------------------------------")
let soma = 0
for(let i = 1; i <= 3; i++) {
let numero = Number(prompt("Digite um número") )
soma = soma + numero
console.log(soma)
}
console.log("O resultado final é: ", soma)



console.log("--------------------------------")
/* Peça um número para o usuário e mostre a tabuada dele*/
let valor = Number(prompt("1 - Digite um número") )
for(let i = 1; i <= 10; i++) {
let resultado = valor * i
console.log(valor , " x ", i , " = ", resultado) // 5 x 1 = 5
}

console.log("--------------------------------")

/* Em um passeio escolar, um grupo de cinco alunos são organizados de acordo com o numero que receberam. Se o numero for maior ou igual a 0,diga "Grupo A", senao, diga "Grupo B"*/

for(let i =1; i<= 5; i++) {
let numero = Number(prompt("2 - Digite o número que recebeu"))

if (numero >= 10) {
      console.log("Grupo A")
   } else {
      console.log("Grupo B")

   }

}
