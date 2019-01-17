import { Negociacao } from "../models/index";
import { INegociacaoParcial } from "../interfaces/index";

export class NegociacaoService {
    async getNegociacoes(): Promise<void | Negociacao[]> {
        try {
            const response = this._isOk(await fetch('http://localhost:8080/dados'));
            const jsonResponse: INegociacaoParcial[] = await response.json();
            return jsonResponse.map((np) => new Negociacao(new Date(), np.vezes, np.montante));
        } catch (err) {
            console.log(err);
            throw new Error(err);
        }
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