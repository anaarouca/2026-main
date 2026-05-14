//1
let filmes = ["A Proposta","Se Eu Fosse Você", "Esposa de Mentirinha"]
console.log(filmes[0])
console.log("----------------------------------")

//2
let frutas = ["Manga","Kiwi", "Morango", "Amora", "Uva"]
console.log(frutas[2])
console.log("----------------------------------")

//3
let cores = ["Preto","Cinza", "Bordo"]
cores.push("Violeta")
for (let i = 0; i < cores.length; i++) {
console.log(cores[i])
}
console.log("----------------------------------")

//4//
let num = ["8","2", "8", "0"]
num.pop()
console.log(num)
console.log("----------------------------------")


//5
let city = ["Madri","Lisboa"]
city.unshift("Los Angeles")
for (let i = 0; i < city.length; i++) {
console.log(city[i])
}
console.log("----------------------------------")


//6
let animais = ["Gato","Pantera", "Cascavel"]
animais.pop()
console.log(animais)
for (let i = 0; i < animais.length; i++) {
console.log(animais[i])
}
console.log("----------------------------------")

//7
let carros = []
carros.push("Omega")
carros.push("Golf GTI")
carros.push("R8")
carros.push("Mustang")
console.log("Quantidade de carros:", carros.length)
console.log("----------------------------------")

//8
let numeros = [];
numeros.push(10);
numeros.push(20);
numeros.push(30);
numeros.unshift(5);
numeros.pop();
numeros.shift();
console.log("Array final:", numeros);
console.log("Tamanho do array:", numeros.length);
console.log("----------------------------------")


//9
let vetor = new Array(6);
for (let i = 0; i < vetor.length; i++) {
vetor[i] = i + 1;
}
for (let i = 0; i < vetor.length; i++) {
console.log("Posição", i, ":", vetor[i]);
}
