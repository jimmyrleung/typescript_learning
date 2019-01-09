System.register(["../views/index", "../models/index", "../decorators/index", "../services/index", "../util/utils"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, index_3, index_4, utils_1, NegociacaoController, DiasDaSemana;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            },
            function (index_4_1) {
                index_4 = index_4_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_2.Negociacoes();
                    this._negociacoesView = new index_1.NegociacoesView("#negociacoesView");
                    this._mensagemView = new index_1.MensagemView("#mensagemView");
                    this._negociacoesService = new index_4.NegociacaoService();
                    this._negociacoesView.update(this._negociacoes);
                }
                add(evt) {
                    evt.preventDefault();
                    const dt = new Date(this._inputData.val().replace(/-/g, ","));
                    if (!this.isDiaUtil(dt)) {
                        this._mensagemView.update("Só é possível negociar em dias úteis!");
                        return;
                    }
                    const negociacao = new index_2.Negociacao(dt, parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    utils_1.log(negociacao);
                    this._negociacoes.add(negociacao);
                    utils_1.log(this._negociacoes);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update("Negociação adicionada com sucesso!");
                }
                isDiaUtil(dt) {
                    return dt.getDay() !== DiasDaSemana.Domingo && dt.getDay() !== DiasDaSemana.Sabado;
                }
                importData() {
                    this._negociacoesService.getNegociacoes()
                        .then((negociacoes) => {
                        if (negociacoes) {
                            negociacoes.forEach((neg) => this._negociacoes.add(neg));
                        }
                        this._negociacoesView.update(this._negociacoes);
                    });
                }
            };
            __decorate([
                index_3.DomInject("#data")
            ], NegociacaoController.prototype, "_inputData", void 0);
            __decorate([
                index_3.DomInject("#quantidade")
            ], NegociacaoController.prototype, "_inputQuantidade", void 0);
            __decorate([
                index_3.DomInject("#valor")
            ], NegociacaoController.prototype, "_inputValor", void 0);
            __decorate([
                index_3.ExecutionTimeBenchmark()
            ], NegociacaoController.prototype, "add", null);
            __decorate([
                index_3.Throttle()
            ], NegociacaoController.prototype, "importData", null);
            exports_1("NegociacaoController", NegociacaoController);
            (function (DiasDaSemana) {
                DiasDaSemana[DiasDaSemana["Domingo"] = 0] = "Domingo";
                DiasDaSemana[DiasDaSemana["Segunda"] = 1] = "Segunda";
                DiasDaSemana[DiasDaSemana["Terca"] = 2] = "Terca";
                DiasDaSemana[DiasDaSemana["Quarta"] = 3] = "Quarta";
                DiasDaSemana[DiasDaSemana["Quinta"] = 4] = "Quinta";
                DiasDaSemana[DiasDaSemana["Sexta"] = 5] = "Sexta";
                DiasDaSemana[DiasDaSemana["Sabado"] = 6] = "Sabado";
            })(DiasDaSemana || (DiasDaSemana = {}));
            ;
        }
    };
});
