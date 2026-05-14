// Switch Case
let opcao = 1
switch (opcao) {
    case 1:
    console.log("Cadastrar")
break
case 2:
console.log("Editar")
break
default: //else
console.log("Opção Inválida")    

}

console.log("--------------------------")
    let acesso = prompt ("Qual seu acesso?")
switch(acesso) {
case "admin" : // == admin
console.log("acesso total")
  break
case "professor": // == professor
console.log("pode lançar notas")
  break
case "aluno": // == aluno
console.log("pode visualizar")
  break
default://else
console.log("acesso negado")
}

console.log("--------------------------")    
/* Pergunte para o usuário que dia da semana é hoje, se
for quinta ou sexta, mostre "Dia de ir para o SENAI",
para qualquer outro valor, mostre "Não é dia de ir para o
SENAI" */
    let dia = prompt ("Que dia é hoje?")
switch(dia) {
case "quinta" : 
case "sexta": 
console.log("dia de ir para o SENAI")
break
  default:
console.log("não é dia de ir para o SENAI")
}

console.log("--------------------------")    
/* Um cardápio organiza os itens por número
- 1 = Pizza
- 2 = Salada
- 3 = Macarrão
- 4 = Bebida */

    let item =  Number(prompt("Escolha um item: "))
switch(item) {
case 1 : 
console.log("Pizza")
  break
case 2: 
console.log("Salada")
  break
case 3: 
console.log("Macarrão")
  break
  case 4: 
console.log("Bebida")
  break
   default:
console.log("Opção inválida")
}