class NegociacaoController {
    constructor() {
        // Como o querySelector nos devolve um tipo genérico (Element)
        // precisamos convertê-lo para um tipo mais específico
        this._inputData = document.querySelector("#data");
        this._inputQuantidade = document.querySelector("#quantidade");
        this._inputValor = document.querySelector("#valor");
    }
    add(evt) {
        evt.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ",")), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
    }
}
