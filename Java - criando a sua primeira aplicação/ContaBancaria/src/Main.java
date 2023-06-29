import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        //** Inicializar dados do cliente
        String nomeCliente = "Anderson Santiago1";
        String tipoConta = "Corrente";
        double saldo = 5000;

        String dadosIniciaisCliente = """
            ******************************
            Dados do cliente: 
            Nome: %s
            Tipo de conta: %s
            Saldo: R$ %.2f 
            ******************************
            """.formatted(nomeCliente, tipoConta, saldo);

        System.out.println(dadosIniciaisCliente);

        //** Menu de opções
        Scanner leitura = new Scanner(System.in);
        String operacoes = """
                Operações - Digite o número equivalente a operação desejada:
                1 - Consultar saldos
                2 - Depósito
                3 - Tranferência
                4 - Sair
                """;
        int operacaoUsuario = 0;

        while (operacaoUsuario != 4) {
            System.out.println(operacoes);
            operacaoUsuario = leitura.nextInt();

            //** operações
            switch (operacaoUsuario) {
                case 1:
                    System.out.println("Saldo: R$" + saldo);
                    break;
                case 2:
                    System.out.println("Digite o valor do deposito:");
                    double deposito = leitura.nextDouble();
                    saldo += deposito;
                    System.out.println("Saldo atualizado: R$" + saldo);
                    break;
                case 3:
                    System.out.println("Digite o valor da tranferência:");
                    double transferencia = leitura.nextDouble();
                    if (transferencia > saldo) {
                        System.out.println("Saldo insuficiente");
                    } else {
                        saldo -= transferencia;
                    }
                    System.out.println("Saldo atualizado: R$" + saldo);
                    break;
                case 4:
                    break;
                default:
                    System.out.println("Digite uma operação válida!");
            }
        }
    }
}