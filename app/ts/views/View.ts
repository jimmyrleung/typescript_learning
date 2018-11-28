export abstract class View<T> {
    protected _element: JQuery;
    private _escape: boolean;

    constructor(selector: string, escape: boolean = false) {
        this._element = $(selector);
        this._escape = escape;
    };

    update(model: T): void {
        let template = this.template(model);

        // escape any <script>
        if (this._escape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/g, "");
        }

        this._element.html(template);
    };

    // TODO: create an interface and remove this abstract method
    abstract template(model: T): string;
}
