package br.com.alura.projetoaudio.principal;

import br.com.alura.projetoaudio.modelos.Favoritas;
import br.com.alura.projetoaudio.modelos.Musica;
import br.com.alura.projetoaudio.modelos.Podcast;

public class Principal {
    public static void main(String[] args) {
        Musica minhaMusica = new Musica();
        minhaMusica.setTitulo("Forever");
        minhaMusica.setArtista("Kiss");

        for (int i = 0; i < 1000; i++) {
            minhaMusica.reproduz();
        }
        for (int i = 0; i < 50; i++) {
            minhaMusica.curte();
        }

        Podcast meuPodcast = new Podcast();
        meuPodcast.setTitulo("BolhaDev");
        meuPodcast.setHost("Marcus Mendes");

        for (int i = 0; i < 5000; i++) {
            meuPodcast.reproduz();
        }
        for (int i = 0; i < 1000; i++) {
            meuPodcast.curte();
        }

        Favoritas favoritas = new Favoritas();
        favoritas.inclui(meuPodcast);
        favoritas.inclui(minhaMusica);
    }
}
