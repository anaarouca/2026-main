console.log("1-")
/* 1 */
let idade = Number (prompt("1- Informe idade"))
if(idade >= 18) { 
    console.log("Você é maior de idade")
} else{
    console.log("Você é menor de idade")
}

console.log("-------------------------")
console.log("2-")
/* 2 */
let numero3 = Number(prompt("2- Informe um número"))
let aux = numero3 % 2
if (aux == 0) {
    console.log("É par")
}else {
    console.log("É ímpar")

}

console.log("-------------------------")
console.log("3-")
/* 3 */
let nota2 = Number(prompt("3- Informe a nota"))
if(nota2 >= 7) {
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}


console.log("-------------------------")
console.log("4-")
/*4 */
let idade2 = Number(prompt("4- Informe a idade:"))
if (idade2 >= 18) {
    console.log ("Entrada permitida")
} else{
    console.log("Entrada proibida")
}


console.log("-------------------------")
console.log("5-")
/*5 */
let senha = Number(prompt("5- Digite a senha"))
if (senha == "1234") {
    console.log ("Senha correta")
} else{
    console.log("Senha incorreta")
}


console.log("-------------------------")
console.log("6-")
/* 6 */
let temp = Number(prompt("6- Informe a temperatura"))
 if (temp >30) {
    console.log ("Está quente")
 }else {
 console.log("Está frio")
 }

console.log("-------------------------")
console.log("7-")
/* 7 */
let num = Number(prompt("7- Informe um número"))
if (num >0) {
    console.log("Número positivo")
} else{
    console.log("Número negativo")
}


console.log("-----------------------------")
console.log("8-")
/* 8 */
let saldo = Number (prompt("8 - Informe o valor do saldo"))
let saque = Number (prompt("Informe o valor do saque"))
if(saldo >= saque) { 
    console.log("Saque realizado")
} else{
    console.log("Saldo insuficiente")
}
console.log("-------------------------")


console.log("9-")
/* 9 */
let valorCompra = Number (prompt("9- Informe o valor da compra"))
if(valorCompra >= 200) { 
    console.log("Desconto aplicado")
} else{
    console.log("Sem desconto")
}
console.log("-------------------------")

console.log("10")
/* 10 */
let n1 = Number (prompt("10- Informe o primeiro número"))
let n2 = Number (prompt("Informe o segundo número"))
if(n1 > n2) { 
    console.log("O primeiro número é maior")
} else{
    console.log("O segundo número é maior")
}
console.log("-------------------------")

console.log("11-")
/* 11 */
let nomeUsuario =  prompt("11- Informe o nome do usuário:")
let usuario = "admin"
if(nomeUsuario == usuario) { 
    console.log("Acesso permitido")
} else{
    console.log("Acesso negado")
}
console.log("-------------------------")

console.log("12")
/* 12 */
let nota = Number (prompt("12- Informe a nota"))
if(nota >= 9) { 
    console.log("Excelente")
} else{
    console.log("Pode melhorar")
}
console.log("-------------------------")

console.log("13")
/* 13 */
let hora = Number (prompt("13- Informe a hora (0 a 23)"))
if(hora >=8 && hora <= 18) { 
    console.log("Horário de funcionamento")
} else{
    console.log("Fora do horário")
}
console.log("-------------------------")

console.log("14")
/* 14 */
let cad = prompt("14- Possui cadastro?")
let cadastro = true
if(cad == "true") { 
    console.log("Usuário cadastrado")
} else{
    console.log("Cadastro necessário")
}
console.log("-------------------------")