namespace Views {
    export abstract class View<T> {
        protected _element: JQuery;

        constructor(selector: string) {
            this._element = $(selector);
        };

        update(model: T): void {
            this._element.html(this.template(model));
        };

        // TODO: create an interface and remove this abstract method
        abstract template(model: T): string;
    }
}