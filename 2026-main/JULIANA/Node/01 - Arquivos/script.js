let nome = "Juliana"
console.log("Olá Mundo!")
console.log("Olá " + nome)
const fs = require( 'fs')
fs.writeFileSync(
"mensagem. txt",
"Criei um bloco de notas com node. js"
)
console. log("Arquivo criado com sucesso!")


fs.writeFileSync(
    "info.txt",
    "nome: Ana Júlia Arouca Alves \n" +
    "turma: 3°A \n" +
    "filme: Se Eu Fosse Você"
)
console. log("Arquivo criado com sucesso!")

const pessoa = {
nome: "Juliana",
idade: 25,
cidade: "Suzano"
}
fs.writeFileSync(
"pessoa. json",
JSON. stringify(pessoa)
)
console. log("Json criado com sucesso")

const infoS = {
nome: "Ana Júlia Arouca",
idade: 17,
telefone: "99999-9999",
email: "ana.julia@example.com"
}
fs.writeFileSync(
"infoS. json",
JSON. stringify(infoS)
)
console. log("Json criado com sucesso")

// npm install docx -> biblioteca do word

//importar partes especificas da biblioteca do word
const{
    Document,  //criar documento word
    Packer,  //transformar o documento em word
    Paragraph, //cria paragrafo
    TextRun  // adicionar textos
} = require("docx")

//criando um documento do word
const doc = new Document({
    //pogina -> seção -> paragrafo -> texto
    sections: [
        { //configurações da seção (margem, tamanho da página, etc)
            properties: {},

            //filhos da seção - funciona como o body do html, onde ficam os parágrafos, tabelas, etc
            children: [
                new Paragraph({
                    children: [ //titulo do word
                        new TextRun("Arquivo Word")
                    ]
                }),
                new Paragraph({  
                    children : [ 
                        new TextRun("Textos importantes")
                    ]
                })
            ]
        }
    ]
})
Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("relatorio.docx", buffer
    )
    console.log("O Word foi criado")
})
