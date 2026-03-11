function abrirMenu(){

const nav = document.getElementById("nav") // pega menu

nav.classList.toggle("active") // abre/fecha menu

}

function abrirPedido(){

document.getElementById("pedidoModal").style.display = "flex" // mostra modal

}

function fecharPedido(){

document.getElementById("pedidoModal").style.display = "none" // fecha modal

}

function enviarPedido(){

const extras = document.querySelectorAll(".extra:checked") // pega extras marcados

let pedido = "Pedido:%0A" // inicia texto do pedido

pedido += "Burger: " + burgerEscolhido + "%0A" // adiciona burger

// adiciona extras escolhidos
extras.forEach(extra=>{
pedido += "Extra: " + extra.value + "%0A"
})

const url = "https://wa.me/5511999999999?text=" + pedido // cria link whatsapp

window.open(url,"_blank") // abre whatsapp em nova aba

}



window.addEventListener("scroll", function(){

const cards = document.querySelectorAll(".card") // seleciona cards

cards.forEach(card =>{

const pos = card.getBoundingClientRect().top // posição na tela

if(pos < window.innerHeight){ // se visível

card.style.opacity = 1
card.style.transform = "translateY(0)"

}

})

})

let burgerEscolhido = "" // variável que guarda burger escolhido

function selecionarBurger(nome){

burgerEscolhido = nome // salva burger selecionado

// remove seleção anterior
document.querySelectorAll(".pedido-item").forEach(item=>{
item.classList.remove("selected")
})

// adiciona borda no item clicado
event.currentTarget.classList.add("selected")

}