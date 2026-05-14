// Função com retorno
function somar1(n1,n2){
    return n1 + n2
}

// Função Anônima
let somar2 = function(n3,n4) {
    return n3 + n4
}
console.log(somar2(1,2))

//Arrow Function - Função da seta
let somar3 = (n5,n6) => { // => - function
    return n5 + n6
}
console.log(somar3(1,2))
console.log("---------------------")

// Peça um número e verifique se é positivo, negativo ou zero
let classificar = (numero) => {
    if(numero <  0){
        return "Negativo"
    }else if (numero >  0){
        return "Positivo"
    } else {
        return "Zero"
    }
}
// let numero = Number(prompt("Qual o número?"))
// console.log(classificar(numero))

let imparOuPar = (num) =>{
    let aux = num % 2
    if (aux == 0) { // num % 2 == 0
        return "Par"
    } else{
        return "Ímpar"
    }
}
// let num = Number(prompt("Qual o número?"))
// console.log(imparOuPar(num))

let dobro1 = (n) => {
    return n * 2
}
let dobro2 = n => n *2
console.log(dobro1(5))
console.log(dobro2(5))
console.log("---------------------")

/* Peça um número para o usuário, se for menor ou igual a 10, retorne (numero + 3 * 6 - 1) senão, retorne (numero / 2 + 3 * 19) */
let numero2 = (num2) =>{
    if (num2 <= 10) { 
        return num2 + 3 * 6 - 1
    } else{
        return num2 / 2 + 3 * 19
    }
}
let num2 = Number(prompt("Qual o número?"))
console.log(numero2(num2))