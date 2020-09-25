const rs = require("readline-sync");
class Usuario {
  constructor(nome, saldoNoCartao,) {
    this.nome = nome;
    this.saldoNoCartao = saldoNoCartao;
    this.carrinho = [];
  }
}
let usuario = new Usuario("Pedro", 20);

class Produto {
  constructor(codigo, nome, valor) {
    this.codigo = codigo;
    this.nome = nome;
    this.valor = valor;
  }
}
class Mercado {
  constructor(nome, dono) {
    this.nome = nome;
    this.dono = dono;
    let maca = new Produto(1, "Maçã", 2.3);
    let uva = new Produto(2, "Uva", 8);
    let uvaSemCaroco = new Produto(3, "Uva Sem Caroço", 16);
    let pera = new Produto(4, "Pera", 4)
    this.produtos = [maca, uva, uvaSemCaroco, pera];
  }
  listarProdutos() {

    for (let i = 0; i < this.produtos.length; i++) {
      let produtoAtual = this.produtos[i];
      console.log("[" + produtoAtual.codigo + "] - " + produtoAtual.nome + " custa R$ " + produtoAtual.valor);
    }
  }
}

let carrinho = []

class produtoNoCarrinho {
  constructor(nome, valor, quantidade) {
    this.nome = nome
    this.valor = valor
    this.quantidade = quantidade
  }
}

function colocarProdutoNoCarrinho(nomeProduto, valorDoProduto, quantidadeDoProduto) {
  if (quantidadeDoProduto !== "") {
    let produtoNoCarrinho = new ProdutoNoCarrinho(nomeProduto, valorDoProduto, quantidadeDoProduto)
    carrinho.push(produtoNoCarrinho)
    console.log("Coloquei " + produtoNoCarrinho.quantidade + " " + produtoNoCarrinho.nome + "(s) no carrinho!")
    calcularValorTotalDoCarrinho()
  } else {
    alert("Mas não queria o produto?")
  }
}

function calcularValorTotalDoCarrinho() {

  let soma = 0

​

  for(let i = 0; i < carrinho.length; i++) {

    let produtoNoEspacoAtualNoCarrinho = carrinho[i]
    let valorTotalDoProdutoAtual = produtoNoEspacoAtualNoCarrinho.preco * produtoNoEspacoAtualNoCarrinho.quantidade
    soma = soma + valorTotalDoProdutoAtual
  }
  console.log("O valor total do carrinho é de R$ " + soma)
  let h3Valor = document.getElementById("h3Valor")
  h3Valor.innerHTML = soma.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}
function clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto) {
  let inputComPreco = document.getElementById(idDoCampoPreco)
  let valorDoProduto = inputComPreco.value // onde fica que a maçã custa R$ 2,30
  let quantidadeDoProduto = document.getElementById(idDoCampoQuantidade).value // aqui é onde o usuário diz quantas quer
  colocarProdutoNoCarrinho(nomeDoProduto, valorDoProduto, quantidadeDoProduto)
}
window.onload = function () {

  document.getElementById("comprarMaca").addEventListener("click", () => {

    clicarComprarProduto("precoMaca", "quantidadeMaca", "Maçã")

  })
  document.getElementById("comprarUva").addEventListener("click", () => {

    let idDoCampoPreco = "precoUva"
    let idDoCampoQuantidade = "quantidadeUva"
    let nomeDoProduto = "Uva"

    clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)

  })
  document.getElementById("comprarUvaSemCaroco").addEventListener("click", () => {

    let idDoCampoPreco = "precoUvaSemCaroco"
    let idDoCampoQuantidade = "quantidadeUvaSemCaroco"
    let nomeDoProduto = "Uva Sem Caroço"
    clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)
  })
  document.getElementById("comprarPera").addEventListener("click", () => {

    clicarComprarProduto("precoPera", "quantidadePera", "Pera")
    
  })
}

​

let roberto = new Usuario("Roberto", 1000000);
let mercado = new Mercado("Mercado Arbyte", roberto);

function comprar() {
  mercado.listarProdutos();
  let produtoEscolhido;
  let valorTotalDaCompra = 0;
  produtoEscolhido = rs.question("Escolha seu produto\n");

  while (produtoEscolhido > 0 && produtoEscolhido < 4) {

    let produto = mercado.produtos[produtoEscolhido - 1];
    console.log("Produto que o usuário escolheu é: " + produto.nome);

    usuario.carrinho.push(produto);
    valorTotalDaCompra = valorTotalDaCompra + produto.valor;

    console.log(
      "\nAté agora, a sua compra está saindo R$ " + valorTotalDaCompra + "\n"
    );
    let continuar = rs.questionInt(
      "\nMais alguma coisa?\n1 - sim\n2 - não\n"
    );

    if (continuar === 1) {
      mercado.listarProdutos();
      produtoEscolhido = rs.question("Escolha seu produto");
    }
    else {
      break;
    }
  }
  console.log("Carrinho: ");
  console.log(usuario.carrinho);
  console.log("E o total da sua compra é de R$ " + valorTotalDaCompra);
  console.log("Processando...");

  passarCartao(usuario.carrinho).then(res => {
    console.log("Compra concluída!")
    console.log("Os seus produtos são:")
    console.log(res)
    entrega(console.log("funcao entrega")).then(res => { console.log("sua entrega foi agendada") })
  }).catch(err => {
    console.log("nao aprovado!")
    console.log("os produtos que nao passaram foram:")
    console.log(err.produtosQueEstouraram)
    limparCarrinho()
  })
}

function passarCartao(carrinho) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let produtosQueEstouraram = []
      let produtosQuePassaram = []
      carrinho.forEach(produto => {
        if (usuario.saldoNoCartao >= produto.valor) {
          usuario.saldoNoCartao -= produto.valor
          produtosQuePassaram.push(produto)
        } else {
          produtosQueEstouraram.push(produto)
        }
      })
      if (produtosQueEstouraram.length > 0) {
        reject({ produtosQuePassaram, produtosQueEstouraram })
      } else { resolve(produtosQuePassaram) }
    }, 3000)
  })
}
comprar();

function entrega() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Agendamos sua entrega")
      reject("se fodeu")
    }, 1000)
  })
}

function limparCarrinho(carrinho = usuario.carrinho) {
  for (let i = 0; i <= carrinho.length; i++) {
    carrinho.shift([i])
    carrinho.pop([i])
  }
  console.log("seu carrinho foi limpo")
}

alert("asuidhasf")