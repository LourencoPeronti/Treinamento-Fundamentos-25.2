

const produtos = [
    {
        id: "0",
        nome: "Poção Anti-DP",
        preco: "R$2000,00",
        descricao: "Tome e fique imune de DPs para SEMPRE",
        img: "assets/imgs/pocao-removebg-preview.png",
        isOnCarrinho: false
    },
    {
        id: "1",
        nome: "Óculos Vetorial",
        preco: "R$1550,39",
        descricao: "Dificuldade em vizualizar os vetores em AlgLin? Este óculos permite vizualizá-los no espaço bem na sua frente",
        img: "assets/imgs/oculos_vetorial.png",
        isOnCarrinho: false
    },
    {
        id: "2",
        nome: "Relógio Dobrado",
        preco: "R$10.000,99",
        descricao: "Não consegue fazer tudo em 24h? Não se preocupe, este relógio deixa seu dia com 48h (Talvez ainda não seja suficiente para o politécnico). Bem melhor que um Rolex",
        img: "assets/imgs/relogio.png",
        isOnCarrinho: false
    },
    {
        id: "3",
        nome: "Arma encolhedora",
        preco: "R$956,75",
        descricao: "Dificuldade em entender defeitos cristalinos e estruturas atômicas? Com esta arma, você poderá ficar do tamanho de um átomo e entendê-las de uma ves por todas.",
        img: "assets/imgs/arma-removebg-preview.png",
        isOnCarrinho: false
    }
    
    
]

var produtos_carrinho = 0
var img_botao = "assets/imgs/adc_carrinho.png"


const container = document.getElementsByClassName("containerCorpo")[0];
const card = document.getElementsByClassName("produto")[0];
container.innerHTML = "";


produtos.forEach(produto => {
    const item = card.cloneNode(true);

    item.querySelector(".nome").textContent = produto.nome;
    item.querySelector(".preco").textContent = produto.preco;
    item.querySelector(".desc").textContent = produto.descricao;
    item.querySelector(".imagem").src = produto.img;
    item.querySelector(".img_botao").src = "assets/imgs/adc_carrinho.png"
    item.querySelector(".botao").id = produto.id

    container.appendChild(item);
});

const botoes = document.querySelectorAll(".botao")
botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    id = Number(botao.id)
    if (produtos[id].isOnCarrinho == false) {
        produtos_carrinho++
        document.getElementById("txt_carrinho").innerText = String(produtos_carrinho)
        produtos[id].isOnCarrinho = true
        botao.classList.add("apertado")
        botao.querySelector(".img_botao").src = "assets/imgs/remove_carrinho.png"
    }
    else if (produtos[id].isOnCarrinho == true) {
        produtos_carrinho--
        document.getElementById("txt_carrinho").innerText = String(produtos_carrinho)
        produtos[id].isOnCarrinho = false
        botao.classList.remove("apertado")
        botao.querySelector(".img_botao").src = "assets/imgs/adc_carrinho.png"
    }
    
  });
});
