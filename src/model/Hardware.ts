import { Produto } from "./Produto";

export class Hardware extends Produto {

    private _peso: number;

    constructor(prodId: number, quant: number, tipo: number, nome: string, preco: number, peso: number) {
        super(prodId, quant, tipo, nome, preco);
        this._peso = peso;
    }
    public get peso() {
        return this._peso;
    }

    public set peso(peso: number) {
        this._peso = peso;
    }

    public visualizar(): void {
        super.visualizar();
        console.log("Peso do Produto: " + this._peso+"kg");
    }

}