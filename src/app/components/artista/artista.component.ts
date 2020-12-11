import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {

  artista: any = {};
  topTracks: any[] = [];
  loading: boolean;

  constructor( private aroute: ActivatedRoute,
               private spotifyServices: SpotifyService ) {

    aroute.params.subscribe( params => {
      console.log(params['id']);
      this.obtieneArtista(params['id']);
      this.obtieneTopTracks(params['id']);
    });

   }

   obtieneArtista( id: string ){

    this.loading = true;

    this.spotifyServices.getArtist( id )
        .subscribe( artista => {
         // console.log(artista);
          this.artista = artista;
        });
    this.loading = false;
   }

   obtieneTopTracks( id: string ){
     this.spotifyServices.getTopTracks(id).subscribe(topTracks => {
       console.log('topTracks:', topTracks);
       this.topTracks = topTracks;
     })
   }


}
