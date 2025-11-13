import { Produto } from "./Produto";

export class Software extends Produto {

    private _tamanho: number;

    constructor(prodId: number, quant: number, tipo: number, nome: string, preco: number, tamanho: number) {
        super(prodId, quant, tipo, nome, preco);
        this._tamanho = tamanho;
    }
    
    public get tamanho() {
        return this._tamanho;
    }

    public set tamanho(tamanho: number) {
        this._tamanho = tamanho;
    }

    public visualizar(): void {
        super.visualizar();
        console.log("Tamanho em Megabytes do Software: " + this._tamanho.toFixed(2));
    }

}