import { Negociacao } from './Negociacao';

export class Negociacoes {

    private _negociacoes: Array<Negociacao> = [];

    add(negociacao: Negociacao) {
        this._negociacoes.push(negociacao);
    };

    list(): Array<Negociacao> {
        return [...this._negociacoes];

        // Another cool way of return:
        // return ([] as Negociacao[]).concat(this._negociacoes);
    }

}