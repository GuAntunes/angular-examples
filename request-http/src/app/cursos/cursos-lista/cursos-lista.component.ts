import { Observable } from 'rxjs';
import { CursosService } from './../cursos.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {

  // cursos: Curso[];

  cursos$: Observable<Curso[]>;

  constructor(private service: CursosService) { }

  ngOnInit(): void {
    this.cursos$ = this.service.list();
  }

}
