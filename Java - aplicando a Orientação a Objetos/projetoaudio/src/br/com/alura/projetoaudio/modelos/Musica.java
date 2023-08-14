package br.com.alura.projetoaudio.modelos;

public class Musica extends Audio {
    private String album;
    private String artista;
    private String genero;

    public String getAlbum() {
        return album;
    }
    public void setAlbum(String album) {
        this.album = album;
    }
    public String getArtista() {
        return this.artista;
    }
    public void setArtista(String artista) {
        this.artista = artista;
    }
    public String getGenero() {
        return this.genero;
    }
    public void setGenero(String genero) {
        this.genero = genero;
    }

    @Override
    public int getClassificacao() {
        if (this.getReproducoes() > 2000) {
            return 10;
        } else {
            return 7;
        }
    }
}
