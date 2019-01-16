import { Negociacao } from './Negociacao';
import { IPrintable, IEquals } from '../interfaces/index';

export class Negociacoes implements IPrintable, IEquals<Negociacoes> {

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

    equals(negociacoes: Negociacoes) {
        return JSON.stringify(negociacoes) === JSON.stringify(this._negociacoes);
    }
}