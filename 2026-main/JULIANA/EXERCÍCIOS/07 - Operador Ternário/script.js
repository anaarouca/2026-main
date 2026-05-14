// Operador Ternário
let idade = 18
let situacao
if (idade>=18) {
    situacao = "Maior de idade"
} else {
    situacao = "Menor de idade"
}
console.log(situacao)
console.log("---------------------------")
let idade2 = 18
let situacao2 = idade2 >= 18? "Maior de idade" : "Menor de idade"

console.log(situacao2)
console.log("---------------------------")

let nota = Number(prompt("Qual sua nota?"))
let resultado = nota>= 7 ? "Aprovado" : "Reprovado"
console.log(resultado)

console.log("---------------------------")
let acesso = prompt("Qual seu acesso?")
let entrada = acesso == "admin" ? "Acesso total" : acesso == "prof" ? "Pode lançar notas" : "Apenas leitura"
console.log(entrada)
console.log("---------------------------")

/* Peça uma temperatura para o usuário, se ela for maior ou igual a 30, mostre "Está Calor", senão, "Não está Calor" */
let temp = Number(prompt("Qual a temperatura?"))
let clima = temp >= 30 ? "Está calor" : "Não está calor"
console.log(clima)


console.log("---------------------------")
/* Peça um número para o usuário e diga se ele é
positivo, negativo ou se é zero */

let num1 = Number(prompt("Informe o número"))
let num2 = num1 > 0 ? "Positivo" : num1 < 0 ? "Negativo" : "Zero"
console.log(num2)

/* Peça uma média para o usuário e classifique:
- Excelente, para média maior ou igual a 9
- Bom, para média maior ou igual a 7
- Regular, para média maior ou igual a 5
- Reprovado, caso contrário */

let nota2 = Number(prompt("Qual a sua média?"))
let media = nota2 >= 9 ? "Excelente" : nota2 >= 7 ? "Bom" : nota2 >= 5 ? "Regular" : "Reprovado"
console.log(media)