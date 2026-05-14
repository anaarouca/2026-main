// 1--------------------------------------------------
let itens = document.querySelectorAll(".item")
let troca = document.querySelector("#troca")

itens.forEach(function(item){
    troca.addEventListener("click", function(){
        item.classList.add("troca")
    })
})


// 2--------------------------------------------------
let elementos = document.querySelectorAll(".elemento")
elementos.forEach(function(elemento){
    elemento.onclick = function(){
        elemento.classList.add("ativo")
    }
})

// 3.4.5----------------------------------------------
let elementos2 = document.querySelectorAll(".elemento2")
elementos2.forEach(function(elemento){
   /*4*/ elemento.onclick = function(){
        console.log("clicou")
   /*5*/ elemento.classList.toggle("rosa")
    }
})


// 6.7----------------------------------------------
let caixas = document.querySelectorAll(".caixa")
caixas.forEach(function(caixa){
    caixa.onclick = function(){
/*7*/ caixa.classList.toggle("destaque")
    }
})


// 8----------------------------------------------------
let blocos = document.querySelectorAll(".bloco")
blocos.forEach(function(bloco){
    bloco.onclick = function(){
    blocos.forEach(function(item){
    item.classList.remove("ativo")
})
    bloco.classList.add("ativo")
    }
})

//9--------------------------------------------------
let menus = document.querySelectorAll(".menu")
menus.forEach(function(menu){
    menu.onclick = function(){
menus.forEach(function(item){
    item.classList.remove("ativo2")
})
    menu.classList.add("ativo2")
    }
})

