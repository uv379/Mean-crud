import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../appModels/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url = 'http://localhost:3000/movies/';

  constructor(private http :HttpClient) { }

  addMovie(mov:Movie){
    return this.http.post(this.url, mov);
  }

  getEmployeeList() {
    return this.http.get<Movie[]>(this.url);
  }

  getMoviebyId(id: string) {
    return this.http.get(this.url+`/${id}`);
  }

  updateMovie(mov:Movie){
    return this.http.put(`${this.url}/${mov._id}`, mov);
  }

  deleteMovie(id: string){
    return this.http.delete(`${this.url}/${id}`);
  }
}
