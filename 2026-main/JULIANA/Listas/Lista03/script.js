console.log("1-")
/* 1 */
let idade = Number(prompt("1- Informe a idade:"))
let cnh = prompt("Possui cnh?")
console.log(idade >= 18 && cnh == "sim")

console.log("-----------------------------")
console.log("2-")
/* 2 */
let nota = Number(prompt("2- Informe a nota:"))
let faltas = Number(prompt("Informe a quantidade de dias faltados:"))
console.log(nota >= 6 && faltas <= 10)

console.log("-----------------------------")
console.log("3-")
/* 3 */
let idade2 = Number(prompt("3- Informe a idade:"))
let convite = prompt("Possui convite?")
console.log(idade2 >= 18 && convite == "sim")

console.log("-----------------------------")
console.log("4-")
/* 4 */
let salario = Number(prompt("4- Informe o salário:"))
let nome = prompt("Seu nome está limpo?")
console.log(salario >= 2500 && nome == "sim")

console.log("-----------------------------")
console.log("5-")
/* 5 */
let convite2 = prompt("5- Possui convite?")
let nomeNaLista = prompt("Seu nome está na lista?")
console.log(convite2 == "sim" || nomeNaLista == "sim")

console.log("-----------------------------")
console.log("6-")
/* 6 */
let valorCompra = Number(prompt("6- Informe o valor da compra:"))
let clienteVip = prompt("É cliente VIP?")
console.log(valorCompra > 80 || clienteVip == "sim")

console.log("-----------------------------")
console.log("7-")
/* 7 */
let nota2 = Number(prompt("7- Informe a nota:"))
let trabalho_extra = prompt("Fez trabalho extra?")
console.log(nota2 > 5 && trabalho_extra == "sim")

console.log("-----------------------------")
console.log("8-")
/* 8 */
let senha = 1234
let senhaDigitada = Number(prompt("8- Informe a senha:"))
let digital = prompt("A digital foi reconhecida (true/false)?")
console.log(senhaDigitada == senha && digital == "true")


console.log("-----------------------------")
console.log("9-")
/* 9 */
let bloqueado = prompt("9- A conta está liberada?")
console.log(bloqueado)

console.log("-----------------------------")
console.log("10-")
/* 10 */
let temCadastro = prompt("10- Já possui cadastro?")
console.log(temCadastro)

console.log("-----------------------------")
console.log("11-")
/* 11 */
let login = prompt("11- Informe o login:")
let senha2 = prompt("Informe a senha:")
console.log(login == "ADMIN" && senha2 == "senai2026")

console.log("-----------------------------")
console.log("12-")
/* 12 */
let valorCompra2 = Number(prompt("12- Informe o valor da compra:"))
let cartaoDaLoja = prompt("Possui o cartão da loja?")
let nome2 = prompt("Seu nome está limpo?")
console.log(valorCompra2 > 300 && cartaoDaLoja == "sim" && nome2 == "sim")

console.log("-----------------------------")
console.log("13-")
/* 13 */
let idade3 = prompt("13- Informe a idade:")
let entregaDocumentos = prompt("Entregou os documentos?")
let pagamentoMatricula = prompt("Realizou o pagamento da matrícula?")
console.log(idade3 >= 17 && entregaDocumentos == "sim" && pagamentoMatricula == "sim")

console.log("-----------------------------")
console.log("14")
/* 14 */
let idade4 = prompt("14- Informe a idade:")
let socio = prompt("É sócio da loja?")
let convidado = prompt("Foi convidado?")
console.log(idade4 >= 15 && (socio == "sim" || convidado == "sim"))















