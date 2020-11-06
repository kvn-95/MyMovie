import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  restUrl = 'https://mymovierest.azurewebsites.net/';

  constructor(private http: HttpClient) { }

  private devURL: string = "http://localhost:63546/";
  private prodURL: string = "https://mymovierest.azurewebsites.net/"
  postResponse: string;

  getGenres() {
    return this.http.get(this.prodURL + 'generos');
  }

  getLang() {
    return this.http.get(this.prodURL + 'idiomas');
  }

  getStyles() {
    return this.http.get(this.prodURL + 'estilos');
  }

  async addMovie(postData): Promise<string> {
    await this.http.post((this.prodURL + 'nuevaPeli'), postData).toPromise().then(response => {
      this.postResponse = response.toString();
    });
    return this.postResponse
  }

  getMovies(name: string){
    return this.http.get(this.restUrl + 'busquedaPelicula/' + name);
  }
}
