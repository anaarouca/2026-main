//array vetor
let frutas = ["maça","babana", "laranja"]
// 0         1              2
console.log(frutas) // td o array
console.log("--------------------------")
console.log(frutas[0])
console.log(frutas[2])
console.log(frutas[1])
console.log("--------------------------")
// medir 
console.log(frutas.length) //3
//length = tamanho
console.log(frutas[1].length) //6
let nome = "CURSO TECNICO EM DESEVOLVIMENTO DE SISTEMAS"
console.log(nome.length) //7

//adicionar 
// push = adicionar no final
frutas.push("uva")
frutas.push("morango")
console.log("frutas ")
//unshift = adiciona no comeco = Pilha
frutas.unshift("Abacaxi")
frutas.unshift("Manga")
console.log(frutas)
// remover 
//pop = remove do final
frutas.pop()
console.log(frutas)
//shift = remove do inicio
frutas. shift()
console.log(frutas)
//splice = remover no meio
frutas.splice(1,1) // splice (posiçao, quantidade)

console.log(frutas)
//editar 
frutas[2] = "limao"
console.log(frutas)

//encontre uma posicao 
console.log(frutas.indexOf("abacaxi")) //0
console.log(frutas.indexOf("limao")) //2
console.log(frutas.indexOf("morango")) //-1

console.log("--------------------------")
//varrer um vetor 
let amigos = ["luana", "rebeca", "tatiane", "felipe", "ana"]
for(let i = 0; i < amigos.length; i++){
    console.log(amigos[i])
}
console.log("--------------------------")
for(let i = 0; i < amigos.length; i++) {
if(amigos[i].length >= 6) {
console. log("O nome tem 6 letras ou mais")
} else {
console. log("0 nome tem 5 letras ou menos")
}
}
console.log("--------------------------")
let alunos = []
for(let i = 0; i < 5; i ++) { // gravar
alunos[i] = prompt("Qual o nome do aluno?")
let nome = prompt ("Qual o nome do aluno?")
alunos.push (nome)
}
for(let i = 0; i < alunos.length; i++) { //mostrar
console.log(alunos[i])
}
console.log("--------------------------")
/*crie um vetor de cores com 4 posicoes,
 depois coloque mais
 2 valores no final, tire o primeiro  e mostre com for*/
 let cores = ["preto","cinza", "bordo"]
// 0         1              2
console.log(cores) // td o array
console.log("--------------------------")
cores.push("rosa")
cores.push("dourado")
cores. shift()
console.log(cores)
for(let i = 0; i < cores.length; i++) {
console.log(cores[i])
}
console.log("--------------------------")
/*Crie um vetor vazio de 5 notas, peca para o usuário
preencher usando for, depois em outro for, mostre apenas
as notas maiores que 7 */
let notas = []
for(let i = 0; i < 5; i++) {
notas[i] = Number (prompt("Qual a nota?"))

for(let i = 0; i < notas.length; i++) {
if(notas[i] > 7) {
console.log(notas[i])
}
}
}