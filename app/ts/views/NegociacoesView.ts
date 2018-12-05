import { View } from './View';
import { Negociacoes } from '../models/Negociacoes';

export class NegociacoesView extends View<Negociacoes>{

    template(negociacoes: Negociacoes): string {

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
        
            <tbody>
                ${
            // O map retorna um Array, mas queremos uma string, entao usamos o join sem separador
            negociacoes.list().map((n) => {
                return `
                        <tr>
                            <td>${n.data.toLocaleDateString()}</td>
                            <td>${n.quantidade}</td>
                            <td>${n.valor}</td>
                            <td>${n.volume}</td>
                        </tr>
                        `;
            }).join('')
            }
            </tbody>
        
            <tfoot>
            </tfoot>
    </table>
        `;

    };

}