import { NegociacoesView, MensagemView } from '../views/index';
import { Negociacoes, Negociacao } from '../models/index';

export class NegociacaoController {
    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView("#negociacoesView");
    private _mensagemView = new MensagemView("#mensagemView");

    constructor() {
        // Como o querySelector nos devolve um tipo genérico (Element)
        // precisamos convertê-lo para um tipo mais específico
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._negociacoesView.update(this._negociacoes);
    }

    add(evt: Event) {
        evt.preventDefault();

        const dt = new Date(this._inputData.val().replace(/-/g, ","));

        // Se for domingo ou sabado
        if (!this.isDiaUtil(dt)) {
            this._mensagemView.update("Só é possível negociar em dias úteis!");
            return;
        }

        this._negociacoes.add(new Negociacao(
            dt, parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val()),
        ));

        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update("Negociação adicionada com sucesso!");
    }

    private isDiaUtil(dt: Date) {
        return dt.getDay() !== DiasDaSemana.Domingo && dt.getDay() !== DiasDaSemana.Sabado;
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