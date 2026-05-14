function saudacao(nome){
    return "Bom dia " + nome
}
// let nome = prompt("Qual seu nome?")
// let aux = saudacao(nome)
// console.log(aux)

// let n1 = Number(prompt("Primeiro número"))
// let n2 = Number(prompt("Segundo número"))
function soma(n1,n2){
    let resultado = n1 + n2
    return resultado
    // return n1 + n2 // assim tambem funciona
}
// let auxiliar = soma(n1,n2)
// console.log(auxiliar)
// console.log(soma(n1,n2))

//Classificação de temperatura
function previsaoDoTempo(temperatura){
    if(temperatura > 30){
        return("Calor")
        }else if(temperatura < 12){
            return("Frio")
       }else{
        return("OK")
       }
}
// let temperatura = Number(prompt("Qual a temperatura?"))
// let previsao = previsaoDoTempo(temperatura)
// console.log(previsao)

/* Pergunte um salário para o funcionário, se for
menor que 2500 dê 500 reais de aumento e mostre o
novo salário, senão, mostre, "sem aumento" */
function salario2(salario){
    let calculoSalario = salario + 500
    if(salario < 2500){
        return("R$500,00 de aumento. O novo salário é:"+ calculoSalario)
       }else{
        return("Sem aumento")
       }
}
// let salario = Number(prompt("Qual o salário?"))
// let novosalario = salario2(salario)
// console.log(novosalario)

/* Peça um número para o usuário, e mostre uma
porcentagem dele, se o número for menor ou igual a
100, mostre 10% do valor, se for menor ou igual a
1000, mostre 35% do valor, senao, mostre "sem
porcentagem */
function numero(num8){
    if(num8 <= 100){
        return num8 * 0.1
       }else if (num8 <= 1000){
        return num8 * 0.35
       }else{
        return "Sem porcentagem"
       }
}
let num8 = Number(prompt("Qual o número?"))
let porcentagem = numero(num8)
console.log(porcentagem)