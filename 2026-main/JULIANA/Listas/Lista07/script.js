console.log("-------------------------")
console.log("1-")
/* 1 */
let dias = Number(prompt("1- Informe o dia da semana em número: "))
switch (dias) {
    case 1:
        console.log("Domingo")
        break
    case 2:
        console.log("Segunda-feira")
        break
    case 3:
        console.log("Terça-feira")
        break
    case 4:
        console.log("Quarta-feira")
        break
    case 5:
        console.log("Quinta-feira")
        break
    case 6:
        console.log("Sexta-feira")
        break
    case 7:
        console.log("Sábado")
        break
    default:
        console.log("Número inválido. Insira um valor entre 1 e 7.")
}

console.log("-------------------------")
console.log("2-")
/* 2 */
let idade = Number(prompt("2- Informe a idade: "))
switch (idade) {
    case 5:
        console.log("Infantil A")
        break
    case 10:
        console.log("Infantil B")
        break
    case 15:
        console.log("Juvenil A")
        break
    case 20:
        console.log("Juvenil B")
        break
    case 30:
        console.log("Adulto")
        break
    default:
        console.log("Idade inválida. Insira 5, 10, 15, 20 ou 30.")
}

console.log("-------------------------")
console.log("3-")
/* 3 */
let turno = prompt("3- Informe o turno: \n M: manhã \n V: vespertino \n N: noite")
switch (turno) {
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    case "N":
        console.log("Boa noite!")
        break
    default:
        console.log("Turno inválido. Insira M, V ou N.")
}

console.log("-------------------------")
console.log("4-")
/* 4 */
let num = Number(prompt("4- Escolha um número de 1 a 5: "))
switch (num) {
    case 1:
        console.log("Olá!")
        break
    case 2:
        console.log("Boa tarde!")
        break
    case 3:
        console.log("Tenha um bom dia!")
        break
    case 4:
        console.log("Boa sorte!")
        break
    case 5:
        console.log("Bom dia!")
        break
    default:
        console.log("Número fora do intervalo. Insira um valor entre 1 e 5.")
}

console.log("-------------------------")
console.log("5-")
/* 5 */
let estacao = Number(prompt("5- Escolha um número de 1 a 4: "))
switch (estacao) {
    case 1:
        console.log("Primavera")
        break
    case 2:
        console.log("Verão")
        break
    case 3:
        console.log("Outono")
        break
    case 4:
        console.log("Inverno")
        break
         default:
        console.log("Estação inválida. Insira um número de 1 a 4.")
}

console.log("-------------------------")
console.log("6-")
/* 6 */
let num2 = Number(prompt("6- Informe o primeiro número: "))
let num3 = Number(prompt("Informe o segundo número: "))
let operacoes = Number(prompt("Escolha uma opção: \n 1: Somar \n 2: Subtrair \n 3: Multiplicar \n 4: Dividir"))
switch (operacoes) {
    case 1: 
    let soma = num2 + num3
        console.log(soma)
        break
    case 2:
        let sub = num2 - num3
        console.log(sub)
        break
    case 3:
        let mult = num2 * num3
        console.log(mult)
        break
    case 4:
        let div = num2 / num3
        console.log(div)
        break
        default:
        console.log("Operação inválida.")
}

console.log("-------------------------")
console.log("7-")
/* 7 */
  let codigo =  Number(prompt("7- Escolha um código: "))
switch(codigo) {
case 100 : 
console.log("Caneta")
  break
case 200: 
console.log("Lápis")
  break
case 300: 
console.log("Borracha")
  break
  case 400: 
console.log("Caderno")
  break
   default:
console.log("Produto não encontrado.")
}

console.log("-------------------------")
console.log("8-")
/* 8 */
  let conceito = prompt("8- Escolha uma letra: ")
switch (conceito) {
    case "A":
        console.log("Excelente")
        break
    case "B":
        console.log("Bom")
        break
    case "C":
        console.log("Regular")
        break
        case "D":
        console.log("Ruim")
        break
        case "F":
        console.log("Reprovado")
        break
    default:
        console.log("Conceito inválido.")
}


console.log("-------------------------")
console.log("9-")
/* 9 */
let acao = prompt("9- Escolha um número de 1 a 4: ")
switch (acao) {
    case "1":
        console.log("Atacar")
        break
    case "2":
        console.log("Defender")
        break
    case "3":
        console.log("Curar")
        break
        case "4":
        console.log("Fugir")
        break
    default:
        console.log("Opção inválida. Você perdeu a vez.")
}

console.log("-------------------------")
console.log("10-")
/* 10 */
let conversor = prompt("10- Escolha um número: \n 1:Real para dólar \n 2: Dólar para real \n 3:Real para euro ")


console.log("-------------------------")
console.log("11-")
/* 11 */
let opcao6 = prompt("11- Digite sua opção:") 
switch (opcao6){ 
case 1: 
console.log("Suporte Técnico") 
break 
case 2: 
console.log("Financeiro")  
break 
case 3: 
console.log("Comercial")  
break 
default: // else 
console.log("Setor inválido") 
} 

console.log("-------------------------")
console.log("12-")
/* 12 */
 let opcao7 = prompt("12- Digite sua opção:")
 switch(opcao7){ 
case 1: 
console.log("Hambúrguer") 
break 
case 2: 
console.log("Pizza")  
break
case 3: 
console.log("Suco")  
break 
case 4: 
console.log("Sorvete")  
break 
default: // else 
console.log("Pedido inválido") 
}

console.log("-------------------------")
console.log("13-")
/* 13 */
let opcao8 = prompt("13- Digite sua opção:")
switch (opcao8){
case 1:
console.log("Péssimo")
break
case 2:
console.log("Ruim")
break
case 3:
console.log("Regular")
break
case 4:
console.log("Bom")
break
case 5:
console.log("Excelente")
break
default: // else

console.log("Nota inválida")
}


console.log("-------------------------")
console.log("14-")
/* 14 */
let opcao9 = prompt("14- Digite sua opção:")
switch (opcao9){
case 1:
console.log("Administrador")
break
case 2:
console.log("Professor")
break
case 3:
console.log("Aluno")
break
case 4:
console.log("Visitante")
break
default: // else
console.log("Usuário inválida")
}

console.log("-------------------------")
console.log("15-")
/* 15 */
let opcao10 = prompt("15- Digite sua opção:")
switch (opcao10){
case 1:
console.log("Ação")
break
case 2:
console.log("Comédia")

break
case 3:
console.log("Drama")
break
case 4:
console.log("Terror")
break
case 5:
console.log("Animação")
break
default: // else
console.log("Categoria inválida")
}