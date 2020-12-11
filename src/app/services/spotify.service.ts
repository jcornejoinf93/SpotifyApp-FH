import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private token = 'Bearer BQCPBAHENG5iGw5xEan9mz3Ip6a0Y3jBmGWF5pdmeYEFM7ZjErMIngvrsc3DHoROc-SnIht6IAdwGZoP3Hg';
  private url = 'https://api.spotify.com/v1/';

  constructor( private http: HttpClient ) {}

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': this.token
    });

    return this.http.get(`${ this.url }browse/new-releases`, { headers })
                .pipe(map( data =>  data['albums'].items ));
  }

  searchArtist( termino: string ){

    const headers = new HttpHeaders({
      'Authorization': this.token
    });

    return this.http.get(`${ this.url }search?query=${ termino }&type=artist&offset=0&limit=15`, { headers } )
                    .pipe(map(data => data['artists'].items ));
  }

  getArtist( id: string ){

    const headers = new HttpHeaders({
      'Authorization': this.token
    });
    return this.http.get(`${ this.url }artists/${id}`, {headers});
  }

  getTopTracks( id: string ){
    const headers = new HttpHeaders({
      'Authorization': this.token
    });
    return this.http.get(`${ this.url }artists/${id}/top-tracks?market=ES`, {headers})
                    .pipe(map(data => data['tracks']));
  }
}
