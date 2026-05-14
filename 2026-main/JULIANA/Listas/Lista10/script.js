console.log("-------------------------")
console.log("1-")
/* 1 */
let num2 = 1
do{
    console.log(num2)
    num2++
} while (num2 <= 20)

    console.log("-------------------------")
console.log("2-")
/* 2 */
let resposta
do {
    resposta = prompt("2- Deseja continuar? (s/n)")
} while (resposta == "s")
console.log("Programa encerrado")

console.log("-------------------------")
console.log("3-")
/* 3 */
let contador = 1
let final = Number(prompt("3- Digite o número final da sequência:"))
do {
    console.log(contador)
    contador++
} while (contador <= final)


console.log("-------------------------")
console.log("4-")
/* 4 */
let num5 = 1
do {
    console.log(num5)
    num5+=2
} while 
     (num5 <= 31)

console.log("-------------------------")
console.log("5-")
/* 5 */
let i = 1

do {
    let numero = Number(prompt("5- Digite um número:"))

    if (numero > 0) {
        console.log("NÚMERO POSITIVO")
    } else if (numero < 0) {
        console.log("NÚMERO NEGATIVO")
    } else {
        console.log("O NÚMERO É ZERO")
    }

    i++
} while (i <= 5)


console.log("-------------------------")
console.log("6-")
/* 6 */
let resposta6;

do {
let n1 = Number(prompt("6- Digite o primeiro número:"));
let n2 = Number(prompt("Digite o segundo número:"));

console.log("Soma:", n1 + n2);

resposta6 = prompt("Deseja fazer outra conta? (s/n)");

} while (resposta6 == "s");

console.log("Programa encerrado.");


console.log("-------------------------")
console.log("7-")
/* 7 */
let c7 = 1;

do {

console.log("Estudando JavaScript");
c7++;
} while (c7 <= 10);

console.log("-------------------------")
console.log("8-")
/* 8 */
let numero8;

do {
numero8 = Number(prompt("8- Digite um número positivo:"));
} while (numero8 <= 0);

console.log("Valor válido!");

console.log("-------------------------")
console.log("9-")
/* 9 */
let senha;

do {
senha = prompt("9- Digite a senha:");
} while (senha != "senai2026");

console.log("Acesso liberado");

console.log("-------------------------")
console.log("10-")
/* 10 */
let total = 0;
let numero10;
let continuar;

do {
numero10 = Number(prompt("10- Digite um número inteiro:"));
total += numero10;

continuar = prompt("Deseja continuar? (s/n)");

} while (continuar == "s");

console.log("Total da soma:", total);


