System.register(["../models/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, NegociacaoService;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            NegociacaoService = class NegociacaoService {
                getNegociacoes() {
                    return fetch('http://localhost:8080/dados')
                        .then((res) => this._isOk(res))
                        .then((res) => res.json())
                        .then((data) => data.map((np) => new index_1.Negociacao(new Date(), np.vezes, np.montante)))
                        .catch(err => console.log(err));
                }
                _isOk(res) {
                    if (res.ok) {
                        return res;
                    }
                    else {
                        throw new Error(res.statusText);
                    }
                }
            };
            exports_1("NegociacaoService", NegociacaoService);
        }
    };
});
