System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Negociacoes;
    return {
        setters: [],
        execute: function () {
            Negociacoes = class Negociacoes {
                constructor() {
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
                    this._negociacoes.forEach((n) => n.log());
                }
                ;
            };
            exports_1("Negociacoes", Negociacoes);
        }
    };
});
