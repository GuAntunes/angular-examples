import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { EstadoBr } from '../models/estado-br';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private httpClient: HttpClient) { }

  getEstadoBr() {
    return this.httpClient.get<EstadoBr[]>('assets/dados/estadosbr.json')
    .pipe(map(res => res));
  }

  getCargos(){
    return [
      { nome: 'Dev', nivel: 'Junior', desc: 'Dev Jr'},
      { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl'},
      { nome: 'Dev', nivel: 'Senior', desc: 'Dev Sr'},
    ]
  }

  getTecnologias() {
    return [
      { nome: 'java', desc: 'Java'},
      { nome: 'javascript', desc: 'JavaScript'},
      { nome: 'php', desc: 'PHP'},
      { nome: 'ruby', desc: 'Ruby'},
    ];
  }

  getNewsLetter() {
    return [
      { valor: 's', desc: 'Sim'},
      { valor: 'n', desc: 'Não'}
    ]
  }

}
