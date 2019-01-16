import { NegociacoesView, MensagemView } from '../views/index';
import { Negociacoes, Negociacao } from '../models/index';
import { ExecutionTimeBenchmark, DomInject, Throttle } from '../decorators/index';
import { NegociacaoService } from '../services/index';
import { log } from '../util/utils';

export class NegociacaoController {

    // Our 'DomInject' will load our DOM Elements in a lazy way
    @DomInject("#data")
    private _inputData: JQuery;

    @DomInject("#quantidade")
    private _inputQuantidade: JQuery;

    @DomInject("#valor")
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView("#negociacoesView");
    private _mensagemView = new MensagemView("#mensagemView");
    private _negociacoesService = new NegociacaoService();

    constructor() {
        this._negociacoesView.update(this._negociacoes);
    }

    // Decorators in this TS Version are experimental, but frameworks like AngularJS already use it.
    @ExecutionTimeBenchmark()
    add(evt: Event) {
        evt.preventDefault();

        const dt = new Date(this._inputData.val().replace(/-/g, ","));

        // Se for domingo ou sabado
        if (!this.isDiaUtil(dt)) {
            this._mensagemView.update("Só é possível negociar em dias úteis!");
            return;
        }

        const negociacao = new Negociacao(
            dt, parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val()),
        );

        log(negociacao);
        this._negociacoes.add(negociacao);
        log(this._negociacoes);

        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update("Negociação adicionada com sucesso!");
    }

    private isDiaUtil(dt: Date) {
        return dt.getDay() !== DiasDaSemana.Domingo && dt.getDay() !== DiasDaSemana.Sabado;
    }

    @Throttle() // prevent an event to be triggered many times
    importData() {
        const negociacoesImportadas = this._negociacoes.list();

        this._negociacoesService.getNegociacoes()
            .then((negociacoes) => {
                if (negociacoes) {
                    negociacoes
                        .filter((n) => !negociacoesImportadas.some(ni => ni.equals(n)))
                        .forEach((neg) => this._negociacoes.add(neg))
                }

                this._negociacoesView.update(this._negociacoes)
            });
    }
}

enum DiasDaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
};