public class Main {
    public static void main(String[] args) {
        double grausCelcius = 20.5;
        double fahrenheit = (grausCelcius * 1.8) + 32;
        int temperaturaFahrenheit = (int) (fahrenheit);
        String mensagem = """
                    A temperatura em graus celcius é igual a %.2f. 
                    A temperatura em fahrenheit é igual a %.2f.
                    A temperatura em fahrenheit convertida par número inteiro é igual a %d.
                """.formatted(grausCelcius, fahrenheit, temperaturaFahrenheit);
        /* %.2f limita a quantidade de nº depois da vírgula para 2 */
        System.out.println(mensagem);
    }
}