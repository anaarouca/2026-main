console.log("-------------------------")
console.log("1-")
console.log("-------------------------")
/* 1 */
for(let i =1; i <= 30; i++)
    console.log(i)


console.log("-------------------------")
console.log("2-")

/* 2 */
for(let i = 30; i >= 1; i -- ) { 
    console.log(i)
}

console.log("-------------------------")
console.log("3-")
/* 3 */
for(let i = 1; i <= 5; i++) {
let numero = Number(prompt("3- Informe um número"))
if (numero >= 50) {
      console.log("ACIMA DA MÉDIA")
   } else {
      console.log("ABAIXO DA MÉDIA")

   }
}


console.log("-------------------------")
console.log("4-")
/* 4 */
let valor = Number(prompt("4 - Digite um número") )
for(let i = 1; i <= 10; i++) {
let resultado = valor * i
console.log(valor , " x ", i , " = ", resultado) // 5 x 1 = 5
}


console.log("-------------------------")
console.log("5-")
/* 5 */
let patinhos = Number(prompt("5- Digite o número de patinhos"))

for(let i = patinhos; i >= 1; i--) {

    console.log(i + " patinhos foram passear")
    console.log("Além das montanhas para brincar")
    console.log("A mamãe gritou:")
    console.log("Quá, quá, quá, quá")
    console.log("Mas só " + (i - 1) + " patinhos voltaram de lá.")
    
    console.log("------------------")
}


console.log("-------------------------")
console.log("6-")
/* 6 */
for(let i = 1; i <= 10; i++) {
let idade = Number(prompt("6- Informe a idade"))
if (idade >= 18) {
      console.log("Maior de idade")
   } else {
      console.log("Menor de idade")

   }
}

console.log("-------------------------")
console.log("7-")
/* 7 */
for(let i = 1; i <= 5; i++) {

    let voto = Number(prompt("7- Digite seu voto"))

    if(voto >= 1 && voto <= 4) {
        console.log("Voto para candidato")
    } 
    else if(voto == 5) {
        console.log("Voto nulo")
    } 
    else if(voto == 6) {
        console.log("Voto em branco")
    } 
    else {
        console.log("Código inválido")
    }

}

console.log("-------------------------")
console.log("8-")
/* 8 */
let soma = 0
for(let i = 1; i <= 5; i++) {
let numero = Number(prompt("8- Digite um número") )
soma = soma + numero
console.log(soma)
}
console.log("O resultado final é: ", soma)


console.log("-------------------------")
console.log("9-")
/* 9 */
for(let i = 1; i <= 50; i++) {

    if(i % 2 == 0) {
        console.log(i)
    }

}


console.log("-------------------------")
console.log("10-")
/* 10 */
let inicio = Number(prompt("10- Digite o número inicial"))
let fim = Number(prompt("Digite o número final"))

for(let i = inicio; i <= fim; i++) {

    console.log(i)

}