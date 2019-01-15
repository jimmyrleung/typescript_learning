import { Negociacao } from './Negociacao';
import { IPrintable } from '../interfaces/index';

export class Negociacoes implements IPrintable {

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