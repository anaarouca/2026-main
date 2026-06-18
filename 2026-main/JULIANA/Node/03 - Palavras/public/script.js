// script.js
//async e await - usamos quando trabalhamos com coisas ou processos que podem demorar

async function salvar() {
    let palavra = document.getElementById("palavra").value //pega o valor do input


    //await vai esperar a requisição para terminar
    //espera terminar de salvar antes de salvar a próxima
    await fetch("/salvar", { 
        //Define o tipo de requisição
// POST = enviar dados
method: "POST",
//Define as informações da requisição
headers: {
//informamos o que é do json
"Content-Type": "application/json"
},
//body = dados enviados para o servidor
//JSON.stringify = transforma em JSON
body: JSON.stringify({
    //nome da propriedade
    palavra: palavra
          //valor do input

}) 
    })
    alert("Palavra salva!")
}