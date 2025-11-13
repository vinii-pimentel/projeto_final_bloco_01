import { Produto } from "../model/Produto";

export interface ProdutoRepository {

	// CRUD do eCommerce
	procurarPorNumero(prodId: number): void;
	listarTodas(): void;
	cadastrar(produto: Produto): void;
	atualizar(produto: Produto): void;
	deletar(prodId: number): void;
	
}
