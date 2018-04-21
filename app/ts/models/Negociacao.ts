export class Negociacao {    
    
    constructor(readonly _data: Date, readonly _quantidade: number, readonly _valor: number){}    

    get volume() {
        return this._quantidade * this._valor;
    }
}