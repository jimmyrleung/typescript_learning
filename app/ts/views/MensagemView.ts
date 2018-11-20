namespace Views {
    import View = Views.View;
    
    // Should be exported because it's inside a namespace
    export class MensagemView extends View<string>{
    
        template(mensagem: string): string {
            return `<p class="alert alert-info">${mensagem}</p>`;
        };

    }

}