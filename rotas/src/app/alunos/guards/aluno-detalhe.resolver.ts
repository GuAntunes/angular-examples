import { AlunosService } from './../alunos.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Aluno } from './../aluno';

//Este arquivo Resolver funciona para que o carregamento antecipado das informações 
//seja possivel, não havendo a necessidade da tela aguardar para poder renderizar os componentes
@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno> {

    constructor(private alunosService: AlunosService){}

    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

            let id = route.params['id'];
            return this.alunosService.getAluno(id);
    }

}
