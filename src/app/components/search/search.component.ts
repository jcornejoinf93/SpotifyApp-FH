import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  artistas: any[] = [];
  loading: boolean;

  constructor( private spotifyService: SpotifyService ) {}

  buscar( termino:string ){

    this.loading = true;

    this.spotifyService.searchArtist( termino )
        .subscribe( (artista: any) => {
          this.artistas = artista;
          console.log(this.artistas);
        });
    this.loading = false;
  }

}
