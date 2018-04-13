class View {
    protected _elemento: Element;

    constructor(selector: string) {
        this._elemento = document.querySelector(selector);
    }
}