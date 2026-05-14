// Declarativas 
function soma1(n1, n2) {
return n1 + n2
}
let n1 = 5
let n2 = 7
console.log(soma1(n1,n2))

//Anônima
let soma2 = function(n3,n4){
    return n3 + n4
    }
let n3 = 5
let n4 = 7
console.log(soma2(n3,n4))

//Saudação
let bomDia = function(nome){
return "Bom dia " + nome
}
// let nome = prompt ("Qual seu nome?")
// console.log(bomDia(nome))

//Multiplicar três números 
let multiplicar = function(num1, num2, num3) {
return num1 * num2 * num3
}
// let num1 = Number(prompt("Informe um numero") )
// let num2 = Number(prompt("Informe um numero") )
// let num3 = Number(prompt("Informe um numero") )
// console.log(multiplicar(num1,num2,num3))

/* Peça uma temperatura, se tiver acima de 30 diga
"calor", se tiver abaixo de 12 diga "frio", senão,
diga "ok" */
let previsaoDoTempo = function(temperatura) {
    if(temperatura > 30){
        return "Calor"
    }else if(temperatura < 12){
        return "Frio"
    }else{
        return "OK"
    }
}
// let temperatura = Number(prompt("Informe a temperatura") )
// console.log(previsaoDoTempo(temperatura))


/*peça um salario,se ele for menor ou igual a 25000 de 700 reias de aumento, senao se for menor ou igual a 3200, de 300 reais de uamento, senao mostre "sem aumento" */
let aumento = function(salario) {
    if(salario <= 1500){
        return salario + 700
    }else if(salario <= 3200){
        return salario + 300
    }else{
        return "Sem aumento"
    }
}
let salario = Number(prompt("Informe o salário") )
console.log(aumento(salario))
