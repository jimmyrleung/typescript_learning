System.register(["./index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, Negociacao;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            Negociacao = class Negociacao extends index_1.Printable {
                constructor(data, quantidade, valor) {
                    super();
                    this.data = data;
                    this.quantidade = quantidade;
                    this.valor = valor;
                }
                get volume() { return this.quantidade * this.valor; }
                ;
                log() {
                    console.log(JSON.stringify(this));
                }
            };
            exports_1("Negociacao", Negociacao);
        }
    };
});
