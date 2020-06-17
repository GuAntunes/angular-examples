import { Router, ActivatedRoute } from '@angular/router';
import { Observable, empty, Subject } from 'rxjs';
import { CursosService } from './../cursos.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {

  // cursos: Curso[];

  cursos$: Observable<Curso[]>;

  error$ = new Subject<boolean>();

  constructor(private service: CursosService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.onRefresh();
  }

  onRefresh() {
    this.cursos$ = this.service.list()
      .pipe(
        catchError(error => {
          console.log(error);
          this.error$.next(true);
          return empty();
        })
      );

    // this.service.list().subscribe(
    //   dados => {
    //     console.log(dados)
    //   },
    //   error => {
    //     console.log(error)
    //   },
    //   () => console.log('Observable completo!')
    // );
  }

  onEdit(id) {
    this.router.navigate(['editar', id], {relativeTo: this.route});
  }

}
