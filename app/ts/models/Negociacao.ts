class Negociacao {

    constructor(private _data, private _quantidade, private _valor) { }

    get data() { return this._data; }

    get quantidade() { return this._quantidade; }

    get valor() { return this._valor; }

    get volume() { return this._quantidade * this._valor; }
}