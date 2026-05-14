let perguntas = [
    {
        pergunta:"No famoso vídeo do 'Pedro e a privatização das praias', o que a Luana Piovani pergunta sobre a opinião de Pedro?",
        respostas:["Pedro, você está ouvindo?", "Fala pra eles, Pedro!", "O Pedro concorda com você?","O que o Pedro acha disso?"],
        correta: 3,
        imagem:"foto1.png"
    },
    {
        pergunta:"Quem disse a frase 'Dispersa gente, dispersa'?",
        respostas:["Nicole Bahls","Andressa Urach","Gretchen", "Tati Quebra Barraco"],
        correta: 2,
         imagem:"foto2.png" 
    },
    {
        pergunta:"Complete a frase do meme da Ana Paula Renault: 'Onde estão esses...'",
        respostas:["Gatos","Netinhos","Coquinhos", "Documentos"],
        correta: 2 ,
        imagem:"foto3.png"
    },

    {
        pergunta:"A frase 'Ah, Babu, se toca!' foi dita por qual participante do BBB 26 durante uma discussão?",
        respostas:["Capetinha","Sol Vega","Ana Paula Renault", "Milena"],
        correta: 1,
         imagem:"foto4.png"
    },

    {
        pergunta:"No debate presidencial de 2022, como Soraya Thronicke chamou o candidato Padre Kelmon?",
        respostas:["Candidato Padre","Falso Padre","Caro Candidato", "Padre de Carnaval"],
        correta: 0,
        imagem:"foto5.png" 
    },

    {
        pergunta:"Complete a continuação do meme da Jojo Todynho: 'Quarta feira eu te espero no Largo do Bangu'",
        respostas:["Quarta feira eu não estarei lá","Às 16:00","Vamos ver se você tem coragem", "Mas é pra ir sozinha, vamos ver se você tem coragem"],
        correta: 0,
        imagem:"foto6.png" 
    },

    {
        pergunta:"No meme do 'Nove e dez?', qual é a razão do espanto da pessoa que fala?",
        respostas:["A duração de um vídeo","O valor alto de um produto simples","O horário de um encontro", "Pois perdeu a hora de acordar"],
        correta: 3,
        imagem:"foto7.png" 
    },

    {
        pergunta:"Qual é a continuação correta da frase 'Posso falar agora?' de outro meme de reality show?",
        respostas:["Então se agilize meu filho","Ou você vai me interromper?","Estou com a palavra!", "Cadê o respeito?"],
        correta: 0,
        imagem:"foto8.png" 
    },

    {
        pergunta:" A frase 'Heleninha quando não fica mal por estar sozinha, fica mal por estar com alguém. O importante é ficar mal' é de qual novela?",
        respostas:["Três Graças","Vale Tudo","Avenida Brasil", "Senhora do Destino"],
        correta: 1,
        imagem:"foto9.jpeg"
    },

    {
        pergunta:"A frase 'A humanidade sempre teve medo de mulheres que voam. Sejam elas bruxas, sejam elas livres' ficou famosa por quem?",
        respostas:["Odete Roitman","Luana Piovani","Ana Paula Renault", "Rita Lee"],
        correta: 2,
        imagem:"foto10.png" 
    }






]

let perguntaAtual = 0;
let pontuacao = 0; 
function mostrarPergunta() {
    let pergunta = perguntas[perguntaAtual];
    document.getElementById("pergunta").innerText = pergunta.pergunta;
    document.getElementById("imagem").src = pergunta.imagem;
    let respostasDiv = document.getElementById("respostas");
    respostasDiv.innerHTML = ""    
    pergunta.respostas.forEach(function(resposta, index) {
        respostasDiv.innerHTML += `<button onclick="verificarResposta(${index})">${resposta}</button>`;
})
}
function verificarResposta(index) {
let pergunta = perguntas [perguntaAtual]
let resultado = document.getElementById
("resultado")
if(index == pergunta.correta) {
resultado. innerText = "Acertou"
pontuacao++
} else {
resultado. innerText = "Errou"
}
}
function proximaPergunta() {
    perguntaAtual++;
    if(perguntaAtual < perguntas.length) {
        mostrarPergunta();
        document.getElementById("resultado").innerText = "";
    } else {
        mostrarResultadoFinal()
  }
}
function mostrarResultadoFinal() {
    document.getElementById("container").innerHTML = `
    <h2>Quiz Finalizado!</h2>
    <p>Sua pontuação: ${pontuacao} de ${perguntas.length}</p>
    <button onclick="location.reload()">Jogar Novamente</button>
    ` 
}
mostrarPergunta()