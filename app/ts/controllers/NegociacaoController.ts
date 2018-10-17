class NegociacaoController {
    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView("#negociacoesView");

    constructor() {
        // Como o querySelector nos devolve um tipo genérico (Element)
        // precisamos convertê-lo para um tipo mais específico
        this._inputData = <HTMLInputElement>document.querySelector("#data");
        this._inputQuantidade = <HTMLInputElement>document.querySelector("#quantidade");
        this._inputValor = <HTMLInputElement>document.querySelector("#valor");
        this._negociacoesView.update(this._negociacoes);
    }

    add(evt: Event) {
        evt.preventDefault();

        this._negociacoes.add(new Negociacao(
            new Date(this._inputData.value.replace(/-/g, ",")),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value),
        ));

        this._negociacoesView.update(this._negociacoes);
    }
}