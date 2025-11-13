import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';

export function main() {
    
    //Variáveis Auxiliares
    let opcao, prodId, preco, quant: number;
    let nome, infoExtra: string;
    const estado = ['Novo','Velho']

    while (true) {

        console.log(colors.bg.black, colors.fg.bluestrong, 
                    "\n*****************************************************");
        console.log("                                                     ");
        console.log("              ### VINI TECH SCRAPS ###               ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Adicionar Produto                    ");
        console.log("            2 - Listar todos us Produtos             ");
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

                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong, "\n\nListar todos os Produtos\n\n", colors.reset);

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, "\n\nBuscar Produto por Numero de ID\n\n", colors.reset);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, "\n\nAtualizar Dados do Produto\n\n", colors.reset);
                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong, "\n\nApagar Produto\n\n", colors.reset);

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