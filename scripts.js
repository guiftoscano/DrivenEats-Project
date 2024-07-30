let valorfood = 0;
let valordrink = 0;
let valordessert = 0;
let comidacheck = "";
let drinkcheck = "";
let dessertcheck = "";

const cabecalho = document.querySelector(".cabecalho");
const conteudo = document.querySelector(".conteudo");
const barrafim = document.querySelector(".barrafim");

function selecionarPedido(pedido, nomeprato, valor) {
  let prato = pedido.classList;


  const botao = document.querySelector("." + prato[2]);
  const botaoSelecionadoAntes = document.querySelector(
    "." + prato[1] + ".selecionado"
  );

  let checkmark = botao.children[4];

  if (botaoSelecionadoAntes !== null) {
  let checkmarkanterior = botaoSelecionadoAntes.children[4];
    botaoSelecionadoAntes.classList.remove("selecionado");
    checkmarkanterior.classList.remove("check");
  }

  if (prato[1] == "comida") {
    comidacheck = nomeprato;
    valorfood = valor;
  } else if (prato[1] == "drink") {
    drinkcheck = nomeprato;
    valordrink = valor;
  } else if (prato[1] == "dessert") {
    dessertcheck = nomeprato;
    valordessert = valor;
  }

  botao.classList.add("selecionado");
  checkmark.classList.add("check")

  if (comidacheck !== "" && drinkcheck !== "" && dessertcheck !== "") {
    const finalizado = document.querySelector(".botao");
    finalizado.classList.remove("negado");
    finalizado.classList.add("finalizado");

    const altertext = document.getElementById("altertext");
    altertext.innerHTML = "Fechar pedido";
  }
}

function fazerPedido() {
  if (comidacheck !== "" && drinkcheck !== "" && dessertcheck !== "") {
    const botaoFecharPedido = document.querySelector(".fecharPedido");

    const nomecomida = document.getElementById("nomecomida");
    const nomedrink = document.getElementById("nomedrink");
    const nomedessert = document.getElementById("nomedessert");
    const valorcomida = document.getElementById("valorcomida");
    const valorbebida = document.getElementById("valorbebida");
    const valorsobremesa = document.getElementById("valorsobremesa");
    const valorFinal = document.getElementById("valorFinal");
    
    botaoFecharPedido.classList.remove("desativado");

    nomecomida.innerHTML = comidacheck;
    nomedrink.innerHTML = drinkcheck;
    nomedessert.innerHTML = dessertcheck;
    valorcomida.innerHTML = "R$ " + valorfood.toFixed(2);
    valorbebida.innerHTML = "R$ " + valordrink.toFixed(2);
    valorsobremesa.innerHTML = "R$ " + valordessert.toFixed(2);
    valorFinal.innerHTML = "R$ " + (valorfood + valordrink + valordessert).toFixed(2);

    cabecalho.classList.add("blur");
    conteudo.classList.add("blur");
    barrafim.classList.add("blur");
  }
}

function closeWindow() {
  const botaoFecharjanela = document.querySelector(".fecharPedido");
  botaoFecharjanela.classList.add("desativado");
  cabecalho.classList.remove("blur");
  conteudo.classList.remove("blur");
  barrafim.classList.remove("blur");
}

function openWhatsApp() {
  let msg = `Olá, gostaria de fazer o pedido: \n- Prato: ${comidacheck}\n- Bebida: ${drinkcheck} \n- Sobremesa: ${dessertcheck}\n Total: ${(valorfood + valordrink + valordessert).toFixed(2)}`;
  msg = encodeURIComponent(msg);

  window.open(`https://wa.me/5581992234178?text=${msg}`, "_blank");
}
