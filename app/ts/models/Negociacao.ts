import { Printable } from './index';

export class Negociacao extends Printable {

    constructor(
        readonly data: Date,
        readonly quantidade: number,
        readonly valor: number
    ) { super(); }

    get volume(): number { return this.quantidade * this.valor; };

    log(): void {
        console.log(JSON.stringify(this));
    }

}