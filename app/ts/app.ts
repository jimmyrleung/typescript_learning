const controller = new NegociacaoController();

// Usando jQuery
$(".form").submit(controller.add.bind(controller));