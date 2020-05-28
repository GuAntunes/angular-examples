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

  getEstadoBr(): Observable<any> {
    return this.httpClient.get('assets/dados/estadosbr.json');
  }

}
