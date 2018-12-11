import { Negociacao } from "../models/index";
import { INegociacaoParcial } from "../interfaces/index";

export class NegociacaoService {
    getNegociacoes(): Promise<void | Negociacao[]> {
        return fetch('http://localhost:8080/dados')
            .then((res) => this._isOk(res))
            .then((res) => res.json())
            .then((data: INegociacaoParcial[]) =>
                data.map((np) => new Negociacao(new Date(), np.vezes, np.montante))
            )
            .catch(err => console.log(err));
    }

    private _isOk(res: Response) {
        if (res.ok) {
            return res;
        }
        else {
            throw new Error(res.statusText);
        }
    }
}