import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";
import { colors } from "../util/Colors";

export class ProdutoController implements ProdutoRepository{

    private _listaProdutos: Array<Produto> = new Array<Produto>();
    prodId: number = 0;

    procurarPorNumero(prodId: number): void {
        //throw new Error("Method not implemented.");
        let buscaProduto = this.buscarNoArray(prodId);

        if (buscaProduto != null) {
            buscaProduto.visualizar();
        } else
            console.log(colors.fg.red, "\nO produto de ID: " + prodId
                + " não foi encontrado!", colors.reset);
    }
    listarTodas(): void {
        for (let produto of this._listaProdutos){
            produto.visualizar();
        }
        //throw new Error("Method not implemented.");
    }
    cadastrar(produto: Produto): void {
        this._listaProdutos.push(produto);
        console.log(colors.fg.green, "\nO Produto de ID: " + produto.prodId + " foi criado com sucesso!", colors.reset)
        //throw new Error("Method not implemented.");
    }
    atualizar(produto: Produto): void {
        let buscaProduto = this.buscarNoArray(produto.prodId);

        if (buscaProduto != null) {
            this._listaProdutos[this._listaProdutos.indexOf(buscaProduto)] = produto;
            console.log(colors.fg.green, "\nO Produto de ID: " + produto.prodId + 
                        " foi atualizado com sucesso!", colors.reset);
        } else
            console.log(colors.fg.red, "\nO Produto de ID: " + produto.prodId + 
                        " não foi encontrado!", colors.reset);
        //throw new Error("Method not implemented.");
    }
    deletar(prodId: number): void {
        let buscaProduto = this.buscarNoArray(prodId);

        if (buscaProduto != null) {
            this._listaProdutos.splice(this._listaProdutos.indexOf(buscaProduto), 1);
        	console.log(colors.fg.green,"\nO Produto de ID: " + prodId + 
                        " foi apagado com sucesso!", colors.reset);
        }else
        console.log(colors.fg.red,"\nO Produto de ID: " + prodId + 
                    " não foi encontrado!", colors.reset);
        //throw new Error("Method not implemented.");
    }
    promocao(prodId: number, valor: number): void {
        let produto = this.buscarNoArray(this.prodId);
		
		if (produto != null) {
			
			if(produto.promocao(valor) == true)
            console.log(colors.fg.green,"\nPromoção de: " +(valor*100)+ "% inserida no produto de ID: "+ prodId, colors.reset);		
		
		}else
        console.log(colors.fg.red,"\nO Produto de ID numero: " + prodId + 
                    " não foi encontrado!", colors.reset);
        //throw new Error("Method not implemented.");
    }
    
    //MÉTODOS AUXILIARES

    //Gerar Número de ID do produto
    public gerarNumero(): number{
        return ++ this.prodId;
    }

     /*Checa se um Produto existe*/
    public buscarNoArray(prodId: number): Produto | null {

        for (let produto of this._listaProdutos) {
            if (produto.prodId === prodId)
                return produto;
        }
        return null;
    }

}