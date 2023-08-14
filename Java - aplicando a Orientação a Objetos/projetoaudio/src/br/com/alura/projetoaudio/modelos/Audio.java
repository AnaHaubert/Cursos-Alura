package br.com.alura.projetoaudio.modelos;

public class Audio {
    private String titulo;
    private int Reproducoes;
    private int curtidas;
    private int classificacao;

    public String getTitulo() {
        return this.titulo;
    }
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }
    public int getReproducoes() {
        return this.Reproducoes;
    }
    public int getCurtidas() {
        return this.curtidas;
    }
    public int getClassificacao() {
        return this.classificacao;
    }
    public void curte() {
        this.curtidas++;
    }
    public void reproduz() {
        this.Reproducoes++;
    }


}
