package br.com.alura.projetoaudio.modelos;

public class Favoritas {
    public void inclui(Audio audio) {
        if(audio.getClassificacao() >= 9) {
            System.out.println(audio.getTitulo() + " é sucesso absoluto!");
        } else {
            System.out.println(audio.getTitulo() + " deve ser incluído na sua lista!");
        }
    }
}
