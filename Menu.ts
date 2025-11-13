import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { Produto } from "./src/model/Produto";
import { Hardware } from './src/model/Hardware';
import { Software } from './src/model/Software';
import { ProdutoController } from "./src/controller/ProdutoController";


export function main() {
    //Instância da Classe ContaController
    let produtos: ProdutoController = new ProdutoController();

    //Variáveis Auxiliares
    let opcao, prodId, tipo, preco, quant, tamanho, peso: number;
    let nome: string;
    const tipoProd = ['Software', 'Hardware'];
    //const estado = ['Novo','Velho']

// Criação automatica de Objetos(Teste)
    // let prod1: Software = new Software(1, 123, 1, "Windows 10", 1000, 100.0);
    // let prod2: Hardware = new Hardware(1, 123, 2, "Windows 10", 1000, 23);
    // prod1.visualizar();
    // prod2.visualizar();


    while (true) {

        console.log(colors.bg.black, colors.fg.bluestrong, 
                    "\n*****************************************************");
        console.log("                                                     ");
        console.log("              ### VINI TECH SCRAPS ###               ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Adicionar Produto                    ");
        console.log("            2 - Listar todos os Produtos             ");
        console.log("            3 - Buscar Produto por Numero de ID      ");
        console.log("            4 - Atualizar Dados do Produto           ");
        console.log("            5 - Apagar Produto                       ");
        console.log("            6 - TBA                                  ");
        console.log("            7 - TBA                                  ");
        console.log("            8 - TBA                                  ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ", 
        colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.greenstrong, "\nVini Tech Scraps - Tecnologia com Consciencia!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, "\n\nAdicionar Produto\n\n", colors.reset);

                console.log(`Digite a Quantidade de produtos em estoque: `);
                quant = readlinesync.questionInt("")

                console.log(`Digite o Nome do Produto: `);
                nome = readlinesync.question("")

                console.log(`Digite o Tipo de Produto: `);
                tipo = readlinesync.keyInSelect(tipoProd, "", {cancel: false}) +1;

                console.log(`Digite o Preço do Produto (R$): `);
                preco = readlinesync.questionFloat("")

                switch (tipo){
                    case 1:
                        console.log(`Digite o Tamanho em Megabytes do Produto (MB): `);
                        tamanho = readlinesync.questionFloat("")
                        produtos.cadastrar(new Software(produtos.gerarNumero(), quant, tipo, nome, preco, tamanho));
                        break;
                    case 2:
                        console.log(`Digite o peso do Produto: `);
                        peso = readlinesync.questionFloat("")
                        produtos.cadastrar(new Hardware(produtos.gerarNumero(), quant, tipo, nome, preco, peso));
                        break;
                }

                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong, "\n\nListar todos os Produtos\n\n", colors.reset);

                produtos.listarTodas();

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, "\n\nBuscar Produto por Numero de ID\n\n", colors.reset);

                console.log("Digite o número do ID do Produto: ");
                prodId = readlinesync.questionInt("");
                produtos.procurarPorNumero(prodId);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, "\n\nAtualizar Dados do Produto\n\n", colors.reset);
                
                console.log("Digite o numero de ID do Produto: ");
                prodId = readlinesync.questionInt("");

                let conta = produtos.buscarNoArray(prodId);

                if (conta != null) {

                    console.log(`Digite a Quantidade de produtos em estoque: `);
                    quant = readlinesync.questionInt("")

                    console.log(`Digite o Nome do Produto: `);
                    nome = readlinesync.question("")

                    console.log(`Digite o Tipo de Produto: `);
                    tipo = readlinesync.keyInSelect(tipoProd, "", {cancel: false}) +1;

                    console.log(`Digite o Preco do Produto (R$): `);
                    preco = readlinesync.questionFloat("")

                    switch (tipo){
                        case 1:
                            console.log(`Digite o Tamanho em Megabytes do Produto (MB): `);
                            tamanho = readlinesync.questionFloat("")
                            produtos.atualizar(new Software(prodId, quant, tipo, nome, preco, tamanho));
                            break;
                        case 2:
                            console.log(`Digite o peso do Produto: `);
                            peso = readlinesync.questionFloat("")
                            produtos.atualizar(new Hardware(prodId, quant, tipo, nome, preco, peso));
                            break;
                    }
                }
                else {
                    console.log(colors.fg.red, "\nO Produto de ID numero: " + prodId + 
                    " não foi encontrado!", colors.reset);
                }
                
                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong, "\n\nApagar Produto\n\n", colors.reset);

                console.log("Digite o número de ID do Produto: ");
                prodId = readlinesync.questionInt("");
                produtos.deletar(prodId);

                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong, "\n\nFuncionalidade ainda sendo desenvolvida, Aguarde!\n\n", colors.reset);

                keyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong, "\n\nFuncionalidade ainda sendo desenvolvida, Aguarde!\n\n", colors.reset);

                keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong, "\n\nJÁ FALEI PRA AGUARDAR!!!!!\n\n", colors.reset);

                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong, "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Vinicius Pimentel - vinii.2302@gmail.com");
    console.log("github.com/vinii-pimentel");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();