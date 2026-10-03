const botao = document.querySelector("button");
const corpo = document.body;
const card = document.querySelector(".card");

const cores = ["#fc5b5b", "#050505", "#ffeaa7", "#fab1a0", "#3494db", "red",];
let indiceAtual = 0;

botao.addEventListener("click", () => {
    indiceAtual = (indiceAtual + 1) % cores.length;
    corpo.style.backgroundColor = cores[indiceAtual];

    if (card) {
        card.style.transform = card.style.transform === "scale(1.1)" ? "scale(1)" : "scale(1.1)";
    }
});
const imagens = document.querySelectorAll(".carrossel img");
let indiceImagem = 0;

setInterval(() => {
    imagens[indiceImagem].classList.remove("ativa");
    indiceImagem = (indiceImagem + 1) % imagens.length;
    imagens[indiceImagem].classList.add("ativa");
}, 3000); // 3000ms = 3 segundos
const formulario = document.getElementById("formPedido");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const pedido = document.getElementById("pedido").value;
    const observacao = document.getElementById("obs").value;

    alert("Pedido realizado!\n\nNome: " + nome + 
          "\nPedido: " + pedido + 
          "\nObservação: " + observacao);
});
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nome = document.querySelector("#nome").value;

    if (nome.trim() === "") {
        alert("Por favor, preencha seu nome!");
        return; // para a execução aqui, não continua
    }

    alert(`Obrigado, ${nome}! Pedido recebido.`);
});