abstract class View<T> {
    protected _element: Element;

    constructor(selector: string) {
        this._element = document.querySelector(selector);
    };

    update(model: T): void {
        this._element.innerHTML = this.template(model);
    };

    // TODO: create an interface and remove this abstract method
    abstract template(model: T): string;
}