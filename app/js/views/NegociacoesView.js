class NegociacoesView extends View {
    template(negociacoes) {
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
                ${negociacoes.list().map((n) => {
            return `
                        <tr>
                            <td>${n.data.toLocaleDateString()}</td>
                            <td>${n.quantidade}</td>
                            <td>${n.valor}</td>
                            <td>${n.volume}</td>
                        </tr>
                        `;
        }).join('')}
            </tbody>
        
            <tfoot>
            </tfoot>
    </table>
        `;
    }
    ;
}
