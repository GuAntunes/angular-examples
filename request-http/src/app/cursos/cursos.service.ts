import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Curso } from './curso';
import { delay, tap, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = `${environment.API}/cursos`;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Curso[]>(this.API)
    .pipe(
      delay(2000),
      tap(console.log)
    );
  }

  create(curso) {
    return this.http.post(this.API, curso)
    .pipe(take(1));
  }

  loadById(id) {
    return this.http.get(`${this.API}/${id}`).pipe(take(1));
  }

}
