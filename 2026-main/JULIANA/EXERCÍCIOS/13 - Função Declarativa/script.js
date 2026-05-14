// // Funções Declarativas 
// let a = 5
// let b = 10
// console.log(a+b)

// let c = 54
// let d = 17
// console.log(c+d)


// console.log("-----------------------------------")
// // function soma() {
// //     let num1 = Number(prompt("Qual o primeiro número?"))
// //      let num2 = Number(prompt("Qual o segundo número?"))
// //      console.log(num1 + num2)
// // }
// // soma() // chamando a função


// function saudacao(){
//     console.log("Bom dia")
// }
// saudacao()
// console.log("-----------------------------------")

// function inicializacao(){
//     let nome = prompt("Qual seu nome?")
//     console.log("Bem vindo ao site",nome)
// }
// inicializacao()

// console.log("-----------------------------------")
// /* Um escola solicitou um sistema de aprovação de alunos, crie uma função, peça duas notas para o usuário, calcule a média e se for igual ou maior a 7, mostre "Aprovado",senao, mostre "Reprovado"! Chame a funcao 2 vezes*/
// function Aprovacao(){
    
// let nota1 = Number(prompt("Qual a primeira nota?"))
// let nota2 = Number(prompt("Qual a segunda nota?"))
// let media = (nota1 + nota2) / 2
// if(media >= 7){
//     console.log("Aprovado")
// }else{
//     console.log("Reprovado")
// }
 
// }
// Aprovacao()
// Aprovacao()
// console.log("-----------------------------------")

// /* Foi solicitado um sistema para classificar a pontuação de um jogo. Crie uma função, pergunte a pontuação e, se for maior ou igual a 3000, mostre "vencedor", se for maior a 2200, mostre "segundo lugar", se for maior ou igual a 1800, mostre terceiro lugar", senao mostre, "nao foi dessa vez" */
function pontuacao(){
    
let pont = Number(prompt("Qual a pontuação?"))
if(pont >= 3000){
    console.log("Vencedor")
}else if  (pont > 2200){
        console.log("Segundo lugar")
     } else if  (pont >= 1800){
        console.log("Terceiro lugar")
    }else{
    console.log("Não foi dessa vez")
}

}
pontuacao()