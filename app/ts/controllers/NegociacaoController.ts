import { NegociacoesView, MensagemView } from '../views/index';
import { Negociacoes, Negociacao } from '../models/index';
import { ExecutionTimeBenchmark, DomInject, Throttle } from '../decorators/index';
import { INegociacaoParcial } from '../interfaces/index';

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

    @Throttle()
    importData() {
        function isOk(res: Response) {
            if (res.ok) {
                return res;
            }
            else {
                throw new Error(res.statusText);
            }
        }

        fetch('http://localhost:8080/dados')
            .then((res) => isOk(res))
            .then((res) => res.json())
            .then((data: INegociacaoParcial[]) => {
                data.map((np) => new Negociacao(new Date(), np.vezes, np.montante))
                    .forEach((neg) => this._negociacoes.add(neg))

                this._negociacoesView.update(this._negociacoes)
            })
            .catch(err => console.log(err));

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