export abstract class Produto {

    private _prodId: number;
    private _quant: number;
    private _tipo: number;
    private _nomeProd: string;
    private _preco: number;

    constructor(prodId: number, quant: number, tipo: number, nomeProd: string, preco: number) {
        this._prodId = prodId;
        this._quant = quant;
        this._tipo = tipo;
        this._nomeProd = nomeProd;
        this._preco = preco;
    }

    public get prodId() {
        return this._prodId;
    }

    public set prodId(prodId: number) {
        this._prodId = prodId;
    }

    public get quant() {
        return this._quant;
    }

    public set quant(quant: number) {
        this._quant = quant;
    }

    public get tipo() {
        return this._tipo;
    }

    public set tipo(tipo: number) {
        this._tipo = tipo;
    }

    public get nomeProd() {
        return this._nomeProd;
    }

    public set nomeProd(nomeProd: string) {
        this._nomeProd = nomeProd;
    }

    public get preco() {
        return this._preco;
    }

    public set preco(preco: number) {
        this._preco = preco;
    }

    public visualizar(): void {

        let tipo: string = "";

        switch (this._tipo) {
            case 1:
                tipo = "Software";
                break;
            case 2:
                tipo = "Hardware";
                break;
        }

        console.log("\n\n*****************************************************");
        console.log("Dados do Produto:");
        console.log("*****************************************************");
        console.log("Numero ID do Produto: " + this._prodId);
        console.log("Nome do Produto: " + this._nomeProd);
        console.log("Quantidade restante: " + this._quant);
        console.log("Tipo do Produto: " + tipo);
        console.log("Preco: R$" + this._preco.toFixed(2));

    }

}