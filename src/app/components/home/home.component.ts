import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  canciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor( private _spotifyServices: SpotifyService ) {
    this.loading =  true;
    this.error = false;
   }

  ngOnInit(): void {

    this._spotifyServices.getNewReleases().subscribe((respuesta: any) => {
      this.canciones = respuesta;
      console.log(this.canciones);
      this.loading = false;
    }, (err) => {
      //console.log(err.error.error.message);
      this.error = true;
      this.mensajeError = err.error.error.message;
    });

  }

}
