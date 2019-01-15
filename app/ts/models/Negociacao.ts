import { IPrintable } from '../interfaces/index';

export class Negociacao implements IPrintable {

    constructor(
        readonly data: Date,
        readonly quantidade: number,
        readonly valor: number
    ) { }

    get volume(): number { return this.quantidade * this.valor; };

    log(): void {
        console.log(JSON.stringify(this));
    }

}