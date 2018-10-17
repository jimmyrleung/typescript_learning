class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    add(negociacao) {
        this._negociacoes.push(negociacao);
    }
    ;
    list() {
        return [...this._negociacoes];
    }
}
