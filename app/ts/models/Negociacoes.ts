import { Negociacao } from './Negociacao';
import { Printable } from './printable';

export class Negociacoes extends Printable {

    private _negociacoes: Negociacao[] = [];

    add(negociacao: Negociacao) {
        this._negociacoes.push(negociacao);
    };

    list(): Negociacao[] {
        return [...this._negociacoes];

        // Another cool way of return:
        // return ([] as Negociacao[]).concat(this._negociacoes);
    };

    log() {
        console.log(JSON.stringify(this._negociacoes));
    };

}