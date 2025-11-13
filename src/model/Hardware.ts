import { Produto } from "./Produto";

export class Hardware extends Produto {

    private _peso: number;

    constructor(prodId: number, quant: number, tipo: number, nome: string, preco: number, peso: number) {
        super(prodId, quant, tipo, nome, preco);
        this._peso = peso;
    }
    public get aniversario() {
        return this._peso;
    }

    public set aniversario(aniversario: number) {
        this._peso = aniversario;
    }

    public visualizar(): void {
        super.visualizar();
        console.log("Peso do Produto: " + this._peso);
    }

}