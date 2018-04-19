import { NegociacaoController } from './controllers/NegociacaoController';

let controller = new NegociacaoController();

$("form").submit(controller.adiciona.bind(controller));

