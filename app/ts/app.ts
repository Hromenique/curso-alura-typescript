//let negociacao = new Negociacao(new Date(), 2, 100);
//console.log(negociacao);

let controller = new NegociacaoController();

$("form").submit(controller.adiciona.bind(controller));

