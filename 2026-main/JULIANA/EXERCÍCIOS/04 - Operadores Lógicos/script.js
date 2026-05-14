// 04 - Operadores Lógicos
// && - e - tudo tem que ser verdade
// || - ou - apenas uma coisa deve ser verdade 
// ! - não - inverte o resultado


let idade = 18
let convite = true
console.log(idade>= 18 && convite == true)

console.log("------------------------------")
let dia = "quinta"
console.log(dia == "sabado" || dia == "domingo")

console.log("------------------------------")
let valor = 20
console.log(valor >= 10 && valor <= 99)

console.log("------------------------------")
let bloqueado = false
console.log(!bloqueado)

if(!bloqueado) {
    console.log("não pode aceitar")
}

console.log("----------------")
let numero = Number(prompt("Informe um número"))
console.log(!(numero >= 100))

/* Para fazer login em um computador do Senai, o usuário
deve ser "TDS2" e a senha "senai2026". Faça o código que
pergunte as credenciais para o usuário e mostre se ele
consegue ou nao acessar */
let usuario = prompt("Informe o usuario")
let senha = prompt("Informe a senha")
console.log(usuario == "TDS2" && senha == "senai2026")


/* Para ser aprovado o aluno precisa ter nota maior ou
igual a 50 e ter a frequência maior ou igual a 75.
Peça as informações para o usuário e veja se ele será
aprovado */

let nota = Number(prompt("Informe a nota:"))
let frequencia = Number(prompt("Informe a frequencia:"))

console.log(nota >= 50 && frequencia >= 75)

/* Para assistir um filme de terror no cinema, é preciso
ter idade maior ou igual a 14 ou estar acompanhado do
responsável */

let idade2 = Number(prompt("Qual a idade?"))
let responsavel = prompt("Está acompanhado de um responsável?")
console.log(idade2 >= 14 || responsavel == "sim")


/*Para fazer academia do Sesi você deve ser aluno do
sesi ou do senai e pagar a mensalidade*/

let escola = prompt("De qual escola você é?")
let mensalidade = prompt("Você paga mensalidade?")
console.log((escola == "sesi" || escola == "senai") && mensalidade == "sim")

/* Pergunte para o usuário se ele tem internet (true/false) e mostre */

let internet = prompt("Você tem internet?")
// console.log(internet == true) - dessa forma
console.log(internet) // - ou dessa

