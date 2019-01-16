import { IBaseModel } from '../interfaces/index';

export class Negociacao implements IBaseModel<Negociacao> {

    constructor(
        readonly data: Date,
        readonly quantidade: number,
        readonly valor: number
    ) { }

    get volume(): number { return this.quantidade * this.valor; };

    log(): void {
        console.log(JSON.stringify(this));
    }

    equals(negociacao: Negociacao): boolean {
        return this.data.getDate() === negociacao.data.getDate() &&
            this.data.getMonth() === negociacao.data.getMonth() &&
            this.data.getFullYear() === negociacao.data.getFullYear();
    }

}