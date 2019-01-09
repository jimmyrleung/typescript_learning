System.register(["./printable"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var printable_1, Negociacoes;
    return {
        setters: [
            function (printable_1_1) {
                printable_1 = printable_1_1;
            }
        ],
        execute: function () {
            Negociacoes = class Negociacoes extends printable_1.Printable {
                constructor() {
                    super(...arguments);
                    this._negociacoes = [];
                }
                add(negociacao) {
                    this._negociacoes.push(negociacao);
                }
                ;
                list() {
                    return [...this._negociacoes];
                }
                ;
                log() {
                    console.log(JSON.stringify(this._negociacoes));
                }
                ;
            };
            exports_1("Negociacoes", Negociacoes);
        }
    };
});
