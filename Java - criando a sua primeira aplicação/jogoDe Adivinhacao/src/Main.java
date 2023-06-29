import java.util.Scanner;
import java.util.Random;

public class Main {
    public static void main(String[] args) {
        Scanner leitura = new Scanner(System.in);
        int numeroAleatorio = new Random().nextInt(100);
        int contador = 0;

        System.out.println("Adivinhe o número de 0 à 100. Você tem 5 chances.");

        while (contador < 5) {
            int numeroUsuario = leitura.nextInt();
            contador++;

            if (contador == 5 && numeroUsuario != numeroAleatorio) {
                System.out.println("Suas chances acabaram! O número era " + numeroAleatorio + ".");
            } else {
                if (numeroUsuario == numeroAleatorio) {
                    System.out.println("Parabéns! Você acertou. O número é " + numeroAleatorio + ".");
                    break;
                } else {
                    if (numeroUsuario > numeroAleatorio) {
                        System.out.println("O número é menor do que " + numeroUsuario + ". Tente novamente. Esta é a sua tentativa número " + contador + ".");
                    } else if (numeroUsuario < numeroAleatorio) {
                        System.out.println("O número é maior do que " + numeroUsuario  + ". Tente novamente. Esta é a sua tentativa número " + contador + ".");
                    }
                }
            }
        }
    }
}
