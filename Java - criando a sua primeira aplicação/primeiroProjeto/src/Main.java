public class Main {
    public static void main(String[] args) {
        System.out.println("Esse é o Screen Match");
        System.out.println("Filme: Top Gun: Maverick");

        int anoDeLancamento = 2022;
        System.out.println("Ano de lançamento: " + anoDeLancamento);

        boolean incluidoNoPlano = true;

        double notaDoFilme = 8.1;

        int num = 5;
        int resultado = ++num;
        System.out.println(num);
        System.out.println(resultado);

        //média calculada pelas 3 notas da Jack, paulo e Suelem
        double media = (9.8 + 6.3 + 8.0) / 3;
        System.out.println(media);

        String sinopse;
        sinopse = """
            Filme Top Gun
            Filme de aventura com galã dos anos 80
            Muito bom!
            Ano de lançamento: 
            """ + anoDeLancamento;
        System.out.println(sinopse);

        int classificacao = (int) (media / 2);
        System.out.println(classificacao);


    }
}