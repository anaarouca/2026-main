console.log("-------------------------")
console.log("1-")
/* 1 */
function mensagemInicial(){
    console.log("Aprendendo funções com JS")
}
mensagemInicial()

console.log("-------------------------")
console.log("2-")
/* 2 */
function boasVindas (){
    console.log("Desenvolvimento de Sistemas!")
}
boasVindas()
boasVindas()

console.log("-------------------------")
console.log("3-")
/* 3 */
function contarAteDez  (){
    let contador = 1
    while(contador <= 10) {
        console.log(contador)
        contador ++
}
}
contarAteDez()


console.log("-------------------------")
console.log("4-")
/* 4 */
function contagemRegressiva(){
    let contador2 = 10
    while(contador2 >= 1) {
        console.log(contador2)
        contador2 --
}
}
contagemRegressiva()

console.log("-------------------------")
console.log("5-")
/* 5 */
function mensagemRepetida  (){
    console.log("Eu gosto de JavaScript")
}
mensagemRepetida ()
mensagemRepetida ()
mensagemRepetida ()
mensagemRepetida ()
mensagemRepetida ()

console.log("-------------------------")
console.log("6-")
/* 6 */
function numerosPares(){
let numero = 0
while(numero <= 20){
 if(numero % 2 == 0){
console.log(numero)
 }
   numero++
    }
}
numerosPares()

console.log("-------------------------")
console.log("7-")
/* 7 */
function tabuadaDoDois (){
let numero = 1
while(numero <= 10){
    let tabuada = 18 * numero
 console.log("18 x " , numero , " = " , tabuada)
  numero++
    }
}
tabuadaDoDois()

console.log("-------------------------")
console.log("8-")
/* 8 */
function mostrarSoma(){
 let num1 = Number(prompt("8- Qual o primeiro número?"))
 let num2 = Number(prompt("Qual o segundo número?"))
 console.log(num1 + num2)
}
mostrarSoma()

console.log("-------------------------")
console.log("9-")
/* 9 */
function alertaSistema (){
    console.log("Atenção! Verifique as informações.")
}
alertaSistema ()
alertaSistema ()
alertaSistema ()

console.log("-------------------------")
console.log("10-")
/* 10 */
function mensagem1(){
    console.log("Bom dia!")
}
function mensagem2(){
    console.log("Tenha um ótimo dia!")
}
function mensagem3(){
    console.log("Siga em frente!")
}
mensagem1()
mensagem2()
mensagem3()


console.log("-------------------------")
console.log("11-")
/* 11 */
function somaNumeros(){
let soma = 0

for(let i = 1; i <= 5; i++){
     let numero = Number(prompt("11- Digite um número:"))
soma = soma + numero
    }

 console.log("A soma é:", soma)
}
somaNumeros()

console.log("-------------------------")
console.log("12-")
/* 12 */
function aumentoSalario(){
let salario = Number(prompt("12- Qual é o salário do funcionário?"))

if(salario <= 3500){
salario = salario + 500
console.log("Terá aumento!")
console.log("Novo salário:", salario)
    }else{
console.log("Não terá aumento")
    }
}
aumentoSalario()

console.log("-------------------------")
console.log("13-")
/* 13 */
function Aprovacao(){
    
let nota1 = Number(prompt("13- Qual a primeira nota?"))
let nota2 = Number(prompt("Qual a segunda nota?"))
let nota3 = Number(prompt("Qual a terceira nota?"))
let media = (nota1 + nota2 + nota3) / 3
if(media > 6){
    console.log("Aprovado")
}else if (media >= 5){
    console.log("Recuperação")
}else{
    console.log("Reprovado")
}
}
Aprovacao()

console.log("-------------------------")
console.log("14-")
/* 14 */
function classificacaoAtendimento(){

let nota = Number(prompt("14- Qual a nota do atendimento?"))

 if(nota == 9 || nota == 10){
        console.log("Excelente")
 }else if(nota == 8){
        console.log("Ótimo")
 }else if(nota == 7 || nota == 6){
        console.log("Bom")
 }else if(nota == 5){
        console.log("Regular")
 }else{
console.log("Ruim")
    }
}
classificacaoAtendimento()