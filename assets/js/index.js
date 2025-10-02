const produtos = [
    {
        nome: "Poção Anti-DP",
        preco: "R$2000,00",
        descricao: "Tome e fique imune de DPs para SEMPRE",
        img: "assets/imgs/pocao-removebg-preview.png",
    },
    {
        nome: "Óculos Vetorial",
        preco: "R$1550,39",
        descricao: "Dificuldade em vizualizar os vetores em AlgLin? Este óculos permite vizualizá-los no espaçco bem na sua frente",
        img: "assets/imgs/pocao-removebg-preview.png"
    },
    {
        nome: "Óculos Vetorial",
        preco: "R$1550,39",
        descricao: "Dificuldade em vizualizar os vetores em AlgLin? Este óculos permite vizualizá-los no espaçco bem na sua frente",
        img: "assets/imgs/pocao-removebg-preview.png"
    },
    
    
]

const container = document.getElementsByClassName("containerCorpo")[0];
const card = document.getElementsByClassName("produto")[0];
container.innerHTML = "";

produtos.forEach(produto => {
    const item = card.cloneNode(true);

    item.querySelector(".nome").textContent = produto.nome;
    item.querySelector(".preco").textContent = produto.preco;
    item.querySelector(".desc").textContent = produto.descricao;
    item.querySelector(".imagem").src = produto.img;

    container.appendChild(item);
});