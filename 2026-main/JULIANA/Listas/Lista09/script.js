console.log("-------------------------")
console.log("1-")
/* 1 */
let x = 1
while (x <= 10) {
    console.log(x)
    x++
}

console.log("-------------------------")
console.log("2-")
/* 2 */
let numero = Number(prompt("2- Digite um número para ver a tabuada:"))
let contador = 1
while (contador <= 10) {
    let resultado = numero * contador
    console.log(numero + " x " + contador + " = " + resultado)
    contador++
}

console.log("-------------------------")
console.log("3-")
/* 3 */
let y = 10
while (y >= 1) {
    console.log(y)
    y--
}

console.log("-------------------------")
console.log("4-")
/* 4 */
let senha = Number(prompt("4- Digite a senha"))
while(senha != "12345") {
    senha = prompt("Senha incorreta. Digite novamente")
}
console.log("Senha correta")

console.log("-------------------------")
console.log("5-")
/* 5 */
let z = 50
while (z <= 100) {
    console.log(z)
    z++
}

console.log("-------------------------")
console.log("6-")
/* 6 */
let f = 0
while (f <= 100) {
    console.log(f)
    f+=5
}

console.log("-------------------------")
console.log("7-")
/* 7 */
let cont = 1
while (cont <= 5) {
    console.log("Eu gosto de JavaScript")
    cont++
}

console.log("-------------------------")
console.log("8-")
/* 8 */
let base = 1
 nome = prompt("8- Digite o nome")
 let num3 = Number(prompt("Digite a quantidade"))
 while (base <= num3) {
    console.log(nome)
    base++
}

console.log("-------------------------")
console.log("9-")
/* 9 */
let nota = Number(prompt("9- Digite uma nota entre 0 e 10:"))
while (nota < 0 || nota > 10) {
    nota = Number(prompt("Valor inválido. Digite uma nota entre 0 e 10:"))
}
console.log("Nota registrada com sucesso")


console.log("-------------------------")
console.log("10-")
/* 10 */
let soma = 0
let num4 = Number(prompt("10- Digite um número:"))
while (num4 >= 0) {
    soma = soma + num4
    num4 = Number(prompt("Digite outro número:"))
}
console.log("A soma dos valores digitados é:", soma)

console.log("-------------------------")
console.log("11-")
/* 11 */
let opcao = 0

while (opcao != 3) {
    opcao = Number(prompt(
        "\n11- Menu:\n1 - Cadastrar\n2 - Consultar\n3 - Sair"
    ))
  
}

console.log("-------------------------")
console.log("12-")
/* 12 */
let num5 = 1
while (num5 <= 50) {
    if (num5 % 2 == 0) {
        console.log(num5)
    }
    num5++
}

console.log("-------------------------")
console.log("13-")
/* 13 */
let usuario = prompt("13- Digite o usuário:")
let senha2 = Number(prompt("Digite a senha:"))

while (usuario != "admin" || senha2 != "123") {
    usuario = prompt("Usuário incorreto. Digite novamente:")
    senha2 = prompt("Senha incorreta. Digite novamente:")
}
console.log("Bem-vindo ao sistema!")

console.log("-------------------------")
console.log("14-")
/* 14 */
let num6 = Number(prompt("14- Tente acertar o número secreto:"))

while (num6 != "44") {
    num6 = prompt("Número errado. Tente novamente")
}
console.log("Acertou! O número era 44")

