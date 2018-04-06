//let negociacao = new Negociacao(new Date(), 2, 100);
//console.log(negociacao);

let controller = new NegociacaoController();

document.querySelector("form").addEventListener("submit", controller.adiciona.bind(controller));

